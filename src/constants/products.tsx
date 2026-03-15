import { Highlight } from "@/components/Highlight";
import cslf from "../../public/images/78.jpeg";
import cslf2 from "../../public/images/cslf2.png";
import hunter1 from "../../public/images/hunter.png";
import hunter3 from "../../public/images/hunter3.png";
import game1 from "../../public/images/game1.png";
import game2 from "../../public/images/game2.png";
import spiro from "../../public/images/Spiro.png";
import spiro1 from "../../public/images/spiro1.png";
import inom from "../../public/images/inom.png";
import inom1 from "../../public/images/inom1.png";
import pro6 from "../../public/images/pro6.png";
import p66 from "../../public/images/66.jpg";
import kids from "../../public/images/kids.png";
import kids1 from "../../public/images/kids1.png";
import gamel1 from "../../public/images/gamel1.png";
import gamel2 from "../../public/images/gamel2.png";
import ecommerce from "../../public/images/ecommerce.png";
import outseller from "../../public/images/outseller.png";
import outseller1 from "../../public/images/outseller1.png";
import educhain from "../../public/images/educhain.png";
import educhain1 from "../../public/images/educhain2.png";
import thumbnail from "../../public/images/thumnail.png";
import landseller from "../../public/images/landseller.png";
import aboutseller from "../../public/images/aboutseller.png";
import seller54 from "../../public/images/seller-22.png";
import filament from "../../public/images/filament.png";
import dark from "../../public/images/chat-filament.png";
import inovet from "../../public/images/inovent.png";
import inovet1 from "../../public/images/inovent1.png";
import fanzvar from "../../public/images/fanzvar.jpg";
import inomhub from "../../public/images/inomhub.png";
import inomhub2 from "../../public/images/inomhub2.png";
import newseller from "../../public/images/newseller1.png";
import newseller1 from "../../public/images/newseller2.png";
import nourtha from "../../public/images/noutha-tech.png";
import nourtha2 from "../../public/images/noutha-tech2.png";
import nourthav2 from "../../public/images/noutha-techv2-2.png";
import nourthav22 from "../../public/images/noutha-techv2.png";
import fanvar from "../../public/images/fanvarl.png";
import polrais from "../../public/images/polraismarine.png";
import polraismarien from "../../public/images/polraismarine2.png";
import dental1 from "../../public/images/dental.png";
import dental2 from "../../public/images/dentalosrais2.png";
import kemedar from "../../public/images/kemedar.png";
import ar2 from "../../public/images/ar2.png";
import ar from "../../public/images/ar.png";
import medad from "../../public/images/medad.png";
import medad2 from "../../public/images/medad2.png";
import igc from "../../public/images/igc.png";
import igc2 from "../../public/images/igc2.png";
import alnasser from "../../public/images/alnasser.png"
import elnasserback from "../../public/images/elnasserback.png"



import { title } from "process";

export const products = [
//   elnasser - backend dashboard & logistics
  {
    href: "",
    title: "Elnasser Backend & Logistics Engine",
    description:
      "A highly sophisticated, enterprise-grade e-commerce and logistics backend built on the Laravel ecosystem. Expertly handles multi-leveled product taxonomy, complex logistics, scalable API architectures, and real-time data processing.",
    thumbnail: elnasserback,
    images: [elnasserback],
    stack: [
        "Laravel",
        "PHP",
        "MySQL",
        "Redis/Queues",
        "Python",
        "Nginx",
        "DevOps"
    ],
    slug: "elnasser-backend-dashboard",
    content: (
        <div className="space-y-6">
            <p>
                <strong>Executive Overview</strong>
                <br />
                The project represents a highly sophisticated, enterprise-grade e-commerce and logistics backend built on the Laravel ecosystem. The system expertly handles multi-leveled product taxonomy, complex logistics (Internal Delivery Payroll, Delivery Fee Engine), scalable API architectures for a vast cross-platform ecosystem (powering 3 distinct mobile apps: Vendor, Delivery, and User, alongside a comprehensive e-commerce website), dynamic customer loyalty and tier programs, and real-time backend processing.
            </p>
            <p>
                <strong>Core Technical Architecture & System Mechanics</strong>
                <br />
                - <em>Database & Query Optimization:</em> Re-engineered the category system to move away from rigid 2-level nested loops to infinite-depth traversal using WITH RECURSIVE SQL CTEs. Implemented cache invalidation strategies using tree-version mechanics with Laravel Cache. Managed zero-downtime database schema upgrades for large datasets.
                <br />
                - <em>Background Jobs & Queue Processing:</em> Real-time Trash System and Bulk Delete implementations running via Laravel Queues. Handlers softly delete nested subcategories recursively and flush storage/cache. UI maintains live interactivity using AJAX polling.
                <br />
                - <em>Comprehensive API Layer:</em> Microservices-influenced separation using strict headers. Token-based auth via Bearer Tokens, secure password storage, and Multi-Factor/OTP. Robust Postman Collections integration dynamically exported via custom Artisan commands.
            </p>
            <p>
                <strong>Comprehensive Feature Set & Technical Implementations</strong>
                <br />
                - <em>Advanced Recursive Category Architecture:</em> Unlimited subcategory levels allowing complex taxonomies. Implemented descendant/ancestor lookups using SQL CTEs. Deep API endpoints return nested tree JSON structures up to specific depths.
                <br />
                - <em>Category Groups API:</em> Admin customizable "Groups" for dynamic storefront features, allowing carousels containing categories and products natively with level type mapping embedded in API responses.
                <br />
                - <em>Mobile App V1 API Expansion:</em> Full checkout capability, offline payments via multipart/form-data with up to 5MB screenshot uploads, campaign tracking, and robust filtering rules for items intercepting dynamic query scopes. New checkout summary engine computes live projections for coupons and loyalty points.
                <br />
                - <em>Delivery Man Ecosystem & Payroll Engine:</em> Completely functional dispatch and delivery portal. Solved critical visibility bugs for non-vehicular constrained orders. Internal delivery teams earn base monthly salaries plus task commissions while freelancers earn dynamic commissions. Engineered Delivery Fee APIs simulating costs based on distance, volumetric weight, and vehicle mappings.
                <br />
                - <em>Delivery & Payment Admin Reports:</em> Dedicated reporting interfaces for delivery operations powered by Eloquent Scopes to resolve complex SQL ambiguity. Devised advanced Seeders demonstrating operational behavior logical flows.
                <br />
                - <em>Customer Loyalty, Tiers, & Referral Setup:</em> Automated tiered setups (Bronze, Silver, Gold). End-to-end payload routing dynamically pushes user preferences configuration directly to the settings vault. Integrated helper logic calculating validation tokens natively at the payload layer without persistent coupon entities. Rigorous PHPUnit testing sequence to validate the calculations.
                <br />
                - <em>SMS OTP Authentication Protocol:</em> Frictionless phone-based onboarding. Tri-state workflow handler mapping logic into new, old, and existing states seamlessly without premature auth token issuance.
                <br />
                - <em>Frontend Images & Dashboard Theme Overrides:</em> System-wide native theme handling supporting layout partial overrides. Devilled an intelligent CSS pyramid grid engine visualizing category structures depending on recursive depth calculations. Dedicated UI bridging image payload storage dynamically.
                <br />
                - <em>Admin Tools & Python Automation:</em> Orchestrated python helpers alongside PHP loops (seed_products.py, fetch_product_images.py, cleanup_category_images.py) destroying orphaned blobs, handling mass api integration (Pixabay), and processing raw file dumps efficiently.
            </p>
            <p>
                <strong>DevOps & Systems Architecture</strong>
                <br />
                - <em>Nginx & Network Tuning:</em> Deployed infrastructure overhauls interacting with Nginx server blocks, upgrading client_max_body_size thresholds allowing large payload delivery natively.
                <br />
                - <em>Advanced SSH Deployment Protocols:</em> Developed custom single-process tar stream protocols bypassing SSH packet loss, cleanly deploying 1.2 GB of unstructured binary image data natively to server nodes. 
            </p>
            <p>
                <strong>My Role & Technical Impact</strong>
                <br />
                Operating as the Lead Backend & DevOps Engineer, I architected this massive Laravel backend to scale. My work heavily centered on advanced database engineering, scalable API designs, caching, seamless queuing algorithms, and comprehensive DevOps pipeline optimizations.
            </p>
        </div>
    ),
  },
//   alnasser - ecommerce landing page
  {
    href: "https://www.alnasser.eg/",
    title: "Al Nasser E-Commerce Landing Page",
    description:
      "A high-performance, modern landing page serving as the primary digital storefront for Al Nasser, a prominent retail brand with over 52 branches in Egypt and Kuwait. Designed to balance impression-driven brand storytelling with conversion optimization.",
    thumbnail: alnasser,
    images: [alnasser],
    stack: [
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Three.js",
        "AOS",
        "i18n"
    ],
    slug: "alnasser-ecommerce",
    content: (
        <div>
            <p>
                Key Features & Technical Architecture:
                <br />
                - High-Performance Animations: Opted for lightweight AOS over Framer Motion to drastically reduce bundle size and protect frame rates during smooth scrolling.
                <br />
                - Immersive WebGL Backgrounds: Engineered a custom FloatingLines environment in Three.js, deferring context loading to guarantee ultra-fast Largest Contentful Paint (LCP) times.
                <br />
                - Complete Localization: Fully integrated i18n supporting both English and Arabic with robust Right-to-Left (RTL) capability for the GCC market.
                <br />
                - Custom Theme Engine: Developed a lightweight useThemeMode hook to manage light/dark mode transitions mapped natively to OS preferences.
                <br />
            </p>
            <p>
                My Role & Implementation:
                <br />
                I architected and built the entire front-end of this project from scratch using React 18, establishing our team&apos;s first step into level-A corporate systems. I strictly enforced performance best practices—utilizing React.memo, aggressive code splitting for below-the-fold content via Suspense, and modern asset optimizations—resulting in a flawless 100/100 performance and SEO score across all Google Lighthouse tests.
            </p>
            <p>
                Project Status & Scale:
                <br />
                This successfully completed Phase One serves a brand with 2+ million active cross-platform followers. It anchors the ecosystem before the rollout of the full e-commerce module, management dashboard, and mobile applications.
            </p>
        </div>
    ),
  },
//   igc - influencer & ugc campaign platform
  {
    href: "https://igc-rklp.vercel.app/",
    title: "IGC (Influencer & UGC Campaign Platform)",
    description:
      "A modern, high-performance two-sided marketplace designed to bridge the gap between Brands and UGC creators/Influencers. Engineered with React Router v7 and TypeScript, it features complex multi-tenant onboarding flows and integrated ROI analytics.",
    thumbnail: igc,
    images: [igc, igc2],
    stack: [
      "React Router v7",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Formik",
      "Yup",
      "Recharts",
      "Docker",
    ],
    slug: "igc-influencer-ugc-platform",
    content: (
      <div>
        <p>
          Key Modules & Features:
          <br />
          - Smart Onboarding: Dual-persona flow for both Brands and Influencers with secure OTP verification.
          <br />
          - UGC Marketplace: Advanced discovery engine with granular filtering and integrated real-time messaging.
          <br />
          - ROI & Analytics: Integrated suite featuring custom ROI calculators and performance tracking via Recharts.
          <br />
          - Transactional Integrity: End-to-end secure checkout system and robust order management.
          <br />
        </p>
        <p>
          Architectural Highlights:
          <br />
          - SSR & Performance: Built on React Router v7 (formerly Remix) for superior SEO and faster First Contentful Paint.
          <br />
          - Modular Logic: Utilizes Zustand for lightweight state management and custom React Contexts for complex global workflows.
          <br />
          - Sophisticated UI: High-performance micro-animations powered by Framer Motion and responsive layouts via Tailwind CSS.
          <br />
        </p>
        <p>
          My Role & Implementation:
          <br />
          As the Lead Front-End Developer, I was responsible for transforming complex Figma designs into a high-performance, responsive UI. I architected the front-end structure using React Router v7, integrated all API endpoints, and ensured a seamless, type-safe data flow across the dual-persona marketplace.
        </p>
      </div>
    ),
  },
//   medad - contracting company website
  {
    href: "https://medad-alqemam.com.sa/",
    title: "Medad Al Qemam Contracting",
    description:
      "A premium, highly interactive corporate web platform for a leading contracting company in Saudi Arabia. Built to showcase civil engineering capabilities and large-scale infrastructure projects, it features immersive 3D/WebGL experiences that reflect the company's alignment with Saudi Vision 2030.",
    thumbnail: medad,
    images: [medad, medad2],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "GSAP",
      "Three.js",
      "i18next",
      "Supabase",
    ],
    slug: "medad-alqemam",
    content: (
      <div>
        <p>
          Key Features & Implementations:
          <br />
          - Dynamic Hero Sections: Custom WebGL components using Three.js for a premium, interactive first impression.
          <br />
          - Scroll & Micro-Animations: Leveraged GSAP for complex scroll-based reveal effects, enhancing user engagement without sacrificing performance.
          <br />
          - Built-in Internationalization (i18n): Seamless language switching with robust RTL (Right-to-Left) support tailored for the Saudi market.
          <br />
          - Performance Optimization: Utilized Vite bundling, lazy loading, and asset optimization for lightning-fast HMR and minified production builds.
          <br />
        </p>
        <p>
          My Role & Implementation:
          <br />
          I built the entire front-end of this corporate platform from scratch using React 18 and TypeScript. My primary focus was on creating a premium, high-performance user experience, integrating complex Three.js and GSAP animations while ensuring the site maintains exceptional loading speeds and responsiveness.
        </p>
        <p>
          Target Audience:
          <br />
          Clients and partners seeking cutting-edge civil engineering and large-scale infrastructure services within the Kingdom of Saudi Arabia.
        </p>
      </div>
    ),
  },
//   ar dish - 3d model visualizer
  {
    href: "https://dsm-ar.com/",
    title: "AR Dish & 3D Model Visualizer",
    description:
      "An immersive, cross-platform Augmented Reality (AR) experience that allows users to view high-fidelity 3D models of food dishes, furniture, and anatomy directly from their web browser. Built from scratch, focusing on high-performance 3D rendering.",
    thumbnail: ar,
    images: [ar,ar2],
    stack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn-ui",
      "React Query",
      "WebXR"
    ],
    slug: "ar-dish-visuals",
    content: (
      <div>
        <p>
          Key Features:
          <br />
          - Interactive 3D Viewer utilizing Google&apos;s &lt;model-viewer&gt; for rotating, zooming, and panning 3D models directly on the web.
          <br />
          - Cross-Platform AR: Leverages Apple native AR Quick Look (.usdz) for iOS and Google Scene Viewer (.glb) for Android.
          <br />
          - Animation Playback: Built-in controls for playing, pausing, and cycling through 3D model animations directly from the UI.
          <br />
          - Dynamic Data Rendering: Utilizes a TypeScript catalog to dynamically render products, descriptions, and nutritional facts.
          <br />
          - PBR Environments: Adjusted exposure and shadow intensities for photorealistic model blending into real-world spaces.
          <br />
        </p>
        <p>
          My Role & Technical Approach:
          <br />
          I built the entire front-end of this project from scratch. Beyond the complex 3D integration, I focused heavily on performance and SEO, successfully achieving a perfect 100 score on Google Lighthouse. I optimized the model assets (.glb, .usdz, and .webp) and established a seamless bridge between vanilla web components and the React ecosystem.
          <br />
        </p>
        <p>
          Target Audience:
          <br />
          Restaurants, furniture retainers, and businesses seeking to elevate customer engagement via an immersive 3D/AR catalog.
        </p>
      </div>
    ),
  },
//   kemedar - real estate platform
  {
    href: "https://kemedar.com/",
    title: "Kemedar — Real Estate Platform",
    description:
      "Kemedar is a secure, comprehensive, and global real estate platform that revolutionizes how people buy and rent properties across the world. Born out of a real-life struggle with fraudulent agents and localized platforms, Kemedar organizes and secures the entire real estate process, eliminating borders, language barriers, and security risks.",
    thumbnail: kemedar, // replace with your actual image import
    images: [kemedar], // replace with your actual images
    stack: [
      "Laravel",
      "Blade Templates",
      "MongoDB",
      "Microservices",
      "Docker",
      "Nginx",
      "JWT",
    ],
    slug: "kemedar-real-estate-platform",
    content: (
      <div>
        <p>
          From a Personal Crisis to a Global Solution:
          <br />
          Every great innovation is born from a true human need. For Kemedar, it started six years ago with a distressed phone call at 7:00 PM. A ruined summer trip due to a fraudulent agent awakened a pressing need for an application that completely secures, organizes, and facilitates the real estate process.
          <br />
          <br />
          At first, the vision was local. But after hearing stories of people struggling to buy apartments abroad due to war, language barriers, and localized tech limitations, the direction became clear: Kemedar had to be global.
          <br />
          <br />
          After more than five years of relentless dedication, Kemedar was born alongside its comprehensive ecosystem featuring Kemetro, Kemmeta, and Kemedar Academy. Built by a passionate family of creative minds with over 150 years of combined experience, it provides a trusted, secure, and borderless real estate ecosystem.
          <br />
          <br />
        </p>
        <p>
          Key Technical Features:
          <br />
          - Microservices Architecture for high scalability.
          <br />
          - MongoDB for managing complex and large-scale property data.
          <br />
          - API Gateway with JWT Authentication for secure access.
          <br />
          - Achieved a 40% improvement in overall response times.
          <br />
          - Fully containerized deployment using Docker and Nginx.
          <br />
        </p>
        <p>
          My Role & Technical Focus:
          <br />
          Working as a Backend Developer within a large engineering team, I specialized in Laravel-side development. My primary mission was to modernize the platform by refactoring ancient legacy code, decoupling "spaghetti" logic into clean, scalable microservices, and optimizing data flow between the Laravel core and MongoDB.
          <br />
          <br />
        </p>
        <p>
          Challenges & Solutions:
          <br />
          A major challenge in this project was navigating and modernizing an extensive, aging legacy codebase that had grown over five years. The system contained heavily entangled sections—often referred to as "spaghetti code"—making it incredibly difficult to edit or scale without breaking existing features. 
          <br />
          <br />
          My focus was on aggressively refactoring these critical bottlenecks. By dissecting the legacy logic and establishing clean, microservices-oriented boundaries, I successfully reduced technical debt, stabilized the architecture, and significantly improved the maintainability of the codebase for the entire team.
        </p>
      </div>
    ),
  },

  //dental osrais
  {
    href: "https://3dentix.com/",
    title: "3Dentix",
    description:
      "3Dentix is a multilingual dental website available in English, French, and Spanish. It features four main pages: Home, About, Prices, and Contact. I received the UI from my team and handled the full implementation, including building the project, adding animations, and ensuring full responsiveness across devices.",
    thumbnail: dental1,
    images: [dental1, dental2],
    stack: ["React", "Tailwindcss", "Multilingual", "Animation"],
    slug: "dental-osrais",
    content: (
      <div>
        <p>
          Key Features:
          <br />
          - Multilingual support: English, French, and Spanish.
          <br />
          - Four core pages: Home, About, Prices, and Contact.
          <br />
          - Responsive design for all devices.
          <br />
          - Smooth animations for enhanced user experience.
          <br />
        </p>
        <p>
          My Role:
          <br />I received the UI from my team and built the entire project,
          implementing the design, adding animations, and ensuring the site is
          fully responsive.
        </p>
        <p>
          Target Audience:
          <br />
          Dental clients and visitors seeking information and services in
          multiple languages.
        </p>
      </div>
    ),
  },

  //polrais marine
  {
    href: "https://polarismarines.com/",
    title: "polaris-marines",
    description:
      "Polrais Marine is a corporate website for a marine company specializing in building ships locally and exporting them worldwide. The site is designed and developed using React, with a strong focus on performance, SEO, and accessibility, achieving a perfect score on Google Insights. I handled the full setup, including deployment and domain acquisition.",
    thumbnail: polrais,
    images: [polrais, polraismarien],
    stack: ["React", "Tailwindcss", "SEO", "Accessibility"],
    slug: "polrais-marine",
    content: (
      <div>
        <p>
          Key Features:
          <br />
          - Corporate website for a marine company specializing in shipbuilding
          and global export.
          <br />
          - Designed and built with React for optimal performance and
          maintainability.
          <br />
          - Enhanced SEO and accessibility, achieving 100% scores on Google
          Insights.
          <br />
          - Fully responsive and optimized for all devices.
          <br />
        </p>
        <p>
          My Role:
          <br />I was responsible for the entire project lifecycle: design,
          development, performance optimization, SEO, accessibility, deployment,
          and domain setup.
        </p>
        <p>
          Target Audience:
          <br />
          International clients and partners seeking reliable shipbuilding and
          export services.
        </p>
      </div>
    ),
  },
  //nourtha-tech v2
  {
    href: "https://nourtha-techs.inomhub.com/",
    title: "Nourtha-Tech V2",
    description:
      "Nourtha-Tech V2 is a professional portfolio website for a Saudi tech company, featuring 8 distinct pages that highlight the company's services, solutions, and vision. The site is fully responsive and supports both Arabic and English localization.",
    thumbnail: nourthav22,
    images: [nourthav2, nourthav22],
    stack: ["React", "Tailwindcss"],
    slug: "nourtha-tech-v2",
    content: (
      <div>
        <p>
          Key Features:
          <br />
          - 8 pages showcasing company services and solutions.
          <br />
          - Fully responsive design for all devices.
          <br />
          - Multilingual support for Arabic and English.
          <br />
          - Modern UI built with React and Tailwind CSS.
          <br />
        </p>
        <p>
          My Role:
          <br />I built the entire project from scratch, handling design,
          development, and deployment using React and Tailwind CSS.
        </p>
        <p>
          Target Audience:
          <br />
          Clients and partners seeking innovative tech solutions in Saudi
          Arabia.
        </p>
      </div>
    ),
  },
  //nourtha-tech-v1
  {
    href: "https://nourtha-tech.inomhub.com",
    title: "Nourtha-Tech",
    description:
      "Nourtha-Tech is a cutting-edge landing page designed for a leading tech company in Saudi Arabia. Built entirely from scratch, it showcases the company&apos;s innovative solutions, services, and vision. The website features a modern, responsive design with full localization support, ensuring accessibility for both Arabic and English-speaking audiences. Developed using React-Vite and Tailwind CSS, it delivers a seamless user experience and highlights the company&apos;s commitment to technological excellence.",
    thumbnail: nourtha,
    images: [nourtha, nourtha2],
    stack: ["React", "AOS", "Tailwindcss"],
    slug: "nourtha-tech",
    content: (
      <div>
        <p>
          Key Features:
          <br />
          - Fully responsive design optimized for all devices.
          <br />
          - Multilingual support for Arabic and English.
          <br />
          - Integrated email system for seamless communication.
          <br />
          - Built with React-Vite and Tailwind CSS for performance and
          scalability.
          <br />- Represents the company&apos;s innovative approach to
          technology in Saudi Arabia.
        </p>
      </div>
    ),
  },
  //fanzvar
  {
    href: "https://fanzvar.rkmait.com",
    title: "Fanzvar",
    description:
      "Fanzvar is a comprehensive platform that brings together social, entertainment, business, development, and services for local, regional, and global sports fans — with a special focus on football enthusiasts from different clubs and nations worldwide.",
    thumbnail: fanvar,
    images: [fanzvar, fanvar],
    video: dark,
    stack: ["PHP", "Laravel", "Filament", "Reverb", "Livewire", "Flutter"],
    slug: "fanzvar",
    content: (
      <div>
        <p>
          Key Features:
          <br />
          - Multi-user system with real-time project-specific chat rooms.
          <br />
          - Content center with full multilingual support (Arabic, Hebrew,
          English).
          <br />
          - Advanced employee management (roles, project assignments,
          approvals).
          <br />
          - Ticketing and help desk system for inquiries and project issues.
          <br />
          - Attendance tracking with QR-based GPS check-in and shift management.
          <br />
          - Financial module for debt and payment tracking across users and
          projects.
          <br />
          - Custom user approval workflows and flexible role assignment.
          <br />- Complete multilingual admin dashboard with full control via
          Filament.
        </p>
        <p>
          My Role:
          <br />I developed key core features including the competitions module,
          reels (media sharing), and the real-time chatting system. I also
          implemented JWT-based authentication for secure API access, built the
          full admin panel using Filament, and integrated notification systems
          for both users and admins.
        </p>
        <p>
          Target Audience:
          <br />
          Sports fans, contractors, consultants, project managers, and
          administrative teams seeking an all-in-one platform to manage
          communities, communication, and operational workflows.
        </p>
        <p>
          Challenges and Solutions:
          <br />
          Handling multilingual content while maintaining an intuitive UX was a
          major challenge. I developed a dynamic language switching system with
          seamless localization for both frontend and admin sections.
          <br />
          Real-time chat and notification delivery were implemented using
          Laravel Reverb and WebSockets, ensuring smooth cross-region
          communication.
          <br />
          To solve timezone-related attendance recording issues, I standardized
          time handling based on user location and server synchronization.
        </p>
      </div>
    ),
  },
  //inomhub
  {
    href: "https://inomhub.com",
    title: "Inomhub ",
    description:
      "Inomhub is the official landing page for a parent company that aligns and connects multiple businesses under one unified brand. Built using PHP and Bootstrap, the website presents a professional and responsive interface, showcasing the group's vision and services. It includes full localization support and an integrated email system.",
    thumbnail: inomhub,
    images: [inomhub, inomhub2],
    stack: ["PHP", "AOS", "Bootstrap"],
    slug: "inomhub",
    content: (
      <div>
        <p>
          Key Features:
          <br />A corporate landing page for Inomhub, a company that brings
          together multiple businesses under one unified structure. Built with
          PHP and Bootstrap, the site is responsive, multilingual, and optimized
          for a professional online presence.
        </p>
        <p>
          My Role:
          <br />I was responsible for the complete design, development,
          deployment, and infrastructure setup of the website. This included
          creating the UI/UX, implementing multilingual support, configuring the
          email server, and managing deployment.
        </p>
        <p>
          Target Audience:
          <br />
          Business stakeholders, partners, and clients seeking to understand and
          engage with the group of companies under Inomhub.
        </p>
        <p>
          Challenges and Solutions:
          <br />
          Ensuring clean architecture, smooth deployment, and localization for
          multiple languages was essential. I addressed this by using
          lightweight PHP for the backend, Bootstrap for responsive design, and
          proper server configuration for both email and multilingual routing.
        </p>
      </div>
    ),
  },
  //kenz
  {
    href: "https://kenz.rkmait.com/admin",
    title: "Kenz Contractor and Consultant Management",
    description:
      "Kenz is a powerful, multi-role contractor and consultant management system tailored for large-scale operational control. The system includes multi-user access, real-time chat, multilingual support, employee and content center management, ticketing, attendance, debt tracking, and more. Built with responsiveness and scalability in mind, it ensures a seamless experience across devices and user roles.",
    thumbnail: thumbnail,
    images: [dark, filament],
    stack: ["PHP", "Filament", "LiveWire", "Laravel", "Reverb"],
    slug: "Kenz",
    content: (
      <div>
        <p>
          Key Features:
          <br />
          - Multi-user system with real-time chat for project-specific
          communication.
          <br />
          - Content center management with full support for Arabic, Hebrew, and
          English.
          <br />
          - Employee management with role and project assignments.
          <br />
          - Ticketing system for project-related inquiries and issues.
          <br />
          - Attendance tracking with GPS check-in and shift management.
          <br />
          - Debt management and financial tracking for users and projects.
          <br />
          - User approval workflow before login and custom role assignment.
          <br />- Multilingual dashboard and full admin control via Filament.
        </p>
        <p>
          My Role:
          <br />I developed the complete system architecture and
          implementation—from designing the database structure and user roles to
          integrating multilingual support and real-time features.
        </p>
        <p>
          Target Audience:
          <br />
          Contractors, consultants, project managers, and administrative teams
          seeking a robust platform to manage teams, tasks, and communication in
          one place.
        </p>
        <p>
          Challenges and Solutions:
          <br />
          Managing multilingual content while keeping the UI intuitive was
          challenging. I implemented a dynamic language switcher and content
          localization for all user-facing and admin sections.
          <br />
          Real-time communication was achieved using Laravel Reverb for
          WebSocket integration. I also tackled timezone-related attendance
          issues to ensure accurate tracking across regions.
        </p>
      </div>
    ),
  },
  //cslf
  {
    href: "https://cslf.sa",
    title: "Conflict Solution",
    description:
      "Conflict Solution is a professional portfolio website designed for a law company. The website features eight distinct pages that showcase the firm's services and expertise. Built with responsiveness in mind, it ensures a seamless browsing experience across devices.",
    thumbnail: cslf,
    images: [cslf, cslf2],
    stack: ["ReactJs", "AOS", "CSS"],
    slug: "cslf",
    content: (
      <div>
        <p>
          Key Features:
          <br />
          Eight pages tailored to highlight the law firm&apos;s offerings. Fully
          responsive design for optimal viewing on any device. Smooth animations
          integrated using AOS Animate On Scroll.{" "}
        </p>
        <p>
          My Role:
          <br />I developed the entire project from scratch, handling the
          design, coding, and deployment.
        </p>{" "}
        <p>
          Target Audience:
          <br />
          Clients seeking legal services and information about the law
          firm&apos; expertise.
        </p>{" "}
        <p>
          Challenges and Solutions:
          <br />
          During development, I encountered browser compatibility issues and
          challenges with CSS not rendering properly on the client&apos;s phone.
          Using my experience, I resolved these issues to ensure a flawless user
          experience.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://inovet.inom-techs.com",
    title: "Inovent ",
    description:
      "Inovent is a website designed for a virtual events platform. It leverages virtual reality (VR) and Unity, allowing users to navigate with a keyboard or VR headset and create immersive environments. The platform enhances event engagement by providing an interactive and dynamic experience for attendees.",
    thumbnail: inovet,
    images: [inovet, inovet1],
    stack: ["ReactJs Vite", "AOS", "CSS"],
    slug: "inovent",
    content: (
      <div>
        <p>
          Key Features:
          <br />A web application for virtual events utilizing technologies like
          virtual reality VR and Unity. Users can navigate using a keyboard or
          VR headset and create their own virtual environments. Designed to
          enhance event engagement by attracting a larger audience.
        </p>
        <p>
          My Role:
          <br />I developed the entire front-end of the project, handling UI
          design, interactivity, and responsiveness.
        </p>
        <p>
          Target Audience:
          <br />
          Event organizers and attendees looking for an immersive virtual event
          experience.
        </p>
        <p>
          Challenges and Solutions:
          <br />
          Ensuring smooth performance and responsiveness across various devices
          was a key challenge. By optimizing assets and leveraging efficient
          rendering techniques, I provided a seamless user experience.
        </p>
      </div>
    ),
  },

  {
    href: "http://outseller.rkmait.com/",
    title: "Out Seller landing page ",
    description:
      "Out Seller is a modern, responsive landing page designed to showcase the Outsellers brand. It features a clean layout with sections for hero, services, about, and contact, all optimized for a professional online presence.",
    thumbnail: landseller,
    images: [aboutseller, seller54],
    stack: ["Next", "Type Script", "Tailwindcss"],
    slug: "out-seller-landing-page",
    content: (
      <div>
        <p>
          Key Features:
          <br />A modern, visually engaging landing page designed to present
          Outsellers with clarity and impact. The layout includes clean sections
          for hero, services, about, and contact, all crafted to guide the
          visitor smoothly through the content. Fully responsive and optimized
          for all screen sizes.
        </p>
        <p>
          My Role:
          <br />I designed and built the entire landing page from scratch,
          focusing on clean UI, responsive structure, and subtle scroll-based
          animations to keep the user engaged.
        </p>
        <p>
          Target Audience:
          <br />
          Businesses and clients looking to understand the Outsellers brand and
          get in touch through a professional online presence.
        </p>
        <p>
          Challenges & Solutions:
          <br />
          One challenge was achieving a consistent design across different
          browsers and screen sizes. I utilized flexible grid layouts and tested
          responsiveness thoroughly to ensure pixel-perfect design everywhere.
        </p>
      </div>
    ),
  },
  {
    href: "https://inom-techs.com/",
    title: "Inom Techs",
    description:
      "Inom-Techs is a modern company profile website for a programming and marketing firm, featuring dynamic animations, localization with cookies, and dark mode support for an enhanced user experience.",
    thumbnail: inom,
    images: [inom, inom1],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "inom-techs",
    content: (
      <div>
        <p>
          Key Features: <br /> Localization powered by cookies, ensuring the
          website adapts to user preferences. Dark mode support for better
          accessibility and aesthetics. Visually appealing and modern design
          with heavy animations for an engaging experience.
        </p>
        <p>
          My Role:
          <br /> I handled the entire project from design to deployment,
          ensuring a flawless and functional user interface and experience.
        </p>
        <p>
          Target Audience: <br />
          Consumers and businesses looking for programming and marketing
          services.
        </p>
      </div>
    ),
  },
  {
    href: "http://outseller.tech",
    title: "Seller-tech",
    description:
      "Conflict Solution is a professional portfolio website designed for a law company. The website features eight distinct pages that showcase the firm's services and expertise. Built with responsiveness in mind, it ensures a seamless browsing experience across devices.",
    thumbnail: newseller,
    images: [newseller, newseller1],
    stack: ["Next", "Type Script", "Tailwindcss"],
    slug: "out-seller",
    content: (
      <div>
        <p>
          Key Features:
          <br />A modern, visually engaging landing page designed to present
          Outsellers with clarity and impact. The layout includes clean sections
          for hero, services, about, and contact, all crafted to guide the
          visitor smoothly through the content. Fully responsive and optimized
          for all screen sizes.
        </p>
        <p>
          My Role:
          <br />I designed and built the entire landing page from scratch,
          focusing on clean UI, responsive structure, and subtle scroll-based
          animations to keep the user engaged.
        </p>
        <p>
          Target Audience:
          <br />
          Businesses and clients looking to understand the Outsellers brand and
          get in touch through a professional online presence.
        </p>
        <p>
          Challenges & Solutions:
          <br />
          One challenge was achieving a consistent design across different
          browsers and screen sizes. I utilized flexible grid layouts and tested
          responsiveness thoroughly to ensure pixel-perfect design everywhere.
        </p>
      </div>
    ),
  },
  {
    href: "http://educhains.live",
    title: "Edu Chain",
    description:
      "An eLearning platform with multiple user roles (Admin, Teacher, User). Teachers manage courses and grades, while Zoom integration supports live sessions.",
    thumbnail: educhain,
    images: [educhain, educhain1],
    stack: ["Laravel", "Tailwindcss"],
    slug: "edu-chain",
    content: (
      <div>
        <p>
          Key Features:
          <ul>
            <li>
              Multi-user roles: Admin, User, Organizer, Teacher, with
              customizable permissions.
            </li>
            <li>
              Teacher panel for course CRUD, assignment tracking, and grading.
            </li>
            <li>Zoom integration for live sessions or video uploads.</li>
            <li>Admin panel with reports, tickets, and financial graphs.</li>
            <li>
              Full-responsive design for optimal user experience across devices.
            </li>
            <li>
              5 pages for the normal user, outcluding dashboard, course catalog,
              assignments, grades, and settings.
            </li>
          </ul>{" "}
        </p>
        <p>
          My Role:
          <br />
          Designed and developed the eLearning platform, including user roles,
          permissions, teacher panel, Zoom integration, and financial reporting
          features.
        </p>{" "}
        <p>
          Challenges & Solutions:
          <br />
          Integrated Zoom API for seamless live sessions and handled large video
          uploads for recorded sessions. Optimized performance for real-time
          updates and financial reports.
        </p>{" "}
        <p>
          Outcome:
          <br />A comprehensive eLearning platform with an intuitive teacher
          interface, live session capabilities, and powerful admin features for
          financial tracking and user management.{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://outseller.inom-techs.com/",
    title: "Out Seller",
    description:
      "Out Seller is a feature-rich eCommerce platform built with Laravel and Tailwind CSS, offering advanced product management, user authentication, and a responsive design for an optimal shopping experience.",
    thumbnail: outseller,
    images: [outseller, outseller1],
    stack: ["Laravel", "Tailwindcss"],
    slug: "out-seller-2",
    content: (
      <div>
        <p>
          Key Features:
          <ul>
            <li>
              Product comparison, loved product tracking, and add-to-cart
              functionality.
            </li>
            <li>User login/register.</li>
            <li>advanced filters by category, price, and color.</li>
            <li>Full-responsive design with a focus on user experience.</li>
          </ul>{" "}
        </p>
        <p>
          My Role:
          <br />
          Developed the entire eCommerce platform, including user
          authentication, product management, and payment integration.
        </p>{" "}
        <p>
          Challenges & Solutions:
          <br />
          Handled performance issues with product comparisons and optimized
          payment flow for seamless transactions.
        </p>{" "}
        <p>
          Outcome:
          <br />A feature-rich eCommerce site with robust product management,
          smooth user experience, and a responsive design.{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://sweet-home-sigma.vercel.app",
    title: "Hunter",
    description:
      "Hunter is a sleek and modern landing page designed to facilitate the buying and selling of houses.",
    thumbnail: hunter1,
    images: [hunter1, hunter3],
    stack: ["ReactJs", "Tailwindcss"],
    slug: "Hunter",
    content: (
      <div>
        <p>
          Key Features: <br /> A responsive and user-friendly design built for
          seamless navigation. Integrated Swiper.js sliders to showcase property
          listings dynamically. Tailored for both buyers and sellers to enhance
          their online real estate experience.
        </p>
        <p>
          My Role: <br /> I built this project entirely from scratch, handling
          everything from design to development.
        </p>
        <p>
          Target Audience: <br /> The platform is designed for consumers looking
          to buy or sell homes effortlessly.
        </p>
      </div>
    ),
  },
  {
    href: "https://3assem0.github.io/Online-Games-webpage/",
    title: "Online Games site",
    description:
      "The Online Games Site is a centralized platform where gamers can explore and download thousands of games from over 100 websites, all in one place. It streamlines the process of finding games by fetching data dynamically via APIs.",
    thumbnail: game1,
    images: [game1, game2],
    stack: ["Java Script", "Restful API"],
    slug: "gameing",
    content: (
      <div>
        <p>
          Key Features: <br /> Access to thousands of games aggregated from more
          than 100 sources. API integration for real-time data fetching and
          updates. User-friendly and responsive design tailored for gamers.{" "}
        </p>
        <p>
          My Role: <br />I built this project from scratch, handling everything
          from API integration to the website&apos;s design and development.
        </p>{" "}
        <p>
          Target Audience:
          <br />
          Gamers seeking a convenient and centralized hub for exploring and
          downloading games.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://3assem0.github.io/spiro-spates/",
    title: "Spiro Spates",
    description:
      "Spiro Spates is a vibrant portfolio website created for a local soda drinks company. The website showcases the brand's products and values through an engaging and modern design, enhanced with interactive animations.",
    thumbnail: spiro,
    images: [spiro, spiro1],
    stack: ["JavaScript", "CSS", "custom mouse tracking animations."],
    slug: "spiro",
    content: (
      <div>
        <p>
          Key Features: <br /> Dynamic mouse tracking animations for an
          interactive user experience. Smooth animations powered by AOS (Animate
          On Scroll). A responsive and visually appealing design tailored to
          attract a wide audience.{" "}
        </p>
        <p>
          My Role: <br /> I co-developed this project equally with my friend{" "}
          <Highlight>Assem </Highlight> , collaborating on both the design and
          development aspects.
        </p>{" "}
        <p>
          Target Audience:
          <br /> All users, especially soda drink enthusiasts looking to learn
          more about the brand.{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://3assem0.github.io/e-commerce/",
    title: "Halaa-Bazaar",
    description:
      "A sleek and functional eCommerce platform featuring responsive design, user authentication, and seamless shopping experiences with real-time API integration.",
    thumbnail: pro6,
    images: [pro6],
    stack: ["ReactJs", "Tailwindcss"],
    slug: "halaa-bazaar",
    content: (
      <div>
        <p>
          Key Features:
          <ul>
            <li>User authentication with login and registration.</li>
            <li>Responsive design optimized for all devices.</li>
            <li>Add-to-cart functionality for seamless shopping.</li>
            <li>
              Real-time data fetching via API for dynamic product updates.
            </li>
          </ul>{" "}
        </p>
        <p>
          My Role:
          <br />
          Developed the app from scratch, including design, coding, and API
          integration, ensuring functionality and scalability.
        </p>{" "}
        <p>
          Challenges & Solutions:
          <br />
          Resolved API fetching issues and cross-browser CSS inconsistencies to
          deliver a smooth, responsive user experience.
        </p>{" "}
        <p>
          Outcome:
          <br />A fully functional eCommerce app with a modern design and core
          shopping features tailored for online users.{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://project-olive-two.vercel.app/login",
    title: "ShopWise",
    description:
      "A dynamic eCommerce platform with user authentication, add-to-cart functionality, and a responsive design for a seamless shopping experience.",
    thumbnail: p66,
    images: [p66, ecommerce],
    stack: ["React", "CSS"],
    slug: "shopwise",
    content: (
      <div>
        <p>
          Key Features:
          <ul>
            <li>User authentication with login and registration.</li>
            <li>Responsive design optimized for all devices.</li>
            <li>Add-to-cart functionality for seamless shopping.</li>
            <li>
              Real-time data fetching via API for dynamic product updates.
            </li>
          </ul>{" "}
        </p>
        <p>
          My Role:
          <br />
          Developed the app from scratch, including design, coding, and API
          integration, ensuring functionality and scalability.
        </p>{" "}
        <p>
          Challenges & Solutions:
          <br />
          Resolved API fetching issues and cross-browser CSS inconsistencies to
          deliver a smooth, responsive user experience.
        </p>{" "}
        <p>
          Outcome:
          <br />A fully functional eCommerce app with a modern design and core
          shopping features tailored for online users.{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://al-gamel.rkmait.com",
    title: "E-commerce Laravel",
    description:
      "An eCommerce admin dashboard built with Laravel and Tailwind CSS, featuring category-product relationships and API export for efficient data management using MySQL.",

    thumbnail: gamel1,
    images: [gamel1, gamel2],
    stack: ["Laravel", "Tailwindcss"],
    slug: "E-commerce-Gamel",
    content: (
      <div>
        <p>
          Key Features:
          <ul>
            <li>Built using Laravel, Tailwind CSS, and MySQL. </li>
            <li>Admin dashboard for eCommerce management.</li>
            <li>
              Hierarchical data structure with main sections, sub-sections, and
              products, all linked via one-to-many relationships.
            </li>
            <li>
              API export for seamless integration with external applications.
            </li>
          </ul>{" "}
        </p>
        <p>
          My Role:
          <br />
          Designed and developed the system architecture, implemented database
          relationships, and created APIs to manage and expose the data.
        </p>{" "}
        <p>
          Challenges & Solutions:
          <br />
          Optimized database queries for performance and ensured secure API
          endpoints to maintain data integrity.
        </p>{" "}
        <p>
          Outcome:
          <br />A robust admin dashboard allowing seamless management of
          eCommerce categories, sub-categories, and products, along with an API
          layer for external integrations.{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    href: "http://gamesandtoys.kesug.com/?i=2",
    title: "our kids",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: kids,
    images: [kids, kids1],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "kids",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },

  // {
  //   href: "https://tailwindmasterkit.com",
  //   title: "Book Shop Website",
  //   description:
  //     "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
  //   thumbnail: sidefolioTailwindMasterKit,
  //   images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
  //   stack: ["Nextjs", "Tailwindcss"],
  //   slug: "tailwindmasterkit",
  //   content: (
  //     <div>
  //       <p>
  //         Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
  //         dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
  //         cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
  //         cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
  //         non cupidatat duis esse velit ut culpa et.{" "}
  //       </p>
  //       <p>
  //         Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
  //         Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
  //         sit aute fugiat incididunt nostrud consequat proident fugiat id.
  //         Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
  //         reprehenderit. Cillum Lorem veniam eu magna exercitation.
  //         Reprehenderit adipisicing minim et officia enim et veniam Lorem
  //         excepteur velit adipisicing et Lorem magna.
  //       </p>{" "}
  //     </div>
  //   ),
  // },
];
