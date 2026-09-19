import { PresetSite } from '../types';

export const PRESET_SITES: PresetSite[] = [
  {
    id: 'recipe-blog',
    title: 'Grandma’s Authentic Tuscan Lasagna',
    category: 'recipe',
    tagline: 'Infamous food blog with 3,000-word memoir, 8 banner ads, & popups',
    description: 'Real-world recipe blogs bury the actual recipe under life stories, multiple video autoplays, newsletter takeovers, and heavy tracking scripts.',
    originalPage: {
      title: 'Grandma’s Secret Authentic Tuscan Lasagna Recipe (The Complete 2024 Guide)',
      rawHtml: `<div class="cluttered-page">
        <!-- Cookie Wall -->
        <div class="cookie-banner">🍪 We value your privacy! We and our 428 partners use cookies to track your behavior across 15 domains. <button class="btn-agree">Accept All (No Options)</button></div>
        <!-- Sticky Header Ad -->
        <div class="ad-leaderboard">ADVERTISEMENT: Get 50% Off Kitchen Knives Today! [AdSense]</div>
        
        <header class="header">
          <h1>Grandma’s Secret Authentic Tuscan Lasagna Recipe</h1>
          <p class="byline">By Chef Bella • Published 4 years ago • 45 min read</p>
        </header>

        <!-- Newsletter takeover -->
        <div class="newsletter-modal-mock">
          <h3>WAIT! Don't leave without our 100-page eBook!</h3>
          <input placeholder="Enter your best email" />
          <button>Gimme My Free PDF!</button>
          <p class="sub">No spam, just 4 emails daily.</p>
        </div>

        <article class="story-content">
          <div class="ad-incontent">AD: Buy car insurance now!</div>
          <h2>A Childhood Memory In The Hills Of Tuscany</h2>
          <p>It was the summer of 1998. The cicadas were singing in the olive groves of Lucca when my nonna Maria first wiped flour from her checkered apron. To understand this lasagna, one must first comprehend the socio-agricultural climate of central Italy in the post-war era...</p>
          <div class="ad-incontent">AD: Best mattresses for side sleepers!</div>
          <p>Before we discuss ricotta, let me share 14 paragraphs about the flight delay at Leonardo da Vinci airport and how our rental car had a broken clutch...</p>
          <div class="autoplay-video-box">▶ [Autoplaying Video 1 of 3: How to boil water]</div>
          <p>Furthermore, my cousin Alessandro, who now practices dentistry in Bologna, once told me that the secret to pasta dough is the mood of the hen that laid the egg...</p>
          <div class="jump-btn-wrapper">
            <button class="jump-btn">⚡ Jump to Recipe (After scrolling past 19 ads)</button>
          </div>
          <!-- Buried Recipe Section -->
          <div class="actual-recipe" style="opacity: 0.8; margin-top: 30px;">
            <h3>The Actual Recipe (Finally!)</h3>
            <p><strong>Ingredients:</strong> 12 lasagna sheets, 500g ground beef, 1 jar marinara, 400g ricotta, 300g mozzarella, 50g parmesan, 1 egg, salt & oregano.</p>
            <p><strong>Steps:</strong> 1. Brown beef and stir in marinara. 2. Mix ricotta with egg & oregano. 3. Layer sauce, pasta, cheese mixture in 9x13 pan. 4. Bake at 375°F (190°C) for 45 minutes.</p>
          </div>
        </article>
        
        <div class="sticky-footer-ad">Ad: Low-rate refinancing loans available in your area</div>
      </div>`,
      simulatedBloat: {
        hasCookieBanner: true,
        hasNewsletterModal: true,
        hasAutoplayVideo: true,
        hasCountdownTimer: false,
        hasStickyFooterAd: true,
        hasChatbot: false,
      },
    },
    defaultResult: {
      id: 'recipe-blog-clean',
      title: 'Authentic Tuscan Lasagna',
      coreUtility: 'Quick, distraction-free recipe with interactive ingredient checklist, cooking steps, and prep timer.',
      summary: 'Removed 3,200 words of extraneous personal memoir, 5 ad slots, 2 auto-playing video players, and a full-screen newsletter takeover. Structured into a functional, printable recipe card.',
      removedElements: [
        {
          category: 'clutter',
          name: '3,200-Word Childhood Memoir',
          reason: 'Irrelevant to cooking; forces users to endlessly scroll to find cooking instructions.',
          impact: 'Eliminated 85% of cognitive fatigue and scroll depth.'
        },
        {
          category: 'ads',
          name: '5 Programmatic Ad Banners & Video Autoplay',
          reason: 'Consumes network bandwidth and causes layout shifts (CLS score was 0.42).',
          impact: 'Saved 3.8 MB in video/image downloads.'
        },
        {
          category: 'modals',
          name: 'Exit-Intent Newsletter Pop-up',
          reason: 'Blocks recipe access and interrupts the user experience.',
          impact: 'Zero modal interruptions or traps.'
        },
        {
          category: 'trackers',
          name: '18 Third-Party Marketing Beacons',
          reason: 'Monitors user navigation across tabs with third-party tracking cookies.',
          impact: 'Enhanced privacy & instant page rendering.'
        }
      ],
      simplifiedHtml: `<div class="clean-recipe max-w-2xl mx-auto p-6 bg-white text-stone-900 font-sans">
  <div class="border-b border-stone-200 pb-5 mb-6">
    <span class="text-xs uppercase tracking-wider font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">Traditional Italian</span>
    <h1 class="text-2xl sm:text-3xl font-bold mt-2 text-stone-900">Authentic Tuscan Lasagna</h1>
    <p class="text-stone-600 mt-1 text-sm">Rich homemade meat sauce layered with seasoned ricotta and bubbly mozzarella.</p>
    
    <div class="grid grid-cols-3 gap-3 mt-4 text-center bg-stone-50 p-3 rounded-lg border border-stone-200/70">
      <div>
        <div class="text-xs text-stone-500 font-medium">Prep Time</div>
        <div class="text-base font-bold text-stone-800">20 min</div>
      </div>
      <div>
        <div class="text-xs text-stone-500 font-medium">Cook Time</div>
        <div class="text-base font-bold text-stone-800">45 min</div>
      </div>
      <div>
        <div class="text-xs text-stone-500 font-medium">Yield</div>
        <div class="text-base font-bold text-stone-800">6 Servings</div>
      </div>
    </div>
  </div>

  <div class="mb-6">
    <h2 class="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
      <span>Ingredients</span>
      <span class="text-xs font-normal text-stone-500">(Check off as you prep)</span>
    </h2>
    <ul class="space-y-2 text-sm text-stone-700">
      <li class="flex items-center gap-2.5 p-1.5 hover:bg-stone-50 rounded">
        <input type="checkbox" id="ing-1" class="w-4 h-4 rounded text-emerald-600 border-stone-300 focus:ring-emerald-500" />
        <label for="ing-1" class="cursor-pointer">12 lasagna pasta sheets (oven-ready or par-boiled)</label>
      </li>
      <li class="flex items-center gap-2.5 p-1.5 hover:bg-stone-50 rounded">
        <input type="checkbox" id="ing-2" class="w-4 h-4 rounded text-emerald-600 border-stone-300 focus:ring-emerald-500" />
        <label for="ing-2" class="cursor-pointer">500g (1 lb) lean ground beef or beef-pork mix</label>
      </li>
      <li class="flex items-center gap-2.5 p-1.5 hover:bg-stone-50 rounded">
        <input type="checkbox" id="ing-3" class="w-4 h-4 rounded text-emerald-600 border-stone-300 focus:ring-emerald-500" />
        <label for="ing-3" class="cursor-pointer">700ml (1 jar) quality marinara or crushed San Marzano tomatoes</label>
      </li>
      <li class="flex items-center gap-2.5 p-1.5 hover:bg-stone-50 rounded">
        <input type="checkbox" id="ing-4" class="w-4 h-4 rounded text-emerald-600 border-stone-300 focus:ring-emerald-500" />
        <label for="ing-4" class="cursor-pointer">400g (15 oz) whole milk ricotta cheese + 1 beaten egg</label>
      </li>
      <li class="flex items-center gap-2.5 p-1.5 hover:bg-stone-50 rounded">
        <input type="checkbox" id="ing-5" class="w-4 h-4 rounded text-emerald-600 border-stone-300 focus:ring-emerald-500" />
        <label for="ing-5" class="cursor-pointer">300g shredded low-moisture mozzarella + 50g grated Parmesan</label>
      </li>
      <li class="flex items-center gap-2.5 p-1.5 hover:bg-stone-50 rounded">
        <input type="checkbox" id="ing-6" class="w-4 h-4 rounded text-emerald-600 border-stone-300 focus:ring-emerald-500" />
        <label for="ing-6" class="cursor-pointer">1 tsp dried oregano, 1 tsp salt, 1/2 tsp black pepper</label>
      </li>
    </ul>
  </div>

  <div>
    <h2 class="text-lg font-bold text-stone-900 mb-3">Step-by-Step Instructions</h2>
    <ol class="space-y-3.5 text-sm text-stone-700">
      <li class="flex gap-3">
        <span class="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 text-stone-800 font-bold flex items-center justify-center text-xs">1</span>
        <div><strong>Brown meat:</strong> In a skillet over medium-high heat, cook ground beef until browned. Drain excess fat, then stir in marinara sauce. Simmer 5 minutes.</div>
      </li>
      <li class="flex gap-3">
        <span class="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 text-stone-800 font-bold flex items-center justify-center text-xs">2</span>
        <div><strong>Season ricotta:</strong> In a small bowl, combine ricotta, beaten egg, salt, oregano, and half the parmesan.</div>
      </li>
      <li class="flex gap-3">
        <span class="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 text-stone-800 font-bold flex items-center justify-center text-xs">3</span>
        <div><strong>Layer casserole:</strong> Spread 1/2 cup meat sauce across a 9x13 inch baking dish. Lay 3-4 pasta sheets, spread 1/3 ricotta, 1/3 meat sauce, and 1/4 mozzarella. Repeat for 3 layers. Top with remaining mozzarella and parmesan.</div>
      </li>
      <li class="flex gap-3">
        <span class="flex-shrink-0 w-6 h-6 rounded-full bg-stone-200 text-stone-800 font-bold flex items-center justify-center text-xs">4</span>
        <div><strong>Bake & rest:</strong> Cover with foil and bake at 375°F (190°C) for 25 minutes. Remove foil and bake 20 more minutes until bubbly and golden. Rest 10 minutes before slicing.</div>
      </li>
    </ol>
  </div>
</div>`,
      simplifiedTailwindCode: `<!-- Clean Recipe Card Component -->
<article class="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-xs border border-stone-200">
  <header class="border-b border-stone-200 pb-4 mb-4">
    <h1 class="text-2xl font-bold text-stone-900">Authentic Tuscan Lasagna</h1>
    <div class="flex gap-4 mt-2 text-sm text-stone-600">
      <span>Prep: 20m</span> • <span>Cook: 45m</span> • <span>Servings: 6</span>
    </div>
  </header>
  <!-- Ingredients & Instructions -->
</article>`,
      metrics: {
        originalBytes: 4200000,
        simplifiedBytes: 28400,
        originalRequests: 89,
        simplifiedRequests: 2,
        originalScripts: 24,
        simplifiedScripts: 0,
        bloatScoreBefore: 94,
        bloatScoreAfter: 5,
        estimatedTtiSecondsBefore: 5.8,
        estimatedTtiSecondsAfter: 0.12
      },
      reliabilityFeatures: [
        'Zero external runtime script dependencies (immune to ad-network outages)',
        '100% functional offline or on 2G flaky cellular connections',
        'Semantic HTML5 with high contrast WCAG AAA ratio (14:1)',
        'Direct print styling support for paper or PDF export'
      ],
      accessibilityHighlights: [
        'Native checkboxes for tactile meal preparation progress',
        'Sequential heading structure with clear step numbering',
        'No surprise audio or content shifts'
      ]
    }
  },
  {
    id: 'saas-landing',
    title: 'CloudOps Platform Landing Page',
    category: 'saas',
    tagline: 'Overloaded software landing page with 3 chat popups & fake urgency',
    description: 'Modern SaaS sites frequently trap users in complex parallax scroll loops, high-CPU WebGL animations, fake countdown timers, and persistent chat popups.',
    originalPage: {
      title: 'CloudOps Extreme - NextGen Autonomous Multi-Cloud AI Data Fabric',
      rawHtml: `<div class="cluttered-page">
        <!-- Floating Urgent Banner -->
        <div class="urgent-banner">⚡ FLASH PROMO: 75% OFF! Only 02:44 left before price increases forever!</div>
        <!-- Sticky Navigation with 48 dropdown items -->
        <nav class="mega-nav">Products (14) | Solutions (18) | Enterprise | AI Studio | Pricing | Login</nav>
        
        <!-- Hero with laggy WebGL background simulation -->
        <div class="hero-clutter">
          <div class="annoying-badge">✨ Voted #1 Autonomous Cloud Synthesizer by Gartner-Adjacent Survey</div>
          <h1>Hyper-Scale Paradigm For Next-Gen Vectorized Cloud-Native Synergies</h1>
          <p>Orchestrate multi-tenant reactive hyper-graphs across serverless edge fabrics with zero-latency zero-trust continuous quantum observability.</p>
          <div class="cta-clutter">
            <button class="btn-heavy">Request 45-Minute Mandatory Sales Demo</button>
            <button class="btn-alt">Download 84-page Whitepaper</button>
          </div>
        </div>

        <!-- Fake Social Proof Carousel -->
        <div class="logo-marquee">[40 moving client logos spinning at 60fps]</div>

        <!-- Multiple Chatbots -->
        <div class="chatbot-1">💬 "Hi there! I'm Sarah from Sales. Do you have 15 minutes today?"</div>
        <div class="chatbot-2">🤖 "Bot: Want to see a custom quote? Enter your phone number!"</div>

        <!-- 9 Tier Pricing with deceptive monthly/annual billed quarterly traps -->
        <div class="pricing-matrix">Complex 9-tier matrix with 120 features listed with question marks</div>
      </div>`,
      simulatedBloat: {
        hasCookieBanner: true,
        hasNewsletterModal: false,
        hasAutoplayVideo: true,
        hasCountdownTimer: true,
        hasStickyFooterAd: false,
        hasChatbot: true,
      },
    },
    defaultResult: {
      id: 'saas-landing-clean',
      title: 'CloudOps Infrastructure Manager',
      coreUtility: 'Clear value proposition, 3 primary feature highlights, transparent single-tier pricing, and direct signup.',
      summary: 'Replaced buzzword soup and fake urgency counters with honest, clear copy. Removed 2 overlapping chat widgets, 18 tracking beacons, and heavy WebGL animations.',
      removedElements: [
        {
          category: 'dark-patterns',
          name: 'Fake "02:44 Remaining" Price Increase Timer',
          reason: 'Manufactured urgency designed to pressure users into rushed decisions.',
          impact: 'Eliminated deceptive psychological tricks.'
        },
        {
          category: 'heavy-scripts',
          name: 'Laggy WebGL / 3D Canvas Mesh Simulation',
          reason: 'Consumed 40% CPU and drained battery on mobile devices.',
          impact: 'Reduced browser memory from 180MB to 6MB.'
        },
        {
          category: 'clutter',
          name: 'Dual Aggressive Sales Chatbots',
          reason: 'Covered mobile viewports and repeatedly chimed with notification sounds.',
          impact: 'Clean, unblocked viewing area.'
        },
        {
          category: 'clutter',
          name: '9-Tier Confusing Pricing Matrix',
          reason: 'Deliberately obscured actual costs with hidden fees.',
          impact: 'Replaced with 2 clear plans with no hidden charges.'
        }
      ],
      simplifiedHtml: `<div class="clean-saas max-w-3xl mx-auto p-6 bg-white text-stone-900 font-sans">
  <div class="text-center max-w-xl mx-auto pt-4 pb-8">
    <span class="inline-block text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-3">Cloud Infrastructure Monitoring</span>
    <h1 class="text-3xl font-extrabold text-stone-900 tracking-tight sm:text-4xl">One dashboard for all your cloud servers.</h1>
    <p class="mt-3 text-base text-stone-600 leading-relaxed">
      Monitor uptime, CPU usage, and database errors across AWS, GCP, and DigitalOcean without installing bloated agents.
    </p>
    <div class="mt-6 flex flex-col sm:flex-row justify-center gap-3">
      <input type="email" placeholder="Enter work email" class="px-4 py-2.5 border border-stone-300 rounded-lg text-sm focus:outline-blue-600 w-full sm:w-64" />
      <button class="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-xs transition-colors">Start 14-Day Free Trial</button>
    </div>
    <p class="text-xs text-stone-400 mt-2">No credit card required • 2-minute setup</p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 border-y border-stone-200 py-8">
    <div class="p-4 rounded-lg bg-stone-50 border border-stone-200/60">
      <div class="w-8 h-8 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">01</div>
      <h3 class="font-bold text-stone-900 text-sm">Real-Time Uptime Alerts</h3>
      <p class="text-xs text-stone-600 mt-1.5 leading-relaxed">Instant notifications via Slack, email, or webhook when an endpoint responds with 5xx status.</p>
    </div>
    <div class="p-4 rounded-lg bg-stone-50 border border-stone-200/60">
      <div class="w-8 h-8 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">02</div>
      <h3 class="font-bold text-stone-900 text-sm">Lightweight Health Checks</h3>
      <p class="text-xs text-stone-600 mt-1.5 leading-relaxed">Runs pings from 12 global regions every 30 seconds with zero overhead on your production server.</p>
    </div>
    <div class="p-4 rounded-lg bg-stone-50 border border-stone-200/60">
      <div class="w-8 h-8 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm mb-3">03</div>
      <h3 class="font-bold text-stone-900 text-sm">Public Status Pages</h3>
      <p class="text-xs text-stone-600 mt-1.5 leading-relaxed">Keep your customers informed during incidents with automated, customizable status pages.</p>
    </div>
  </div>

  <div class="bg-stone-50 p-6 rounded-xl border border-stone-200 max-w-md mx-auto text-center">
    <h3 class="text-base font-bold text-stone-900">Simple, Transparent Pricing</h3>
    <div class="text-3xl font-extrabold text-stone-900 mt-2">$29 <span class="text-xs font-normal text-stone-500">/ month</span></div>
    <p class="text-xs text-stone-600 mt-1">Unlimited servers, 10 team members, 30-day log retention.</p>
    <button class="w-full mt-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm rounded-lg transition-colors">Choose Plan</button>
  </div>
</div>`,
      simplifiedTailwindCode: `<!-- Clean SaaS Landing Component -->
<section class="max-w-3xl mx-auto p-6 bg-white">
  <div class="text-center py-6">
    <h1 class="text-3xl font-bold text-stone-900">One dashboard for all your cloud servers.</h1>
    <p class="mt-2 text-stone-600">Monitor uptime and errors with zero heavy agent installs.</p>
  </div>
  <!-- Feature Grid & Clear Pricing -->
</section>`,
      metrics: {
        originalBytes: 6800000,
        simplifiedBytes: 31200,
        originalRequests: 142,
        simplifiedRequests: 1,
        originalScripts: 38,
        simplifiedScripts: 0,
        bloatScoreBefore: 98,
        bloatScoreAfter: 4,
        estimatedTtiSecondsBefore: 6.4,
        estimatedTtiSecondsAfter: 0.1
      },
      reliabilityFeatures: [
        'Pure HTML/CSS layout with zero client-side JavaScript execution needed',
        'Works flawlessly in mobile browsers and low-power hardware without battery drain',
        'No external font downloads or third-party CSS files that can fail to resolve'
      ],
      accessibilityHighlights: [
        'Form inputs with explicit labels and high-contrast focus rings',
        'Readable, logical reading order and standard headings'
      ]
    }
  },
  {
    id: 'news-article',
    title: 'Daily Media News Article',
    category: 'news',
    tagline: 'Ad-choked article with 14 banners, autoplay video, & clickbait grid',
    description: 'Modern digital journalism pages frequently crash mobile devices due to dozens of programmatic ad auctions, sticky video players, and clickbait recommendations.',
    originalPage: {
      title: 'Global Renewable Energy Reaches Record High in 2024 Report',
      rawHtml: `<div class="cluttered-page">
        <!-- Interstitial Paywall / Survey -->
        <div class="survey-overlay">Answer 1 question to continue reading: "Do you own a boat?"</div>
        <!-- Mega Banner Ad -->
        <div class="ad-leaderboard">AD: Top 10 Things Dentists Don't Want You To Know</div>

        <header>
          <h1>Global Renewable Energy Reaches Record High in 2024 Report</h1>
          <p>By Staff Writer • 12 Shares • Sponsored by SolarX</p>
        </header>

        <!-- Floating Sticky Video Player that follows scroll -->
        <div class="floating-video">[Sticky PiP Video playing sound: "Local mom discovers bizarre trick!"]</div>

        <p class="article-para">A groundbreaking study released Wednesday reveals that wind and solar installations grew by 35% worldwide over the past calendar year.</p>
        
        <div class="ad-inline">AD: You won't believe what this 90s child actor looks like today!</div>

        <p class="article-para">Developing economies accounted for over half of all newly installed capacity, driven by falling production costs of photovoltaic cells.</p>

        <!-- Taboola / Outbrain Clickbait Matrix -->
        <div class="clickbait-grid">
          <h4>Around The Web (Sponsored)</h4>
          <div class="grid">
            <div>If you have a ceiling fan, read this immediately</div>
            <div>Put vinegar in your sink at night and watch what happens</div>
            <div>Billionaire warns: move your 401k before Thursday</div>
          </div>
        </div>
      </div>`,
      simulatedBloat: {
        hasCookieBanner: true,
        hasNewsletterModal: true,
        hasAutoplayVideo: true,
        hasCountdownTimer: false,
        hasStickyFooterAd: true,
        hasChatbot: false,
      },
    },
    defaultResult: {
      id: 'news-article-clean',
      title: 'Global Renewable Energy Report',
      coreUtility: 'Distraction-free, readable news report with verified source data, key takeaways, and zero clickbait.',
      summary: 'Stripped 14 programmatic ad slots, floating video player, survey walls, and sensationalist clickbait grids. Rendered in clean editorial typography with 100% reading focus.',
      removedElements: [
        {
          category: 'ads',
          name: '14 Programmatic Ad Network Slots',
          reason: 'Constantly reloaded ads every 30 seconds, causing continuous layout stutter.',
          impact: 'Zero page stutter; reading position stays fixed.'
        },
        {
          category: 'heavy-scripts',
          name: 'Floating Sticky Autoplay Video Player',
          reason: 'Blocked 25% of mobile screen real estate and consumed bandwidth on video stream.',
          impact: 'Saved ~15MB of unwanted video streaming.'
        },
        {
          category: 'clutter',
          name: '12 Clickbait "Around The Web" Sponsored Stories',
          reason: 'Low-quality external links designed to deceive users into malware/ad traps.',
          impact: 'Zero spam or deceptive external links.'
        },
        {
          category: 'modals',
          name: 'Pre-Article Survey Gatekeeper',
          reason: 'Blocked direct access to journalistic content.',
          impact: 'Instant content accessibility upon arrival.'
        }
      ],
      simplifiedHtml: `<article class="clean-news max-w-2xl mx-auto p-6 bg-white text-stone-900 font-serif">
  <header class="mb-6 not-serif font-sans border-b border-stone-200 pb-4">
    <div class="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-2">Climate & Energy</div>
    <h1 class="text-2xl sm:text-3xl font-bold font-sans text-stone-900 leading-tight">Global Renewable Energy Reaches Record High in 2024 Report</h1>
    <div class="flex items-center gap-3 mt-3 text-xs text-stone-500">
      <span>By Elena Rostova</span>
      <span>•</span>
      <time datetime="2024-09-18">September 18, 2024</time>
      <span>•</span>
      <span>4 min read</span>
    </div>
  </header>

  <!-- Executive Summary Box -->
  <div class="not-serif font-sans bg-stone-50 border-l-4 border-emerald-600 p-4 rounded-r-md mb-6 text-sm text-stone-700">
    <div class="font-bold text-stone-900 mb-1">Key Takeaways</div>
    <ul class="list-disc list-inside space-y-1 text-xs sm:text-sm">
      <li>Global wind and solar additions expanded by 35% year-over-year.</li>
      <li>Developing nations generated over 52% of new clean energy infrastructure.</li>
      <li>Production costs of standard photovoltaic panels dropped by an additional 14%.</li>
    </ul>
  </div>

  <div class="space-y-4 text-base leading-relaxed text-stone-800">
    <p>
      Global additions of renewable power capacity surged by 35% over the past twelve months, marking the fastest annual expansion in modern history, according to the annual International Energy Progress Report published today.
    </p>
    <p>
      The surge was primarily propelled by rapid deployment in utility-scale solar arrays and offshore wind farms. Crucially, developing economies accounted for over half of all newly installed capacity, driven by continued declines in module production costs and standardized microgrid engineering.
    </p>
    <blockquote class="border-l-2 border-stone-300 pl-4 italic text-stone-700 my-4 font-normal">
      "We are witnessing an unprecedented economic decoupling where clean energy is no longer adopted purely through regulatory mandates, but because it is the cheapest available kilowatt-hour on the market."
    </blockquote>
    <p>
      Grid modernization and battery storage deployments also grew in parallel, with grid-scale storage capacity doubling in North America and Western Europe to support peak demand smoothing.
    </p>
  </div>
</article>`,
      simplifiedTailwindCode: `<!-- Clean Editorial Reader -->
<article class="max-w-2xl mx-auto p-6 bg-white font-serif">
  <header class="font-sans border-b pb-4 mb-6">
    <h1 class="text-2xl font-bold font-sans">Global Renewable Energy Reaches Record High</h1>
  </header>
  <!-- Summary Box & Clean Paragraphs -->
</article>`,
      metrics: {
        originalBytes: 5400000,
        simplifiedBytes: 19800,
        originalRequests: 118,
        simplifiedRequests: 1,
        originalScripts: 31,
        simplifiedScripts: 0,
        bloatScoreBefore: 96,
        bloatScoreAfter: 3,
        estimatedTtiSecondsBefore: 5.2,
        estimatedTtiSecondsAfter: 0.08
      },
      reliabilityFeatures: [
        'Complete editorial integrity with zero ad-network layout shifts (CLS: 0.00)',
        'Zero tracking beacons, cookies, or fingerprinting scripts',
        'Minimal battery and data usage for readers on mobile networks'
      ],
      accessibilityHighlights: [
        'Optimal line length (68 characters) and generous 1.7 line-height for effortless readability',
        'High typographic contrast (12:1 ratio) on natural warm-white background'
      ]
    }
  },
  {
    id: 'ecommerce-product',
    title: 'E-Commerce Backpack Product Page',
    category: 'e-commerce',
    tagline: 'Bloated shop page with spin wheels, fake viewers, & 6 upsell modals',
    description: 'Shopping pages are frequently corrupted by fake urgency badges, spin-the-wheel discounts, newsletter modals, and slow reviews widgets.',
    originalPage: {
      title: 'Voyager 35L Waterproof Travel Backpack - UrbanTrend Gear',
      rawHtml: `<div class="cluttered-page">
        <!-- Spin the wheel promo modal -->
        <div class="wheel-modal">🎡 SPIN TO WIN! Try your luck for 5% to 50% off! Enter email first: [____]</div>
        <!-- Fake social urgency badge -->
        <div class="fake-urgency">🔥 27 people are looking at this item right now! Only 2 left in stock! (Fake alert)</div>
        
        <header>
          <h1>Voyager 35L Waterproof Travel Backpack</h1>
          <div class="fake-rating">★★★★★ (4,992 Verified Reviews) [Clicking does nothing]</div>
          <div class="price">$189.00 <span class="old-price">$450.00</span> (SAVE 58% TODAY ONLY)</div>
        </header>

        <!-- Cluttered upsell checkboxes -->
        <div class="upsell-container">
          <label><input type="checkbox" checked /> Add 2-Year Extended Protection Plan (+$39.99)</label>
          <label><input type="checkbox" checked /> Add Water Bottle Carabiner (+$14.99)</label>
          <label><input type="checkbox" checked /> Add Express Rush Insured Shipping (+$19.99)</label>
        </div>

        <button class="btn-buy-huge">ADD TO CART (HURRY, CART EXPIRES IN 09:59)</button>
        <!-- 4 klarna / afterpay banners -->
        <div class="bnpl-options">Or 4 interest-free payments of $47.25 with Klarna, Afterpay, Sezzle, or Affirm</div>
      </div>`,
      simulatedBloat: {
        hasCookieBanner: true,
        hasNewsletterModal: true,
        hasAutoplayVideo: false,
        hasCountdownTimer: true,
        hasStickyFooterAd: true,
        hasChatbot: true,
      },
    },
    defaultResult: {
      id: 'ecommerce-clean',
      title: 'Voyager 35L Travel Backpack',
      coreUtility: 'Accurate product specifications, honest pricing, clear inventory status, and simple cart checkout.',
      summary: 'Eliminated spin-the-wheel discount traps, pre-checked stealth upsells, fake inventory scarcity warnings, and fake checkout countdowns.',
      removedElements: [
        {
          category: 'dark-patterns',
          name: 'Pre-Checked Warranty & Rush Shipping Upsells',
          reason: 'Quietly inflated product price by $74.97 at checkout without explicit user selection.',
          impact: 'Transparent, honest pricing with zero surprise charges.'
        },
        {
          category: 'dark-patterns',
          name: 'Simulated "27 People Looking Right Now" Badge',
          reason: 'Hardcoded randomized JavaScript counter that does not reflect actual inventory.',
          impact: 'Honest inventory reporting.'
        },
        {
          category: 'modals',
          name: 'Spin-To-Win Gamified Pop-up',
          reason: 'Delayed user from actually viewing product specs; captured email for sales drips.',
          impact: 'Immediate access to product images and specifications.'
        },
        {
          category: 'heavy-scripts',
          name: '5 Competing Buy-Now-Pay-Later Third-Party Widgets',
          reason: 'Loaded over 2.4MB of tracking and payment verification libraries before page load.',
          impact: 'Saved 2.4MB payload and 40 network requests.'
        }
      ],
      simplifiedHtml: `<div class="clean-product max-w-3xl mx-auto p-6 bg-white text-stone-900 font-sans">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Visual Specs -->
    <div class="space-y-4">
      <div class="bg-stone-100 rounded-xl p-8 flex items-center justify-center border border-stone-200">
        <div class="text-center text-stone-600">
          <div class="w-20 h-20 mx-auto rounded-lg bg-stone-200 flex items-center justify-center text-stone-500 font-bold text-2xl mb-2">35L</div>
          <span class="text-xs font-medium text-stone-500">Weatherproof Ballistic Nylon</span>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 text-center text-xs text-stone-600">
        <div class="p-2 bg-stone-50 rounded border border-stone-200/60"><strong>Weight:</strong> 1.1 kg</div>
        <div class="p-2 bg-stone-50 rounded border border-stone-200/60"><strong>Laptop:</strong> Up to 16"</div>
        <div class="p-2 bg-stone-50 rounded border border-stone-200/60"><strong>Carry-On:</strong> Approved</div>
      </div>
    </div>

    <!-- Purchase Details -->
    <div>
      <span class="text-xs font-semibold text-blue-700 uppercase tracking-wider">Travel Series</span>
      <h1 class="text-2xl font-bold text-stone-900 mt-1">Voyager 35L Travel Backpack</h1>
      <div class="text-2xl font-bold text-stone-900 mt-2">$189.00 <span class="text-xs font-normal text-stone-500">USD</span></div>
      <p class="text-xs text-emerald-700 font-medium mt-1 flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
        In stock — ships within 24 hours from warehouse
      </p>

      <div class="mt-4 border-t border-stone-200 pt-4">
        <label class="block text-xs font-medium text-stone-700 mb-1.5">Color</label>
        <div class="flex gap-2">
          <button class="px-3 py-1.5 text-xs font-medium rounded border border-stone-900 bg-stone-900 text-white">Matte Black</button>
          <button class="px-3 py-1.5 text-xs font-medium rounded border border-stone-300 text-stone-700 hover:bg-stone-50">Storm Gray</button>
          <button class="px-3 py-1.5 text-xs font-medium rounded border border-stone-300 text-stone-700 hover:bg-stone-50">Forest Olive</button>
        </div>
      </div>

      <div class="mt-6 space-y-2">
        <button class="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-sm rounded-lg transition-colors shadow-xs">
          Add to Cart — $189.00
        </button>
        <p class="text-center text-xs text-stone-500">Free 30-day returns • Lifetime zipper warranty</p>
      </div>
    </div>
  </div>
</div>`,
      simplifiedTailwindCode: `<!-- Clean E-Commerce Component -->
<div class="max-w-3xl mx-auto p-6 bg-white border border-stone-200 rounded-xl">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Product Specs & Honest Buy Button -->
  </div>
</div>`,
      metrics: {
        originalBytes: 5900000,
        simplifiedBytes: 24500,
        originalRequests: 130,
        simplifiedRequests: 1,
        originalScripts: 29,
        simplifiedScripts: 0,
        bloatScoreBefore: 95,
        bloatScoreAfter: 5,
        estimatedTtiSecondsBefore: 5.6,
        estimatedTtiSecondsAfter: 0.09
      },
      reliabilityFeatures: [
        'Instantaneous checkout without third-party iframe crashes',
        'Zero tracking beacons or user keystroke logging',
        'Fully responsive and reliable on mobile devices'
      ],
      accessibilityHighlights: [
        'Transparent color selector with clear active focus outlines',
        'Unambiguous pricing and stock indicators'
      ]
    }
  },
  {
    id: 'government-service',
    title: 'City Resident Parking Permit Form',
    category: 'service',
    tagline: 'Bureaucratic labyrinth with 28 redundant inputs & confusing legalese',
    description: 'Civic and public utility web portals are notorious for nested menus, outdated design, confusing 30-field forms, and fragile validation.',
    originalPage: {
      title: 'Municipal Resident Vehicle Parking Application (Form 14B-Rev3)',
      rawHtml: `<div class="cluttered-page">
        <!-- 30 confusing links -->
        <div class="gov-breadcrumbs">Home > Departments > Public Works > Transportation > Division 4 > Parking > Sub-Permits > Form 14B-Rev3</div>
        <h2>Resident Vehicle Permit Application</h2>
        <p class="warning">WARNING: Falsification of Form 14B section 12.4 is punishable under Municipal Ordinance 402 with penalties up to $5,000.</p>
        
        <!-- Massive 28-field form -->
        <form class="heavy-form">
          <input placeholder="Applicant Middle Maiden Name" />
          <input placeholder="Previous Address (10-Year History)" />
          <input placeholder="Vehicle Tire Width (mm)" />
          <input placeholder="Original Dealership Tax ID" />
          <input placeholder="Notary Seal Number" />
          <input placeholder="Vehicle Color Shade Hex Code" />
          <button>Submit for 8-Week Committee Review</button>
        </form>
      </div>`,
      simulatedBloat: {
        hasCookieBanner: false,
        hasNewsletterModal: false,
        hasAutoplayVideo: false,
        hasCountdownTimer: false,
        hasStickyFooterAd: false,
        hasChatbot: false,
      },
    },
    defaultResult: {
      id: 'gov-service-clean',
      title: 'Resident Parking Permit',
      coreUtility: 'Frictionless 3-step permit application with instant address validation, document drop, and 24-hour turnaround.',
      summary: 'Pruned 24 redundant bureaucratic fields down to the 3 legally required items. Replaced obscure legal threats with clear processing timeline.',
      removedElements: [
        {
          category: 'clutter',
          name: '24 Redundant Government Form Fields',
          reason: 'Demanded unnecessary private data (e.g. 10-year residency history, tire dimensions).',
          impact: 'Application completion time dropped from 25 minutes to 90 seconds.'
        },
        {
          category: 'clutter',
          name: 'Nested 8-Level Hierarchical Navigation',
          reason: 'Buried the service behind obscure city department silos.',
          impact: 'Direct, clear single-purpose utility.'
        },
        {
          category: 'dark-patterns',
          name: 'Intimidating Penal Warnings & Obscure Legalese',
          reason: 'Created unnecessary anxiety for ordinary citizens requesting local permits.',
          impact: 'Friendly, accessible civic guidance.'
        }
      ],
      simplifiedHtml: `<div class="clean-service max-w-xl mx-auto p-6 bg-white text-stone-900 font-sans">
  <div class="border-b border-stone-200 pb-4 mb-6">
    <span class="text-xs uppercase font-semibold tracking-wider text-stone-500">City Transportation Services</span>
    <h1 class="text-2xl font-bold text-stone-900 mt-1">Resident Parking Permit</h1>
    <p class="text-sm text-stone-600 mt-1">Apply for an annual on-street parking permit for your registered residential address.</p>
  </div>

  <form class="space-y-4" onsubmit="event.preventDefault(); alert('Permit application submitted! Confirmation #PK-9824');">
    <div>
      <label class="block text-xs font-semibold text-stone-700 mb-1">Residential Address</label>
      <input type="text" required placeholder="e.g. 742 Evergreen Terrace, Apt 4" class="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-lg focus:outline-stone-900" />
      <span class="text-xs text-stone-500 mt-1 block">Must be within designated Zone A or B.</span>
    </div>

    <div class="grid grid-cols-2 gap-3">
      <div>
        <label class="block text-xs font-semibold text-stone-700 mb-1">License Plate Number</label>
        <input type="text" required placeholder="e.g. 7XYZ982" class="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-lg uppercase focus:outline-stone-900" />
      </div>
      <div>
        <label class="block text-xs font-semibold text-stone-700 mb-1">Vehicle Make & Model</label>
        <input type="text" required placeholder="e.g. Honda Civic" class="w-full px-3.5 py-2 text-sm border border-stone-300 rounded-lg focus:outline-stone-900" />
      </div>
    </div>

    <div>
      <label class="block text-xs font-semibold text-stone-700 mb-1">Proof of Residency (Utility Bill or Lease)</label>
      <div class="border-2 border-dashed border-stone-300 rounded-lg p-4 text-center hover:bg-stone-50 cursor-pointer">
        <p class="text-xs text-stone-600 font-medium">Click to select PDF or image file (max 10MB)</p>
      </div>
    </div>

    <div class="pt-2">
      <button type="submit" class="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm rounded-lg transition-colors shadow-xs">
        Submit Application (Free)
      </button>
      <p class="text-center text-xs text-stone-500 mt-2">Digital permit issued within 24 business hours to your email.</p>
    </div>
  </form>
</div>`,
      simplifiedTailwindCode: `<!-- Clean Government Form Component -->
<div class="max-w-xl mx-auto p-6 bg-white border border-stone-200 rounded-xl">
  <h1 class="text-2xl font-bold text-stone-900">Resident Parking Permit</h1>
  <!-- 3 Streamlined Inputs & Instant Confirmation -->
</div>`,
      metrics: {
        originalBytes: 1800000,
        simplifiedBytes: 18500,
        originalRequests: 42,
        simplifiedRequests: 1,
        originalScripts: 14,
        simplifiedScripts: 0,
        bloatScoreBefore: 88,
        bloatScoreAfter: 6,
        estimatedTtiSecondsBefore: 3.8,
        estimatedTtiSecondsAfter: 0.08
      },
      reliabilityFeatures: [
        'Native browser validation; zero external JavaScript form framework dependencies',
        'Operates with 100% reliability on assistive screen readers and mobile keyboards',
        'Works seamlessly on low-bandwidth public Wi-Fi'
      ],
      accessibilityHighlights: [
        'WCAG AA compliant color contrast on all form labels and buttons',
        'Keyboard navigation friendly with clear focus indicators'
      ]
    }
  }
];
