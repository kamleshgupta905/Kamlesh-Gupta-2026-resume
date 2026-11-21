import express, { type Request, type Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'kamleshg9569@gmail.com';

app.set('trust proxy', 1);
app.use(express.json({ limit: '32kb' }));

// Simple sliding-window rate limiter per IP (max 12 requests per 15 minutes)
const rateBuckets = new Map<string, number[]>();
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX_REQUESTS = 12;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const prev = rateBuckets.get(ip) || [];
  const recent = prev.filter((ts) => now - ts < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX_REQUESTS) {
    rateBuckets.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateBuckets.set(ip, recent);
  return false;
}

function cleanHeader(value: string, maxLen = 140): string {
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, maxLen);
}

function cleanText(value: string, maxLen = 2000): string {
  return value.trim().slice(0, maxLen);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) && email.length <= 160;
}

interface MailPayload {
  subject: string;
  replyTo: string;
  senderName: string;
  textBody: string;
  htmlBody: string;
  fields: Record<string, string>;
  originUrl: string;
}

async function deliverEmail(payload: MailPayload): Promise<{ delivered: boolean; provider: string; note?: string }> {
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const smtpHost = process.env.SMTP_HOST?.trim() || 'smtp.gmail.com';
  const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 465;

  // 1. Direct SMTP (e.g. Gmail App Password) when configured
  if (smtpUser && smtpPass) {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass }
    });

    await transporter.sendMail({
      from: `"Portfolio Lead" <${smtpUser}>`,
      to: RECIPIENT_EMAIL,
      replyTo: payload.replyTo,
      subject: payload.subject,
      text: payload.textBody,
      html: payload.htmlBody
    });

    return { delivered: true, provider: 'smtp' };
  }

  // 2. Resend HTTPS API when configured
  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (resendKey) {
    const fromAddr = process.env.RESEND_FROM?.trim() || 'Kamlesh Portfolio <onboarding@resend.dev>';
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: fromAddr,
        to: [RECIPIENT_EMAIL],
        reply_to: payload.replyTo,
        subject: payload.subject,
        text: payload.textBody,
        html: payload.htmlBody
      })
    });

    if (!resp.ok) {
      throw new Error(`Resend delivery failed (${resp.status})`);
    }
    return { delivered: true, provider: 'resend' };
  }

  // 3. Zero-config HTTPS delivery via FormSubmit AJAX endpoint
  const formBody: Record<string, string> = {
    _subject: payload.subject,
    _replyto: payload.replyTo,
    _template: 'table',
    _captcha: 'false',
    ...payload.fields
  };

  const resp = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT_EMAIL)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Origin: payload.originUrl,
      Referer: `${payload.originUrl}/`
    },
    body: JSON.stringify(formBody)
  });

  const data = (await resp.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
  if (resp.ok && (data.success === 'true' || data.success === true)) {
    return { delivered: true, provider: 'formsubmit' };
  }

  return {
    delivered: false,
    provider: 'formsubmit',
    note: data.message || 'First-time email activation or direct browser fallback required'
  };
}

function getSafeOrigin(req: Request): string {
  const host = req.get('x-forwarded-host') || req.get('host') || 'kamlesh-portfolio-three.vercel.app';
  const proto = req.get('x-forwarded-proto') || req.protocol || 'https';
  return `${proto}://${host}`;
}

// POST /api/inquiry — Project Brief Form -> kamleshg9569@gmail.com
app.post('/api/inquiry', async (req: Request, res: Response) => {
  const ip = req.ip || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please wait a few minutes before sending another message.' });
  }

  const raw = req.body && typeof req.body === 'object' ? req.body : {};
  const name = cleanHeader(String(raw.name || ''), 100);
  const email = cleanHeader(String(raw.email || ''), 160);
  const phone = cleanHeader(String(raw.phone || 'Not provided'), 40);
  const scope = cleanHeader(String(raw.scope || 'General Inquiry'), 120);
  const message = cleanText(String(raw.message || ''), 2500);

  if (!name || name.length < 2) {
    return res.status(400).json({ ok: false, error: 'Please enter your full name.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  }
  if (!message || message.length < 5) {
    return res.status(400).json({ ok: false, error: 'Please include a short overview of your project.' });
  }

  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
  const subject = `New Project Inquiry: ${scope} — ${name}`;
  const textBody = [
    'New Project Inquiry from Portfolio Website',
    '----------------------------------------',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone / WhatsApp: ${phone}`,
    `Scope: ${scope}`,
    `Submitted: ${submittedAt}`,
    '',
    'Project Overview:',
    message
  ].join('\n');

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#111110;line-height:1.6;">
      <h2 style="margin:0 0 12px;border-bottom:2px solid #111110;padding-bottom:8px;">New Project Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Scope:</strong> ${escapeHtml(scope)}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      <hr style="border:none;border-top:1px solid #dfdfda;margin:16px 0;" />
      <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    const result = await deliverEmail({
      subject,
      replyTo: email,
      senderName: name,
      textBody,
      htmlBody,
      originUrl: getSafeOrigin(req),
      fields: {
        Type: 'Project Inquiry',
        Name: name,
        Email: email,
        Phone: phone,
        Scope: scope,
        Message: message,
        Submitted_IST: submittedAt
      }
    });

    return res.json({
      ok: true,
      delivered: result.delivered,
      provider: result.provider,
      recipient: RECIPIENT_EMAIL,
      note: result.note
    });
  } catch (err) {
    console.error('[Inquiry Mail Error]', err instanceof Error ? err.message : err);
    return res.status(200).json({
      ok: true,
      delivered: false,
      provider: 'fallback',
      recipient: RECIPIENT_EMAIL
    });
  }
});

// POST /api/booking — Discovery Call Schedule -> kamleshg9569@gmail.com
app.post('/api/booking', async (req: Request, res: Response) => {
  const ip = req.ip || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'Too many requests. Please try again in a few minutes.' });
  }

  const raw = req.body && typeof req.body === 'object' ? req.body : {};
  const name = cleanHeader(String(raw.name || ''), 100);
  const email = cleanHeader(String(raw.email || ''), 160);
  const phone = cleanHeader(String(raw.phone || 'Not provided'), 40);
  const date = cleanHeader(String(raw.date || ''), 20);
  const timeSlot = cleanHeader(String(raw.timeSlot || ''), 40);
  const topic = cleanText(String(raw.topic || 'Project Discovery Call'), 400);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !timeSlot) {
    return res.status(400).json({ ok: false, error: 'Please choose a valid date and time slot.' });
  }
  if (!name || name.length < 2) {
    return res.status(400).json({ ok: false, error: 'Please enter your name.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  }

  const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
  const subject = `Call Scheduled: ${date} at ${timeSlot} — ${name}`;
  const textBody = [
    'New Discovery Call Scheduled via Portfolio Website',
    '--------------------------------------------------',
    `Date: ${date}`,
    `Time Slot: ${timeSlot}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone / WhatsApp: ${phone}`,
    `Topic: ${topic}`,
    `Booked At: ${submittedAt}`
  ].join('\n');

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;max-width:600px;color:#111110;line-height:1.6;">
      <h2 style="margin:0 0 12px;border-bottom:2px solid #C43B1B;padding-bottom:8px;">Discovery Call Scheduled</h2>
      <p><strong>Date:</strong> ${escapeHtml(date)}</p>
      <p><strong>Time Slot:</strong> ${escapeHtml(timeSlot)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Topic:</strong> ${escapeHtml(topic)}</p>
      <p><strong>Booked At:</strong> ${escapeHtml(submittedAt)}</p>
    </div>
  `;

  try {
    const result = await deliverEmail({
      subject,
      replyTo: email,
      senderName: name,
      textBody,
      htmlBody,
      originUrl: getSafeOrigin(req),
      fields: {
        Type: 'Discovery Call Scheduled',
        Date: date,
        Time_Slot: timeSlot,
        Name: name,
        Email: email,
        Phone: phone,
        Topic: topic,
        Booked_At_IST: submittedAt
      }
    });

    return res.json({
      ok: true,
      delivered: result.delivered,
      provider: result.provider,
      recipient: RECIPIENT_EMAIL,
      note: result.note
    });
  } catch (err) {
    console.error('[Booking Mail Error]', err instanceof Error ? err.message : err);
    return res.status(200).json({
      ok: true,
      delivered: false,
      provider: 'fallback',
      recipient: RECIPIENT_EMAIL
    });
  }
});

// Explicit public asset serving (never exposes server.ts, package.json, or .env)
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/src/assets', express.static(path.join(__dirname, 'src', 'assets')));

const ALLOWED_ROOT_FILES = new Set([
  '/Kamlesh-Gupta-CV.pdf',
  '/Kamlesh_Gupta_Resume.pdf',
  '/robots.txt',
  '/site.webmanifest',
  '/sitemap.xml'
]);

app.get('*', (req: Request, res: Response) => {
  if (ALLOWED_ROOT_FILES.has(req.path)) {
    const resolved = path.resolve(__dirname, req.path.slice(1));
    if (resolved.startsWith(__dirname + path.sep)) {
      return res.sendFile(resolved);
    }
  }
  return res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
