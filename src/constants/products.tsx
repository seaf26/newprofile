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
export const products = [

  //fanzvar
  {
    href: "https://fanzvar.inom-techs.com/admin",
    title: "Fanzvar",
    description:
      "Fanzvar is a comprehensive platform that brings together social, entertainment, business, development, and services for local, regional, and global sports fans — with a special focus on football enthusiasts from different clubs and nations worldwide.",
    thumbnail: fanzvar,
    images: [fanzvar],
    video: dark,
    stack: ["PHP", "Laravel", "Filament", "Reverb", "Livewire", "Flutter"],
    slug: "fanzvar",
    content: (
      <div>
        <p>
          Key Features:
          <br />
          - Multi-user system with real-time project-specific chat rooms.<br />
          - Content center with full multilingual support (Arabic, Hebrew, English).<br />
          - Advanced employee management (roles, project assignments, approvals).<br />
          - Ticketing and help desk system for inquiries and project issues.<br />
          - Attendance tracking with QR-based GPS check-in and shift management.<br />
          - Financial module for debt and payment tracking across users and projects.<br />
          - Custom user approval workflows and flexible role assignment.<br />
          - Complete multilingual admin dashboard with full control via Filament.
        </p>
        <p>
          My Role:
          <br />
          I developed key core features including the competitions module, reels (media sharing), and the real-time chatting system. I also implemented JWT-based authentication for secure API access, built the full admin panel using Filament, and integrated notification systems for both users and admins.
        </p>
        <p>
          Target Audience:
          <br />
          Sports fans, contractors, consultants, project managers, and administrative teams seeking an all-in-one platform to manage communities, communication, and operational workflows.
        </p>
        <p>
          Challenges and Solutions:
          <br />
          Handling multilingual content while maintaining an intuitive UX was a major challenge. I developed a dynamic language switching system with seamless localization for both frontend and admin sections.<br />
          Real-time chat and notification delivery were implemented using Laravel Reverb and WebSockets, ensuring smooth cross-region communication.<br />
          To solve timezone-related attendance recording issues, I standardized time handling based on user location and server synchronization.
        </p>
      </div>
    ),
  },
  {
    href: "https://inomhub.com",
    title: "Inomhub ",
    description:
    "Inomhub is the official landing page for a parent company that aligns and connects multiple businesses under one unified brand. Built using PHP and Bootstrap, the website presents a professional and responsive interface, showcasing the group's vision and services. It includes full localization support and an integrated email system.",
   thumbnail: inomhub,
    images: [inomhub, inomhub2],
    stack: [ "PHP","AOS", "Bootstrap" ],
    slug: "inomhub",
    content: (
      <div>
        <p>
          Key Features:
          <br />
          A corporate landing page for Inomhub, a company that brings together multiple businesses under one unified structure. Built with PHP and Bootstrap, the site is responsive, multilingual, and optimized for a professional online presence.
        </p>
        <p>
          My Role:
          <br />
          I was responsible for the complete design, development, deployment, and infrastructure setup of the website. This included creating the UI/UX, implementing multilingual support, configuring the email server, and managing deployment.
        </p>
        <p>
          Target Audience:
          <br />
          Business stakeholders, partners, and clients seeking to understand and engage with the group of companies under Inomhub.
        </p>
        <p>
          Challenges and Solutions:
          <br />
          Ensuring clean architecture, smooth deployment, and localization for multiple languages was essential. I addressed this by using lightweight PHP for the backend, Bootstrap for responsive design, and proper server configuration for both email and multilingual routing.
        </p>
      </div>
    ),
    
  },
  //kenz
  {
    href: "https://kenz.localproductsnetwork.com/admin",
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
          - Multi-user system with real-time chat for project-specific communication.<br />
          - Content center management with full support for Arabic, Hebrew, and English.<br />
          - Employee management with role and project assignments.<br />
          - Ticketing system for project-related inquiries and issues.<br />
          - Attendance tracking with GPS check-in and shift management.<br />
          - Debt management and financial tracking for users and projects.<br />
          - User approval workflow before login and custom role assignment.<br />
          - Multilingual dashboard and full admin control via Filament.
        </p>
        <p>
          My Role:
          <br />I developed the complete system architecture and implementation—from designing the database structure and user roles to integrating multilingual support and real-time features.
        </p>
        <p>
          Target Audience:
          <br />
          Contractors, consultants, project managers, and administrative teams seeking a robust platform to manage teams, tasks, and communication in one place.
        </p>
        <p>
          Challenges and Solutions:
          <br />
          Managing multilingual content while keeping the UI intuitive was challenging. I implemented a dynamic language switcher and content localization for all user-facing and admin sections.<br />
          Real-time communication was achieved using Laravel Reverb for WebSocket integration. I also tackled timezone-related attendance issues to ensure accurate tracking across regions.
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
    href: "https://outseller.tech",
    title: "Out Seller landing page ",
    description:
      "Conflict Solution is a professional portfolio website designed for a law company. The website features eight distinct pages that showcase the firm's services and expertise. Built with responsiveness in mind, it ensures a seamless browsing experience across devices.",
    thumbnail: landseller,
    images: [aboutseller, seller54],
    stack: ["Next", "Type Script", "Tailwindcss"],
    slug: "out-seller-landing-page",
    content: (
      <div>
        <p>
          Key Features:
          <br />
          A modern, visually engaging landing page designed to present Outsellers with
          clarity and impact. The layout includes clean sections for hero, services,
          about, and contact, all crafted to guide the visitor smoothly through the content.
          Fully responsive and optimized for all screen sizes.
        </p>
        <p>
          My Role:
          <br />
          I designed and built the entire landing page from scratch, focusing on clean UI,
          responsive structure, and subtle scroll-based animations to keep the user engaged.
        </p>
        <p>
          Target Audience:
          <br />
          Businesses and clients looking to understand the Outsellers brand and get in touch
          through a professional online presence.
        </p>
        <p>
          Challenges & Solutions:
          <br />
          One challenge was achieving a consistent design across different browsers and screen
          sizes. I utilized flexible grid layouts and tested responsiveness thoroughly to ensure
          pixel-perfect design everywhere.
        </p>
      </div>
    )
    ,
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
    href: "https://outseller.inom-techs.com/",
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
      "An eCommerce site built with Laravel, offering product comparisons, smooth checkout process.and a fully responsive, visually appealing design.",
    thumbnail: outseller,
    images: [outseller, outseller1],
    stack: ["Laravel", "Tailwindcss"],
    slug: "out-seller",
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
    href: "",
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