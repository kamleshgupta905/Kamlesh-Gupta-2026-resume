(function () {
  'use strict';

  const RECIPIENT_EMAIL = 'kamleshg9569@gmail.com';

  // All 22 real projects — Scallar Biz CRM placed LAST (#22) as requested
  const PROJECTS = [
    {
      id: 'she-victor',
      number: '01',
      title: 'She Victor – Shopify Store',
      subtitle: 'Custom Shopify storefront for contemporary jewellery',
      discipline: 'E-commerce',
      tag: 'Shopify / Liquid',
      year: '2026',
      url: 'https://shevictor.com/',
      img: '/src/assets/images/work_shevictor_commerce_1795246751172.jpg',
      desc: 'Mobile-first Shopify commerce experience featuring bespoke Liquid sections, dynamic collection filtering, slide-out cart architecture, and integrated WhatsApp concierge support.',
      challenge: 'Build and customize a high-converting, mobile-first Shopify store showcasing Korean and contemporary fashion jewellery with refined brand presentation and fast checkout.',
      solution: 'Engineered custom Shopify Liquid modules, responsive collection grids, instant product filters, an interactive slide-over cart drawer, and seamless payment plus WhatsApp assistance flows.',
      outcome: 'Elevated luxury brand perception with sub-2-second mobile navigation and a frictionless checkout journey.',
      tech: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'WhatsApp API']
    },
    {
      id: 'vmh-groups-api',
      number: '02',
      title: 'VMH Groups API Platform',
      subtitle: 'High-throughput survey routing & S2S attribution gateway',
      discipline: 'SaaS & CRM',
      tag: 'API Infrastructure',
      year: '2026',
      url: 'https://api.vmhgroupsmr.com/',
      img: '/src/assets/images/work_vmh_api_1795246754293.jpg',
      desc: 'Enterprise market-research routing engine handling global supply partner allotments, fraud checks, server-to-server (S2S) conversion callbacks, and live traffic telemetry.',
      challenge: 'Design a resilient API gateway and routing dashboard for global market research traffic where millisecond redirection speed and accurate partner attribution are mission-critical.',
      solution: 'Built secure REST endpoints, deterministic survey redirection rules, automated server-to-server (S2S) callback handlers, and a real-time supply-partner monitoring console.',
      outcome: 'Reduced callback attribution latency to sub-second speeds while sustaining 99.9% uptime across high-volume research traffic.',
      tech: ['Node.js', 'Express.js', 'REST APIs', 'PHP', 'MySQL', 'S2S Callbacks']
    },
    {
      id: 'ai-voice-agent',
      number: '03',
      title: 'AI Voice Calling Agent',
      subtitle: 'Autonomous 24/7 outbound & inbound voice qualification',
      discipline: 'AI & Automation',
      tag: 'Voice AI',
      year: '2026',
      url: '',
      img: '/src/assets/images/work_ai_voice_1795246751961.jpg',
      desc: 'Low-latency conversational AI voice agent that dials prospects, conducts natural qualification interviews, books calendar appointments, and syncs structured transcripts to CRM.',
      challenge: 'Replace costly, inconsistent tele-calling operations with a round-the-clock voice system capable of natural turn-taking and instant CRM logging.',
      solution: 'Integrated LLM orchestration with Whisper speech-to-text, ElevenLabs neural voice synthesis, Twilio telephony webhooks, dynamic objection scripts, and automated call analytics.',
      outcome: 'Handles hundreds of structured qualification calls per day with consistent script adherence and zero manual data entry.',
      tech: ['OpenAI', 'Whisper', 'ElevenLabs', 'Twilio', 'Node.js']
    },
    {
      id: 'dilaire',
      number: '04',
      title: 'Dilaire – Private Matchmaking',
      subtitle: 'Confidential digital platform for Indian professionals & NRI families',
      discipline: 'Web Platforms',
      tag: 'Luxury Web',
      year: '2026',
      url: 'https://dilaire.com',
      img: '/src/assets/images/work_dilaire_editorial_1795250784287.jpg',
      desc: 'High-trust web platform for bespoke matchmaking services serving Indian professionals and global NRI families with private consultation flows.',
      challenge: 'Establish immediate discretion, authority, and trust for a private matchmaking practice serving discerning NRI clientele.',
      solution: 'Engineered bespoke service narratives, confidential enquiry journeys, structured membership presentations, and fast responsive layouts.',
      outcome: 'Elevated prospective client trust and increased qualified private consultation bookings.',
      tech: ['React.js', 'Node.js', 'REST APIs', 'Vercel']
    },
    {
      id: 'service-booking-app',
      number: '05',
      title: 'On-Demand Service App',
      subtitle: 'Cross-platform React Native booking & dispatch suite',
      discipline: 'Mobile Apps',
      tag: 'iOS & Android',
      year: '2025',
      url: '',
      img: '/src/assets/images/work_mobile_suite_1795246751829.jpg',
      desc: 'Production React Native & Expo application for doorstep service booking featuring live technician status tracking, Firebase authentication, push notifications, and role-based dispatch.',
      challenge: 'Ship a fast, native-grade on-demand booking application for both Android and iOS from a single maintainable engineering codebase.',
      solution: 'Built a cross-platform architecture using React Native, Expo, Firebase Auth, real-time job state listeners, automated push alerts, and a companion operator dashboard.',
      outcome: 'Unified single-codebase delivery across both mobile ecosystems with smooth booking velocity and strong repeat customer usage.',
      tech: ['React Native', 'Expo', 'Firebase', 'Node.js']
    },
    {
      id: 'frostwright',
      number: '06',
      title: 'Frostwright – HVAC Services',
      subtitle: 'Local-SEO conversion engine across Delhi NCR',
      discipline: 'Web Platforms',
      tag: 'Service Booking',
      year: '2026',
      url: 'https://frostwright.in',
      img: '/src/assets/images/work_web_studio_1795250784353.jpg',
      desc: 'Service booking platform for AC repair, preventive maintenance, and installation across Delhi NCR with auto-filled WhatsApp dispatch.',
      challenge: 'Build a local-SEO friendly service platform that turns urgent repair search visitors into immediate technician bookings.',
      solution: 'Structured granular service-area pages, transparent pricing schedules, and a one-tap WhatsApp enquiry funnel pre-populated with service details.',
      outcome: 'Accelerated inbound technician enquiries and improved local Google search visibility across Delhi NCR.',
      tech: ['React.js', 'JavaScript', 'WhatsApp API', 'Vercel']
    },
    {
      id: 'dayal-hospitals',
      number: '07',
      title: 'Dayal Hospitals',
      subtitle: 'Healthcare portal with specialist directory & appointment booking',
      discipline: 'Web Platforms',
      tag: 'Healthcare',
      year: '2025',
      url: 'https://dayalhospitals.com/',
      img: '/src/assets/images/work_healthcare_portal_1795250784970.jpg',
      desc: 'Structured hospital website presenting clinical departments, doctor credentials, patient resources, and digital appointment requests.',
      challenge: 'Deliver a clear, reassuring clinical web presence that reduces front-desk phone congestion.',
      solution: 'Built a CMS-backed React and Node.js platform with specialty directories, doctor profiles, and streamlined appointment intake.',
      outcome: 'Improved digital patient acquisition and reduced manual front-desk scheduling overhead.',
      tech: ['React', 'Node.js', 'REST APIs']
    },
    {
      id: 'hoarding-crm',
      number: '08',
      title: 'Hoarding CRM – Outdoor Media',
      subtitle: 'Geospatial advertising inventory & availability management',
      discipline: 'SaaS & CRM',
      tag: 'Inventory CRM',
      year: '2025',
      url: 'https://hoarding-hd9a.vercel.app/',
      img: '/src/assets/images/work_vmh_api_1795246754293.jpg',
      desc: 'Web CRM enabling outdoor media agencies to track billboard locations, dimensions, live booking availability, and site photography.',
      challenge: 'Eliminate manual Excel sheets and delayed site-availability checks across hundreds of outdoor advertising hoardings.',
      solution: 'Developed an interactive React + Node.js CRM with Google Maps inventory views, automated photograph updates, and real-time booking status.',
      outcome: 'Shortened agency inquiry-to-booking turnaround and centralized media site intelligence.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Google Maps API', 'REST APIs']
    },
    {
      id: 'ai-website-chatbot',
      number: '09',
      title: 'RAG Website AI Assistant',
      subtitle: 'Domain-trained conversational support & lead capture',
      discipline: 'AI & Automation',
      tag: 'RAG Chatbot',
      year: '2026',
      url: '',
      img: '/src/assets/images/work_ai_voice_1795246751961.jpg',
      desc: 'Custom retrieval-augmented AI assistant trained on proprietary business documentation to resolve support queries and schedule demos 24/7.',
      challenge: 'Reduce repetitive support tickets and capture high-intent website visitors outside standard business hours.',
      solution: 'Built a Pinecone + LangChain retrieval pipeline backed by OpenAI, embedded cleanly with human-handoff triggers and CRM webhook logging.',
      outcome: 'Cut first-response time to seconds and recovered after-hours leads that previously bounced.',
      tech: ['OpenAI', 'LangChain', 'Pinecone', 'Next.js']
    },
    {
      id: 'scallar-it',
      number: '10',
      title: 'Scallar IT Solution',
      subtitle: 'Corporate web presence for software & automation studio',
      discipline: 'Web Platforms',
      tag: 'Corporate Web',
      year: '2026',
      url: 'https://scallar.in',
      img: '/src/assets/images/work_web_studio_1795250784353.jpg',
      desc: 'Conversion-focused corporate site positioning Scallar IT as an enterprise automation and software engineering partner.',
      challenge: 'Create an authoritative, fast-loading marketing site that showcases case studies and converts B2B visitors into discovery calls.',
      solution: 'Engineered a Next.js responsive platform with SEO-structured service architectures and integrated lead capture pipelines.',
      outcome: 'Measurable lift in organic search discovery, faster Core Web Vitals, and stronger qualified inbound pipeline.',
      tech: ['Next.js', 'Node.js', 'Framer Motion', 'SEO']
    },
    {
      id: 'shopease-app',
      number: '11',
      title: 'ShopEase – Mobile Commerce',
      subtitle: 'Native-grade retail app with Razorpay checkout & live tracking',
      discipline: 'Mobile Apps',
      tag: 'Mobile Commerce',
      year: '2025',
      url: '',
      img: '/src/assets/images/work_mobile_suite_1795246751829.jpg',
      desc: 'Full-featured React Native shopping app integrating product catalog, wishlists, Razorpay payments, live order tracking, and admin inventory control.',
      challenge: 'Deliver a fast native mobile retail experience capable of outperforming mobile-web checkout conversion.',
      solution: 'Engineered a React Native storefront backed by Node.js, MongoDB, Razorpay payment verification, and Firebase push updates.',
      outcome: 'Mobile conversion rate surpassed the desktop web storefront within weeks of release.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Razorpay', 'Firebase']
    },
    {
      id: 'prescripto',
      number: '12',
      title: 'Prescripto – Clinical Booking',
      subtitle: 'Doctor discovery & time-slot scheduling web platform',
      discipline: 'Web Platforms',
      tag: 'HealthTech',
      year: '2025',
      url: 'https://prescripto-frontend-roan.vercel.app/',
      img: '/src/assets/images/work_healthcare_portal_1795250784970.jpg',
      desc: 'Patient-facing doctor appointment platform supporting specialty filters, clinician profiles, interactive slot selection, and instant confirmation.',
      challenge: 'Allow patients to locate verified specialists and reserve consultation slots without phone queues.',
      solution: 'Implemented a MERN-stack scheduling interface with structured availability windows and booking history.',
      outcome: 'Streamlined patient scheduling and reduced missed appointments via clear confirmation flows.',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 'whatsapp-bulk-engine',
      number: '13',
      title: 'WhatsApp Campaign Engine',
      subtitle: 'Compliant broadcast automation, templates & delivery analytics',
      discipline: 'AI & Automation',
      tag: 'Marketing Automation',
      year: '2026',
      url: '',
      img: '/src/assets/images/work_vmh_api_1795246754293.jpg',
      desc: 'High-volume WhatsApp marketing infrastructure featuring template governance, intelligent throttling, lead segmentation, and campaign attribution.',
      challenge: 'Execute large-scale WhatsApp outreach reliably without risking account bans while maintaining full delivery visibility.',
      solution: 'Engineered a Meta Cloud API broadcast scheduler with queue rate-limiting, audience segmentation, and real-time read/reply telemetry.',
      outcome: 'Scaled outbound WhatsApp volume 10x with significantly higher reply rates than email campaigns.',
      tech: ['Node.js', 'Meta WhatsApp Cloud API', 'MongoDB', 'React']
    },
    {
      id: 'fittrack-app',
      number: '14',
      title: 'FitTrack – Fitness Companion',
      subtitle: 'Personal workout programming, nutrition logs & analytics',
      discipline: 'Mobile Apps',
      tag: 'Health & Fitness',
      year: '2025',
      url: '',
      img: '/src/assets/images/work_mobile_suite_1795246751829.jpg',
      desc: 'Cross-platform fitness application providing structured workout plans, calorie & hydration logs, progress visualizations, and daily push reminders.',
      challenge: 'Keep users consistent over time with zero-friction logging and clear visual feedback on weekly progress.',
      solution: 'Created a React Native + Expo app featuring custom charts, scheduled push nudges, and real-time Firebase cloud sync.',
      outcome: 'Sustained strong daily active engagement through fast, tactile logging flows.',
      tech: ['React Native', 'Expo', 'Firebase', 'Victory Charts']
    },
    {
      id: 'matcha-brand',
      number: '15',
      title: 'Matcha Botanical Store',
      subtitle: 'Minimalist F&B flagship landing experience',
      discipline: 'E-commerce',
      tag: 'F&B Flagship',
      year: '2025',
      url: 'https://matcha-psi-ashen.vercel.app/',
      img: '/src/assets/images/work_dilaire_editorial_1795250784287.jpg',
      desc: 'Editorial F&B flagship landing page designed around calm visual pacing, refined typography, and product provenance storytelling.',
      challenge: 'Elevate perceived value for a specialty ceremonial matcha brand through restrained digital presentation.',
      solution: 'Developed a minimalist React showcase with deliberate pacing and conversion-oriented product highlights.',
      outcome: 'Delivered a flagship digital identity aligned with luxury specialty beverage positioning.',
      tech: ['React', 'Framer Motion', 'CSS3']
    },
    {
      id: 'shudhta-dairy',
      number: '16',
      title: 'Shudhta Satojas Dairy',
      subtitle: 'D2C heritage dairy brand & subscription enquiry portal',
      discipline: 'E-commerce',
      tag: 'D2C Brand',
      year: '2025',
      url: 'https://shudhta-satojas-dairy.vercel.app/',
      img: '/src/assets/images/work_shevictor_commerce_1795246751172.jpg',
      desc: 'Content-led D2C brand storefront combining product storytelling, purity credentials, and direct daily-delivery subscription enquiries.',
      challenge: 'Communicate authentic heritage and product purity while converting visitors into recurring subscribers.',
      solution: 'Crafted an editorial brand site with clean product catalogs and a direct subscription onboarding form.',
      outcome: 'Strengthened brand authority and created a direct digital subscription channel.',
      tech: ['React', 'JavaScript', 'CSS3']
    },
    {
      id: 'rb-electronics',
      number: '17',
      title: 'RB Electronics',
      subtitle: 'Structured electronics catalog & enquiry storefront',
      discipline: 'E-commerce',
      tag: 'Retail Storefront',
      year: '2025',
      url: 'https://rb-electronics.vercel.app/',
      img: '/src/assets/images/work_vmh_api_1795246754293.jpg',
      desc: 'Responsive consumer electronics catalog with structured category browsing, specification views, and direct enquiry checkout.',
      challenge: 'Organize a broad inventory of electronics products into an intuitive, fast-filtering storefront.',
      solution: 'Built a React + Vite storefront with responsive category filtering and streamlined enquiry triggers.',
      outcome: 'Improved catalog discoverability and elevated store enquiry volume.',
      tech: ['React', 'Vite', 'JavaScript']
    },
    {
      id: 'gr-solution',
      number: '18',
      title: 'GR Solution – Service Center',
      subtitle: 'Doorstep TV repair catalog & local lead generation site',
      discipline: 'Web Platforms',
      tag: 'Local Service',
      year: '2025',
      url: 'https://grsolution.co.in/',
      img: '/src/assets/images/work_web_studio_1795250784353.jpg',
      desc: 'Mobile-first appliance repair portal featuring brand-specific service pages, doorstep request forms, and instant WhatsApp click-to-chat.',
      challenge: 'Capture high-intent local mobile searches for doorstep television repair.',
      solution: 'Designed focused service landing pages with clear brand coverage and zero-friction call/WhatsApp triggers.',
      outcome: 'Generated a consistent stream of doorstep repair bookings from mobile search traffic.',
      tech: ['React', 'Vercel', 'Local SEO']
    },
    {
      id: 'quickbite',
      number: '19',
      title: 'QuickBite Ordering App',
      subtitle: 'Fast mobile food ordering & cart web application',
      discipline: 'Web Platforms',
      tag: 'Food Tech',
      year: '2025',
      url: 'https://quick-bite-brown.vercel.app/',
      img: '/src/assets/images/work_mobile_suite_1795246751829.jpg',
      desc: 'High-speed food ordering web app engineered with dynamic menu categorization, persistent cart state, and sub-2-second mobile loads.',
      challenge: 'Eliminate sluggish ordering flows on mobile networks with an instant, tactile ordering UI.',
      solution: 'Built a lightweight React + Vite application with responsive menu filters and streamlined checkout state.',
      outcome: 'Clean ordering velocity with sub-2s mobile page performance.',
      tech: ['React', 'Vite', 'JavaScript']
    },
    {
      id: 'quick-blog',
      number: '20',
      title: 'Quick Blog Publishing',
      subtitle: 'Full-stack markdown publishing & reader platform',
      discipline: 'Web Platforms',
      tag: 'Publishing',
      year: '2025',
      url: 'https://quick-blog-ivory.vercel.app/',
      img: '/src/assets/images/work_dilaire_editorial_1795250784287.jpg',
      desc: 'Distraction-free editorial publishing platform with markdown authoring, category taxonomy, full-text search, and clean SEO URLs.',
      challenge: 'Give writers an effortless authoring environment while giving readers crisp editorial legibility.',
      solution: 'Engineered a React, Node.js, and MongoDB publishing stack with clean semantic routing.',
      outcome: 'Smooth end-to-end editorial publishing and high readability across screen sizes.',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 'slv-service-center',
      number: '21',
      title: 'SLV Service Center',
      subtitle: 'Appliance repair catalog & mobile enquiry platform',
      discipline: 'Web Platforms',
      tag: 'Service Booking',
      year: '2025',
      url: 'https://slv-service-center.vercel.app/',
      img: '/src/assets/images/work_web_studio_1795250784353.jpg',
      desc: 'Digitized appliance service center storefront with structured repair catalogs, online booking intake, and direct WhatsApp/call routing.',
      challenge: 'Bring an established offline appliance repair business online with clear service transparency.',
      solution: 'Created a responsive React web presence with instant call and WhatsApp conversion paths.',
      outcome: 'Increased mobile service enquiries and strengthened local customer credibility.',
      tech: ['React', 'Vercel', 'WhatsApp Integration']
    },
    {
      id: 'scallar-biz-crm',
      number: '22',
      title: 'Scallar Biz CRM',
      subtitle: 'Multi-tenant WhatsApp Cloud API SaaS & AI reply engine',
      discipline: 'SaaS & CRM',
      tag: 'SaaS Platform',
      year: '2026',
      url: 'https://biz.scallar.in',
      img: '/src/assets/images/work_scallar_crm_1795246751638.jpg',
      desc: 'End-to-end WhatsApp marketing and CRM suite unifying QR & Meta Cloud API connectivity, bulk broadcast orchestration, lead capture, pipeline tracking, and 24/7 AI auto-replies.',
      challenge: 'Businesses were juggling fragmented broadcast scripts, spreadsheets, and manual WhatsApp replies to qualify inbound leads—resulting in slow follow-ups and frequent account restrictions.',
      solution: 'Architected a multi-tenant SaaS platform combining QR-based connection with official Meta WhatsApp Cloud API, rate-limited campaign scheduling, lead scraping, a full CRM deal pipeline, and an OpenAI-powered conversational reply engine.',
      outcome: 'Enables teams to dispatch thousands of compliant messages daily, capture and qualify prospects automatically, and cut first-response latency to seconds.',
      tech: ['React', 'Node.js', 'MongoDB', 'Meta WhatsApp Cloud API', 'OpenAI']
    }
  ];

  let activeFilter = 'All';
  let currentProject = null;

  // Calendar state
  const now = new Date();
  let calYear = now.getFullYear();
  let calMonth = now.getMonth();
  let selectedDateStr = '';
  let selectedSlot = '';

  const TIME_SLOTS = [
    '10:00 AM IST',
    '11:30 AM IST',
    '02:00 PM IST',
    '04:00 PM IST',
    '06:00 PM IST',
    '07:30 PM IST'
  ];

  // =========================================================================
  // Theme Switcher
  // =========================================================================
  function initTheme() {
    const btn = document.getElementById('theme-switch-btn');
    const label = document.getElementById('theme-switch-label');

    function syncLabel() {
      const isDark = document.documentElement.classList.contains('dark');
      if (label) {
        label.textContent = isDark ? 'Switch to Light Paper' : 'Switch to Obsidian Dark';
      }
    }

    syncLabel();

    if (btn) {
      btn.addEventListener('click', function () {
        const isDark = document.documentElement.classList.toggle('dark');
        try {
          localStorage.setItem('kg-theme', isDark ? 'dark' : 'light');
        } catch (e) {}
        syncLabel();
      });
    }
  }

  // =========================================================================
  // Scroll Progress Bar + Active Navigation Scroll-Spy + Reveal Animations
  // =========================================================================
  function initScrollEffects() {
    const progressEl = document.getElementById('scroll-progress');
    const navLinks = Array.from(document.querySelectorAll('.site-nav .nav-link'));
    const sections = navLinks
      .map(function (link) {
        const id = (link.getAttribute('href') || '').replace('#', '');
        return { link: link, el: document.getElementById(id) };
      })
      .filter(function (item) { return item.el; });

    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (progressEl && docHeight > 0) {
        const ratio = Math.min(1, Math.max(0, scrollTop / docHeight));
        progressEl.style.transform = 'scaleX(' + ratio.toFixed(4) + ')';
      }

      let activeSection = null;
      const triggerLine = scrollTop + 140;
      sections.forEach(function (item) {
        if (item.el.offsetTop <= triggerLine) {
          activeSection = item;
        }
      });

      navLinks.forEach(function (l) { l.classList.remove('is-active'); });
      if (activeSection) {
        activeSection.link.classList.add('is-active');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Smooth IntersectionObserver for below-the-fold .reveal elements
    observeReveals(document.querySelectorAll('.reveal'));
  }

  let revealObserver = null;
  function observeReveals(nodeList) {
    if (!nodeList || !nodeList.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      nodeList.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      );
    }

    nodeList.forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  // Smooth Hero Metrics Count-Up
  function initMetricCounters() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const counters = document.querySelectorAll('[data-count-target]');
    counters.forEach(function (el) {
      const target = parseFloat(el.getAttribute('data-count-target') || '0');
      const suffix = el.getAttribute('data-count-suffix') || '';
      const decimals = parseInt(el.getAttribute('data-count-decimals') || '0', 10);
      const duration = 900;
      const startTime = performance.now();

      function tick(nowTs) {
        const progress = Math.min(1, (nowTs - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = target * eased;
        el.textContent = (decimals > 0 ? current.toFixed(decimals) : Math.round(current)) + suffix;
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = (decimals > 0 ? target.toFixed(decimals) : target) + suffix;
        }
      }
      requestAnimationFrame(tick);
    });
  }

  // =========================================================================
  // Render All Filtered Projects as Stylish Architectural Cards
  // =========================================================================
  function getFilteredProjects() {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(function (p) {
      return p.discipline === activeFilter;
    });
  }

  function renderWork() {
    const gridEl = document.getElementById('projects-grid');
    const countEl = document.getElementById('projects-count-label');
    if (!gridEl) return;

    const filtered = getFilteredProjects();
    if (countEl) {
      countEl.textContent = 'Showing ' + filtered.length + ' ' + (filtered.length === 1 ? 'project card' : 'project cards') + (activeFilter === 'All' ? ' · Click any card for full technical dossier' : ' in ' + activeFilter);
    }

    gridEl.innerHTML = filtered.map(function (project, idx) {
      const isWide = activeFilter === 'All' && idx === 0;
      const delayClass = idx % 3 === 1 ? ' reveal-delay-1' : (idx % 3 === 2 ? ' reveal-delay-2' : '');
      const liveAnchor = project.url
        ? '<a class="project-live-link" href="' + escapeAttr(project.url) + '" target="_blank" rel="noreferrer" onclick="event.stopPropagation()">Live ↗</a>'
        : '';

      return (
        '<article class="project-card reveal' + delayClass + (isWide ? ' is-featured-wide' : '') + '" data-project-id="' + escapeAttr(project.id) + '" tabindex="0" role="button" aria-label="View case study for ' + escapeAttr(project.title) + '">' +
          '<div class="project-media">' +
            '<img src="' + escapeAttr(project.img) + '" alt="' + escapeAttr(project.title + ' — ' + project.subtitle) + '" loading="' + (idx < 3 ? 'eager' : 'lazy') + '" referrerPolicy="no-referrer" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';" />' +
            '<div class="media-fallback" style="display:none;">' +
              '<span class="font-mono" style="font-size:0.75rem;color:var(--accent);">' + escapeHtml(project.number) + '</span>' +
              '<span class="font-display" style="font-size:1.3rem;color:var(--ink);margin-top:4px;">' + escapeHtml(project.title) + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="project-body">' +
            '<div class="meta-line">' +
              '<span class="idx">' + escapeHtml(project.number) + '</span>' +
              '<span aria-hidden="true">·</span>' +
              '<span>' + escapeHtml(project.discipline) + '</span>' +
              '<span aria-hidden="true">·</span>' +
              '<span>' + escapeHtml(project.tag) + '</span>' +
            '</div>' +
            '<h3 class="project-title">' + escapeHtml(project.title) + '</h3>' +
            '<p class="project-desc">' + escapeHtml(project.desc) + '</p>' +
            '<div class="project-footer">' +
              '<span class="project-stack font-mono">' + escapeHtml(project.tech.slice(0, 3).join(' · ')) + '</span>' +
              '<div class="project-actions-inline">' +
                liveAnchor +
                '<span class="project-cta">Dossier <span class="arrow" aria-hidden="true">→</span></span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    const cards = gridEl.querySelectorAll('.project-card');
    cards.forEach(function (el) {
      el.addEventListener('click', function () {
        openDossier(el.getAttribute('data-project-id'));
      });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDossier(el.getAttribute('data-project-id'));
        }
      });
    });

    observeReveals(cards);
  }

  function initFilters() {
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        activeFilter = tab.getAttribute('data-filter') || 'All';
        tabs.forEach(function (t) {
          const active = t === tab;
          t.classList.toggle('is-active', active);
          t.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        renderWork();
      });
    });
  }

  // =========================================================================
  // Fullscreen Case Study Dossier Modal
  // =========================================================================
  function openDossier(projectId) {
    const project = PROJECTS.find(function (p) { return p.id === projectId; });
    if (!project) return;
    currentProject = project;

    const backdrop = document.getElementById('dossier-modal');
    if (!backdrop) return;

    document.getElementById('dossier-kicker').textContent = project.number + ' · ' + project.discipline + ' · ' + project.tag + ' · ' + project.year;
    document.getElementById('dossier-title').textContent = project.title;
    document.getElementById('dossier-subtitle').textContent = project.subtitle;
    document.getElementById('dossier-challenge').textContent = project.challenge;
    document.getElementById('dossier-solution').textContent = project.solution;
    document.getElementById('dossier-outcome').textContent = project.outcome;
    document.getElementById('dossier-stack').textContent = project.tech.join(' · ');

    const imgEl = document.getElementById('dossier-img');
    const fbEl = document.getElementById('dossier-img-fallback');
    if (imgEl && fbEl) {
      imgEl.style.display = 'block';
      fbEl.style.display = 'none';
      imgEl.src = project.img;
      imgEl.alt = project.title;
    }

    const liveBtn = document.getElementById('dossier-live-link');
    if (liveBtn) {
      if (project.url) {
        liveBtn.style.display = 'inline-flex';
        liveBtn.href = project.url;
      } else {
        liveBtn.style.display = 'none';
      }
    }

    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeDossier() {
    const backdrop = document.getElementById('dossier-modal');
    if (!backdrop) return;
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function initDossierModal() {
    const backdrop = document.getElementById('dossier-modal');
    const closeBtn = document.getElementById('dossier-close-btn');
    const inquireBtn = document.getElementById('dossier-inquire-btn');

    if (closeBtn) closeBtn.addEventListener('click', closeDossier);
    if (backdrop) {
      backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) closeDossier();
      });
    }
    if (inquireBtn) {
      inquireBtn.addEventListener('click', function () {
        const title = currentProject ? currentProject.title : 'a custom system';
        closeDossier();
        const msgEl = document.getElementById('contact-message');
        if (msgEl) {
          msgEl.value = 'Hi Kamlesh, I reviewed your case study for ' + title + ' and would like to discuss a similar build for our business.';
        }
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // =========================================================================
  // Helper: Safe Status Banner Renderer (zero raw HTML injection)
  // =========================================================================
  function setStatusMessage(el, variant, headline, bodyText, waHref) {
    if (!el) return;
    el.className = 'form-status is-visible ' + (variant === 'error' ? 'is-error' : 'is-success');
    el.textContent = '';

    const strong = document.createElement('strong');
    strong.textContent = headline + ' ';
    el.appendChild(strong);

    const span = document.createElement('span');
    span.textContent = bodyText + ' ';
    el.appendChild(span);

    if (waHref) {
      const link = document.createElement('a');
      link.href = waHref;
      link.target = '_blank';
      link.rel = 'noreferrer';
      link.style.textDecoration = 'underline';
      link.style.fontWeight = '600';
      link.textContent = 'Also notify on WhatsApp →';
      el.appendChild(link);
    }
  }

  // Browser backup dispatch to FormSubmit if server relay needs browser origin
  async function tryBrowserFormSubmit(fields) {
    try {
      const resp = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(RECIPIENT_EMAIL), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(fields)
      });
      const json = await resp.json().catch(function () { return {}; });
      return resp.ok && (json.success === 'true' || json.success === true);
    } catch (e) {
      return false;
    }
  }

  // =========================================================================
  // Consultation Booking Calendar Modal -> Real Email to kamleshg9569@gmail.com
  // =========================================================================
  function openBookingModal() {
    const backdrop = document.getElementById('booking-modal');
    if (!backdrop) return;
    renderCalendar();
    renderSlots();
    const confirmEl = document.getElementById('booking-confirmation');
    if (confirmEl) confirmEl.classList.remove('is-visible');
    backdrop.classList.add('is-open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    const backdrop = document.getElementById('booking-modal');
    if (!backdrop) return;
    backdrop.classList.remove('is-open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderCalendar() {
    const monthLabel = document.getElementById('cal-month-label');
    const daysGrid = document.getElementById('cal-days-grid');
    if (!monthLabel || !daysGrid) return;

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    monthLabel.textContent = months[calMonth] + ' ' + calYear;

    const firstDay = new Date(calYear, calMonth, 1).getDay();
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    let html = '';
    for (let i = 0; i < firstDay; i++) {
      html += '<span class="cal-day" aria-hidden="true"></span>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = new Date(calYear, calMonth, day);
      const isSunday = dateObj.getDay() === 0;
      const isPast = dateObj < todayStart;
      const iso = calYear + '-' + String(calMonth + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
      const disabled = isPast || isSunday;
      const selected = selectedDateStr === iso;

      if (disabled) {
        html += '<button type="button" class="cal-day is-disabled" disabled>' + day + '</button>';
      } else {
        html += '<button type="button" class="cal-day is-available' + (selected ? ' is-selected' : '') + '" data-date="' + iso + '">' + day + '</button>';
      }
    }

    daysGrid.innerHTML = html;

    daysGrid.querySelectorAll('[data-date]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectedDateStr = btn.getAttribute('data-date') || '';
        renderCalendar();
        updateBookingSummary();
      });
    });
  }

  function renderSlots() {
    const slotsGrid = document.getElementById('booking-slots-grid');
    if (!slotsGrid) return;

    slotsGrid.innerHTML = TIME_SLOTS.map(function (slot) {
      const active = selectedSlot === slot ? ' is-selected' : '';
      return '<button type="button" class="slot-btn' + active + '" data-slot="' + slot + '">' + slot + '</button>';
    }).join('');

    slotsGrid.querySelectorAll('[data-slot]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        selectedSlot = btn.getAttribute('data-slot') || '';
        renderSlots();
        updateBookingSummary();
      });
    });
  }

  function updateBookingSummary() {
    const summaryEl = document.getElementById('booking-selection-summary');
    if (!summaryEl) return;
    if (selectedDateStr && selectedSlot) {
      summaryEl.textContent = 'Selected: ' + selectedDateStr + ' at ' + selectedSlot;
    } else if (selectedDateStr) {
      summaryEl.textContent = 'Date: ' + selectedDateStr + ' — choose a time slot';
    } else {
      summaryEl.textContent = 'Select an available date (Mon–Sat) and IST time slot.';
    }
  }

  function initBookingModal() {
    document.querySelectorAll('[data-open-booking]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        closeMobileDrawer();
        openBookingModal();
      });
    });

    const backdrop = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('booking-close-btn');
    const prevBtn = document.getElementById('cal-prev-btn');
    const nextBtn = document.getElementById('cal-next-btn');
    const form = document.getElementById('booking-form');

    if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);
    if (backdrop) {
      backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) closeBookingModal();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        calMonth -= 1;
        if (calMonth < 0) {
          calMonth = 11;
          calYear -= 1;
        }
        renderCalendar();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        calMonth += 1;
        if (calMonth > 11) {
          calMonth = 0;
          calYear += 1;
        }
        renderCalendar();
      });
    }

    if (form) {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const name = (document.getElementById('booking-name').value || '').trim();
        const email = (document.getElementById('booking-email').value || '').trim();
        const phone = (document.getElementById('booking-phone').value || '').trim();
        const topic = (document.getElementById('booking-topic').value || '').trim() || 'Discovery Call';
        const confirmEl = document.getElementById('booking-confirmation');
        const submitBtn = document.getElementById('booking-submit-btn');

        if (!selectedDateStr || !selectedSlot) {
          setStatusMessage(confirmEl, 'error', 'Missing slot.', 'Please select both a date and an IST time slot first.');
          return;
        }
        if (!name || !email) {
          setStatusMessage(confirmEl, 'error', 'Missing details.', 'Please enter your name and email address.');
          return;
        }

        const waMsg = encodeURIComponent(
          'Hi Kamlesh, I scheduled a 30-min discovery call.\n' +
          'Date: ' + selectedDateStr + '\n' +
          'Time: ' + selectedSlot + '\n' +
          'Name: ' + name + ' (' + email + ')\n' +
          (phone ? 'Phone: ' + phone + '\n' : '') +
          'Topic: ' + topic
        );
        const waHref = 'https://wa.me/919315515700?text=' + waMsg;

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.textContent = 'Sending Booking to Email...';
        }

        try {
          const resp = await fetch('/api/booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: name,
              email: email,
              phone: phone || 'Not provided',
              date: selectedDateStr,
              timeSlot: selectedSlot,
              topic: topic
            })
          });

          const data = await resp.json().catch(function () { return {}; });
          if (!resp.ok) {
            setStatusMessage(confirmEl, 'error', 'Could not book slot.', data.error || 'Please verify your details and try again.');
            return;
          }

          let delivered = Boolean(data.delivered);
          if (!delivered) {
            delivered = await tryBrowserFormSubmit({
              _subject: 'Call Scheduled: ' + selectedDateStr + ' at ' + selectedSlot + ' — ' + name,
              _replyto: email,
              _template: 'table',
              _captcha: 'false',
              Type: 'Discovery Call Scheduled',
              Date: selectedDateStr,
              Time_Slot: selectedSlot,
              Name: name,
              Email: email,
              Phone: phone || 'Not provided',
              Topic: topic
            });
          }

          if (delivered) {
            setStatusMessage(
              confirmEl,
              'success',
              'Call scheduled & emailed to ' + RECIPIENT_EMAIL + '.',
              'Reserved ' + selectedDateStr + ' at ' + selectedSlot + ' IST. Kamlesh will confirm shortly.',
              waHref
            );
          } else {
            setStatusMessage(
              confirmEl,
              'success',
              'Slot reserved for ' + selectedDateStr + ' at ' + selectedSlot + '.',
              'Email delivery to ' + RECIPIENT_EMAIL + ' was queued (first-time FormSubmit activation email may need confirmation).',
              waHref
            );
          }
          form.reset();
        } catch (err) {
          setStatusMessage(confirmEl, 'error', 'Network error.', 'Unable to reach the server right now. Please try again or reach out directly.', waHref);
        } finally {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Confirm & Email Slot';
          }
        }
      });
    }
  }

  // =========================================================================
  // Direct Inquiry Form -> Real Email to kamleshg9569@gmail.com
  // =========================================================================
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('contact-form-status');
    const submitBtn = document.getElementById('contact-submit-btn');
    if (!form || !status) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const name = (document.getElementById('contact-name').value || '').trim();
      const email = (document.getElementById('contact-email').value || '').trim();
      const phone = (document.getElementById('contact-phone').value || '').trim();
      const scope = (document.getElementById('contact-scope').value || '').trim();
      const message = (document.getElementById('contact-message').value || '').trim();

      if (!name || !email || !message) {
        setStatusMessage(status, 'error', 'Incomplete brief.', 'Please complete your name, email address, and project overview.');
        return;
      }

      const waText = encodeURIComponent(
        'Hi Kamlesh, my name is ' + name + ' (' + email + '). Scope: ' + scope + '. ' + message
      );
      const waHref = 'https://wa.me/919315515700?text=' + waText;

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Brief to Email...';
      }

      try {
        const resp = await fetch('/api/inquiry', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone || 'Not provided',
            scope: scope,
            message: message
          })
        });

        const data = await resp.json().catch(function () { return {}; });
        if (!resp.ok) {
          setStatusMessage(status, 'error', 'Validation error.', data.error || 'Please check your input and try again.');
          return;
        }

        let delivered = Boolean(data.delivered);
        if (!delivered) {
          delivered = await tryBrowserFormSubmit({
            _subject: 'New Project Inquiry: ' + scope + ' — ' + name,
            _replyto: email,
            _template: 'table',
            _captcha: 'false',
            Type: 'Project Inquiry',
            Name: name,
            Email: email,
            Phone: phone || 'Not provided',
            Scope: scope,
            Message: message
          });
        }

        if (delivered) {
          setStatusMessage(
            status,
            'success',
            'Message sent directly to ' + RECIPIENT_EMAIL + '.',
            'Thank you, ' + name + '. Expect a reply within 4 business hours.',
            waHref
          );
        } else {
          setStatusMessage(
            status,
            'success',
            'Brief submitted for ' + RECIPIENT_EMAIL + '.',
            'Thank you, ' + name + '. Note: if this is the first message, verify the FormSubmit activation email in your inbox or configure SMTP credentials.',
            waHref
          );
        }
        form.reset();
      } catch (err) {
        setStatusMessage(status, 'error', 'Connection error.', 'Could not deliver the brief right now. Please try again.', waHref);
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Project Brief →';
        }
      }
    });
  }

  // =========================================================================
  // Mobile Navigation Drawer
  // =========================================================================
  function openMobileDrawer() {
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    const drawer = document.getElementById('mobile-drawer');
    if (backdrop) backdrop.classList.add('is-open');
    if (drawer) drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    const drawer = document.getElementById('mobile-drawer');
    if (backdrop) backdrop.classList.remove('is-open');
    if (drawer) drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function initMobileDrawer() {
    const openBtn = document.getElementById('mobile-menu-open');
    const closeBtn = document.getElementById('mobile-menu-close');
    const backdrop = document.getElementById('mobile-drawer-backdrop');

    if (openBtn) openBtn.addEventListener('click', openMobileDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeMobileDrawer);
    if (backdrop) backdrop.addEventListener('click', closeMobileDrawer);

    document.querySelectorAll('#mobile-drawer a').forEach(function (link) {
      link.addEventListener('click', closeMobileDrawer);
    });
  }

  // =========================================================================
  // Global Keyboard Escape Handler
  // =========================================================================
  function initGlobalKeys() {
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeDossier();
        closeBookingModal();
        closeMobileDrawer();
      }
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(str) {
    return escapeHtml(str);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    renderWork();
    initFilters();
    initDossierModal();
    initBookingModal();
    initContactForm();
    initMobileDrawer();
    initGlobalKeys();
    initScrollEffects();
    initMetricCounters();
  });
})();
