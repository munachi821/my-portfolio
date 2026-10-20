import campusPadi_logo from "@/assets/campuspadi/campuspadi_logo.png";
import campuspadi_screenshot from "@/assets/campuspadi/campus_screenshot_1.png";
import campus_screenshot_1 from "@/assets/campuspadi/campuspadi-dashboard-screenshot.png";
import campus_screenshot_2 from "@/assets/campuspadi/campus_screenshot_2.png";
import campus_screenshot_3 from "@/assets/campuspadi/campus_screenshot_3.png";
import campus_screenshot_4 from "@/assets/campuspadi/campus_screenshot_4.png";
import campus_screenshot_5 from "@/assets/campuspadi/campus_screenshot_5.png";
import campus_screenshot_6 from "@/assets/campuspadi/campus_screenshot_6.png";
import campus_screenshot_7 from "@/assets/campuspadi/campus_screenshot_7.png";
import campus_screenshot_8 from "@/assets/campuspadi/campus_screenshot_8.png";
import campus_screenshot_9 from "@/assets/campuspadi/campus_screenshot_9.png";
import agrotrack_screenshot from "@/assets/agrotrack/agrotrack-landingpage-screenshot.png";
import agrotrack_screenshot_1 from "@/assets/agrotrack/agrotrack_screenshot_1.png";
import agrotrack_screenshot_2 from "@/assets/agrotrack/agrotrack_screenshot_2.png";
import agrotrack_screenshot_3 from "@/assets/agrotrack/agrotrack_screenshot_3.png";
import agrotrack_screenshot_4 from "@/assets/agrotrack/agrotrack_screenshot_4.png";
import agrotrack_screenshot_5 from "@/assets/agrotrack/agrotrack_screenshot_5.png";
import unsaid_screenshot from "@/assets/unsaid/unsaid-landingpag-screenshot.png";
import unsaid_screenshot_1 from "@/assets/unsaid/unsaid_screenshot_1.png";
import unsaid_screenshot_2 from "@/assets/unsaid/unsaid_screenshot_2.png";
import unsaid_screenshot_3 from "@/assets/unsaid/unsaid_screenshot_3.png";
import unsaid_screenshot_4 from "@/assets/unsaid/unsaid_screenshot_4.png";
import unsaid_screenshot_5 from "@/assets/unsaid/unsaid_screenshot_5.png";
import tabletap_screenshot_0 from "@/assets/tabletap/tabletap_screenshot_0.png";
import tabletap_screenshot_1 from "@/assets/tabletap/tabletap_screenshot_1.png";
import tabletap_screenshot_2 from "@/assets/tabletap/tabletap_screenshot_2.png";
import tabletap_screenshot_3 from "@/assets/tabletap/tabletap_screenshot_3.png";
import tabletap_screenshot_4 from "@/assets/tabletap/tabletap_screenshot_4.png";
import tabletap_screenshot_5 from "@/assets/tabletap/tabletap_screenshot_5.png";
import tabletap_screenshot_6 from "@/assets/tabletap/tabletap_screenshot_6.png";
import tabletap_screenshot_7 from "@/assets/tabletap/tabletap_screenshot_7.png";
import tabletap_screenshot_8 from "@/assets/tabletap/tabletap_screenshot_8.png";
import tabletap_screenshot_9 from "@/assets/tabletap/tabletap_screenshot_9.png";
import tabletap_screenshot_10 from "@/assets/tabletap/tabletap_screenshot_10.png";
import agrotrack_logo from "@/assets/agrotrack/agrotrack_logo.png";
import unsaid_logo from "@/assets/unsaid/theunsaid_logo.png";
import adihills_logo from "@/assets/adihills/Adhill_logo.png";
import adihills_screenshot from "@/assets/adihills/Screenshot 2026-09-16 101951.png";
import above_printing_logo from "@/assets/above_printing/abovelogo.webp";
import above_printing_screenshot from "@/assets/above_printing/Screenshot 2026-10-20 131104.png";
import above_printing_screenshot_1 from "@/assets/above_printing/Screenshot 2026-10-20 144227.png";
import above_printing_screenshot_2 from "@/assets/above_printing/Screenshot 2026-10-20 144301.png";
import above_printing_screenshot_3 from "@/assets/above_printing/Screenshot 2026-10-20 144316.png";
import above_printing_screenshot_4 from "@/assets/above_printing/Screenshot 2026-10-20 144332.png";
import above_printing_screenshot_5 from "@/assets/above_printing/Screenshot 2026-10-20 144351.png";
import {
  ReactIcon,
  TailwindCssIcon,
  TypescriptIcon,
  NextJsIcon,
  SupabaseIcon,
  Html5Icon,
} from "@/components/svg";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  meta: string;
  description: string;
  image: StaticImageData;
  logo?: StaticImageData;
  icons: React.ComponentType<{ className?: string }>[];
  link: string;
  featured?: boolean;
  slug: string;
  overview: string;
  myRole: string;
  challenges?: string;
  deliverables: string[];
  gallery: StaticImageData[];
  myTooling: string[];
  fullStack: string[];
  event?: string;
};

export const projects: Project[] = [
  {
    title: "Campuspadi",
    meta: "Co-Founder · Fintech · Edutech",
    description:
      "Started as a way to fix a real problem at ESUT — messy class fee collection and no easy way to track CGPA. CampusPadi now handles both, plus a study layer, and has been live for over a year.",
    image: campuspadi_screenshot,
    logo: campusPadi_logo,
    icons: [ReactIcon, TailwindCssIcon, TypescriptIcon],
    link: "https://campuspadi.com",
    featured: true,
    slug: "campuspadi",
    overview:
      "CampusPadi is an all-in-one digital ecosystem built to resolve daily academic and administrative friction for university students. The platform replaces unorganized chat groups and paper records with four specialized interfaces:\n\n• Class Dues Collection: A student-led payment portal facilitating class levy deposits, transaction receipt generation, and real-time ledger audits.\n• Academic Progress Dashboard: A personalized space for automated CGPA calculators, GPA trackers, and semester goal logs.\n• Shared Resource Vault: A peer-to-peer library hosting downloadable lectures, past questions, and course-specific reading materials.\n• AI Study Assistant: Integrated LLM chat interfaces for parsing class slides, summarizing long research, and generating quiz prep sheets.",
    myRole:
      "As Co-Founder and Lead Frontend Developer, I spearheaded the client-side design and integration. Key engineering contributions included:\n\n• Financial Dashboard UI: Designed and built secure payment confirmation sheets, visual revenue tracking graphs for class treasurers, and transaction logs.\n• Client-Side Math Engine: Developed the automated CGPA/GPA calculation utilities in TypeScript, verifying score schemas to avoid rounding errors during dynamic GPA recalculations.\n• Resource Delivery Pipeline: Optimized resource download sheets, integrating visual loader states, file size limits, and WebP previews for course materials.\n• LLM Chat Interface: Styled and integrated the custom chat interface using Gemini, NVIDIA NIM, and Groq SDKs to stream AI tutor responses.",
    challenges:
      "• Latent Network Resilience: Low-bandwidth campus cellular networks caused page loads to stall. I resolved this by caching critical page data in LocalStorage, implementing offline-first routing fallbacks, and rendering progressive skeletons to improve perceived performance.\n• Numeric Precision in GPA Logs: Floating-point precision errors in JavaScript led to incorrect GPA displays. I solved this by implementing decimal scaling algorithms to normalize grade math before outputting GPA values, ensuring database accuracy.",
    deliverables: [
      "Product Strategy",
      "Payment Collection Systems",
      "CGPA Calculation Engine",
      "Mobile Web Client",
    ],
    gallery: [
      campuspadi_screenshot,
      campus_screenshot_1,
      campus_screenshot_2,
      campus_screenshot_3,
      campus_screenshot_4,
      campus_screenshot_5,
      campus_screenshot_6,
      campus_screenshot_7,
      campus_screenshot_8,
      campus_screenshot_9,
    ],
    myTooling: ["React.js", "TypeScript", "Tailwind CSS"],
    fullStack: [
      "React.js",
      "TypeScript",
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "AI Integrations (Gemini, NVIDIA NIM, Groq)",
    ],
  },
  {
    title: "Agrotrack",
    meta: "Frontend · Agritech · Hardware",
    description:
      "A smart agritech platform that reduces conflicts between farmers and herders — using geofencing to define grazing zones and alert farmers the moment animals enter their farmland.",
    image: agrotrack_screenshot,
    logo: agrotrack_logo,
    icons: [NextJsIcon, TailwindCssIcon, TypescriptIcon],
    link: "https://agrotrack-app.web.app/",
    featured: true,
    slug: "agrotrack",
    overview:
      "Agrotrack is an IoT-powered geofencing platform designed to reduce conflict between farmers and livestock herders. It integrates physical tracking hardware with a digital mapping system to protect agricultural zoning:\n\n• Virtual Farmland Geofences: Custom virtual boundaries created by farmers to monitor perimeter safety around crop zones.\n• Live Telemetry Stream: Real-time map displaying GPS coordinates of grazing herds next to protected farm zones.\n• Instant Perimeter Alerts: Automated SMS/push notification triggers dispatched to farmers and herders the moment livestock cross a geofence.\n• Hardware Node Sync: Low-power ESP32 microcontrollers with GPS modules sending coordinates to the cloud via cellular nodes.",
    myRole:
      "I engineered the mapping visualization and real-time data sync pipeline. Key contributions included:\n\n• Interactive Geospatial Layer: Built a responsive, vector-based rendering layer with Leaflet and React to project complex geofences and path histories without lagging the DOM.\n• Telemetry Sync Loop: Connected real-time database updates from IoT hardware (ESP32/SIM800L GPS) to the frontend, utilizing debounce algorithms to prevent map stutter.\n• Alert Event Triggers: Set up serverless function endpoints to process incoming location payloads, calculate intersections, and queue immediate SMS alerts.",
    challenges:
      "• High-Frequency Rendering Lag: Drawing dozens of active GPS tracks and multi-point geofence boundaries caused major browser reflow bottlenecks. I optimized this by implementing canvas-based map rendering rather than SVG DOM elements, cutting rendering time by 75%.\n• Latent GPS Telemetry: Fluctuating cellular signals in remote areas sent duplicate or delayed GPS packages. I resolved this by coding a temporal-distance filter on the backend to verify coordinate velocity before updating the live map.",
    deliverables: [
      "IoT Hardware Integration",
      "Geofencing Engine",
      "Real-time Alerts Dashboard",
      "Interactive Map UI",
    ],
    gallery: [
      agrotrack_screenshot,
      agrotrack_screenshot_1,
      agrotrack_screenshot_2,
      agrotrack_screenshot_3,
      agrotrack_screenshot_4,
      agrotrack_screenshot_5,
    ],
    myTooling: ["React", "Tailwind CSS"],
    fullStack: [
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Firebase",
      "TTGO T-Call with SIM800L",
      "ESP32",
      "NEO8M GPS",
      "Leaflet Maps API",
      "AI Integrations",
    ],
    event: "Enugu Campus Hackathon - Top 11 finalist",
  },
  {
    title: "Table-Tap",
    meta: "Fullstack · SaaS · B2B",
    description:
      "A multi-tenant restaurant ordering and Kitchen Display System built on Supabase. One unified codebase reliably serves isolated environments for multiple restaurants.",
    image: tabletap_screenshot_0,
    icons: [NextJsIcon, SupabaseIcon, TailwindCssIcon],
    link: "https://table-tap-cyan.vercel.app/",
    featured: true,
    slug: "tabletap",
    overview:
      "Table-Tap is a high-performance, multi-tenant SaaS platform designed to modernize restaurant operations. It bridges four user environments under a single deployment:\n\n• Customer Ordering (/order): Scanning table QR codes to browse menu categories, pay instantly via Paystack, and place orders.\n• Kitchen Display (/kitchen): Real-time, touch-optimized order board for kitchen staff to coordinate and track orders.\n• Restaurant Dashboard (/admin): Managing menu items, categories, viewing live analytics, and provisioning credentials.\n• Super Admin Governance (/myadmin): Platform control panel (God Mode) to toggle paywalls, adjust pricing, and suspend tenants globally.",
    myRole:
      "I designed and developed the fullstack architecture using Next.js and Supabase. Key contributions included:\n\n• Secure Billing Loop: Connected client-side Paystack payment flows with Next.js Server Action verification. Validated transaction callbacks via HMAC SHA512 signatures and promoted order status in the database using a secure Supabase Admin Client.\n• Two-Layer Security & AuthGuard: Created an edge-to-client guard system. Next.js Middleware verifies session cookies at the server edge, while a custom React AuthGuard performs deep, deferred checks for subscription validity and tenant suspension.\n• Real-time Order Streams: Configured Supabase Realtime WS channels to stream PostgreSQL data changes directly to kitchen touchscreens, keeping order feeds perfectly synchronized.",
    challenges:
      "• Decoupling Security for Performance: Running tenant verification queries in global Edge Middleware added heavy latency to page assets. I split the routing security layers so edge middleware only handles quick token refreshes, and the heavy database check runs inside the React AuthGuard shell.\n• Preventing Transaction Spoofing: To prevent users from editing database order states manually, I forced the client to create 'PENDING' records, leaving status promotion to a secured webhook endpoint backed by cryptographic signature verification and database idempotency checks.\n• Optimistic Credential Write: Listing all platform users to ensure uniqueness when provisioning device credentials created latency. I restructured the flow to write the record first, intercept duplicate key exceptions, and fallback to updating passwords, cutting database roundtrips to a single path.",
    deliverables: [
      "Multi-Tenant DB Architecture",
      "QR-Code Ordering System",
      "Kitchen Display (KDS) Interface",
      "Real-time Order Streams",
    ],
    gallery: [
      tabletap_screenshot_0,
      tabletap_screenshot_1,
      tabletap_screenshot_2,
      tabletap_screenshot_3,
      tabletap_screenshot_4,
      tabletap_screenshot_5,
      tabletap_screenshot_6,
      tabletap_screenshot_7,
      tabletap_screenshot_8,
      tabletap_screenshot_9,
      tabletap_screenshot_10,
    ],
    myTooling: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    fullStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Paystack",
      "WebSockets",
    ],
  },
  {
    title: "Unsaid",
    meta: "Fullstack · Social · Anonymity",
    description:
      "An anonymous social platform where users can securely share their unspoken thoughts. Engineered to handle both text and image-based confessions in a completely untraceable, minimalist environment.",
    image: unsaid_screenshot,
    logo: unsaid_logo,
    icons: [NextJsIcon, SupabaseIcon, TailwindCssIcon],
    link: "https://the-unsaid.vercel.app/",
    featured: true,
    slug: "unsaid",
    overview:
      "Unsaid is a minimalist, anonymous social sharing space designed for raw self-expression and confessions. The platform operates on absolute anonymity and responsive micro-interactions:\n\n• Public Confessions Feed: A completely untraceable chronological feed featuring anonymized textual and visual cards.\n• Minimalist Post Creator: An interface where users submit confessions alongside optional media assets without accounts or IP logging.\n• Interactive Reactions: Engagement loops allowing users to interact with posts using pre-defined anonymous emotions.",
    myRole:
      "I built the entire web app and engineered the data-anonymization architecture. Key contributions included:\n\n• Absolute Privacy Pipeline: Decoupled post creations from user-identifiable data, stripping IP addresses, request headers, and metadata at the api endpoint before writing records.\n• Optimized Media Store: Integrated client-side WebP compression and Supabase storage to process, optimize, and host confessions images under a 1MB limit for quick page load times.\n• Dark Mode Aesthetic: Crafted a high-contrast dark theme with Framer Motion transitions for smooth feed interactions and content loading.",
    challenges:
      "• Preventing Identity Leakage: Traditional relational schemas risk connecting posts to accounts through trace logs. I restructured the database to store user sessions in ephemeral localStorage tokens and separated authentication states from post records entirely.\n• Image Load Performance: Loading raw image uploads on infinite-scroll confession feeds caused high layout shift and network latency. I resolved this by pre-compressing images to next-gen WebP formats on the client and serving them using Next.js Image optimization and BlurHash placeholders.",
    deliverables: [
      "Confession Submission Engine",
      "Image Upload Hosting",
      "Minimalist Feed UI",
      "Data Privacy Hardening",
    ],
    gallery: [
      unsaid_screenshot,
      unsaid_screenshot_1,
      unsaid_screenshot_2,
      unsaid_screenshot_3,
      unsaid_screenshot_4,
      unsaid_screenshot_5,
    ],
    myTooling: ["React", "Tailwind CSS"],
    fullStack: ["Coming soon"],
  },
  {
    title: "Adihills",
    meta: "Client Project · Freelancing",
    description:
      "Adihills is a digital storefront and portfolio for a professional printing service based in Enugu, delivering high-quality flex banners, posters, and event backdrops for brands, businesses, and personal projects.",
    image: adihills_screenshot,
    logo: adihills_logo,
    icons: [Html5Icon, TailwindCssIcon],
    link: "https://adihills.com",
    featured: false,
    slug: "adihills",
    overview:
      "Adihills is a digital storefront and portfolio for a professional printing service based in Enugu, delivering high-quality flex banners, posters, and event backdrops for brands, businesses, and personal projects. The platform serves to highlight their fast, 24-hour turnaround and includes:\n\n• Core Services Showcase: A comprehensive catalog of printing solutions, including corporate branding, custom stickers, business cards, and decals.\n• Categorized Portfolio Gallery: An interactive visual feed displaying successful print campaigns across political, corporate, educational, and event sectors.\n• Trust & Social Proof: Sections dedicated to highlighting 500+ completed projects, a 99% client satisfaction rate, and testimonials from high-profile state officials.",
    myRole:
      "I developed the landing page and digital portfolio to establish Adihills' online presence. Key contributions included:\n\n• Responsive Portfolio Pipeline: Built a categorized project showcase allowing users to seamlessly filter between Event, Corporate, Political, and Retail print jobs.\n• Conversion & Contact Integration: Integrated quick-access 'Request a Quote' endpoints and direct WhatsApp messaging channels to streamline customer inquiries and orders.\n• Localized Navigation: Embedded interactive maps, location details (Ogui Rd, Enugu), and business hours to drive local foot traffic and consultations.",
    challenges:
      "• Visual Asset Delivery: Showcasing high-quality, large-format print designs (like political campaign billboards and vehicle branding) required heavy image assets. I had to optimize the image loading pipeline to ensure fast rendering of the extensive portfolio without compromising visual fidelity.\n• Localized User Journey: Balancing a premium digital aesthetic with accessible, immediate contact methods (direct mobile numbers, WhatsApp buttons, and physical directions) tailored for the local Enugu market.",
    deliverables: [
      "Service Showcase Landing Page",
      "Categorized Project Portfolio",
      "Quote Request Pipeline",
      "Local Business Map Integration",
    ],
    gallery: [adihills_screenshot],
    myTooling: ["React", "Tailwind CSS"],
    fullStack: ["Coming soon"],
  },
  {
    title: "Above Printing & Training Services",
    meta: "Frontend Developer & SEO Engineer",
    description:
      "A fast, modern web platform and local search system built for an established commercial printing press in Enugu, Nigeria. Designed to showcase their print services, display real workshop projects, and make ordering via WhatsApp effortless.",
    image: above_printing_screenshot,
    logo: above_printing_logo,
    icons: [NextJsIcon, ReactIcon, TailwindCssIcon, TypescriptIcon],
    link: "https://aboveprintingandtraining.com",
    featured: false,
    slug: "above-printing-and-training-services",
    overview:
      "Above Printing and Training Services is an established industrial printing press in Asata, Enugu, with decades of experience in commercial printing and book production. I built their modern web platform to help them expand beyond offline word-of-mouth, making it easy for businesses, authors, and organizations across South-East Nigeria to discover their work and order prints online:\n\n• Clear Service Catalog: Detailed breakdowns of 9 major commercial print services — from book publishing and calendars to packaging, banners, and corporate branding.\n• Direct WhatsApp Ordering: Seamless quote requests connecting potential customers directly to the printing desk with pre-filled order details.\n• Real Project Showcase: High-quality photo galleries featuring completed client jobs and workshop machinery, providing solid proof of print quality.\n• Local Google Visibility: Built-in local SEO and business data so anyone searching for printing presses in Enugu can quickly find Above Printing at the top of search results.",
    myRole:
      "I designed and engineered the entire web platform from concept to launch, handling frontend development, user experience, local SEO, and production deployment:\n\n• Fast & Responsive Design: Built a clean, mobile-first website using Next.js and Tailwind CSS that matches the brand's identity and loads smoothly on any device.\n• Search Engine Optimization (SEO): Configured local business listings, Google-friendly metadata, and sitemaps to ensure strong ranking for local search queries.\n• Smooth User Experience: Integrated subtle animations and easy navigation, making it simple for visitors to browse services, check specifications, and get in touch.\n• Media Optimization: Handled and optimized workshop photography and sample images so pages open quickly, even on slower cellular networks.",
    challenges:
      "• Keeping Pages Fast with Heavy Photography: A printing portfolio requires lots of visual proof, but large photo files can slow down mobile loading. I compressed and optimized all images into lightweight WebP formats with smart loading, keeping photos sharp without sacrificing speed.\n• Simplifying How Customers Order: Many clients prefer a quick conversation over filling out long enquiry forms. I streamlined the quote process into a one-tap WhatsApp link that automatically tags the exact service they were viewing, making customer consultations much faster.",
    deliverables: [
      "Modern Commercial Website & Service Catalog",
      "Local Google Search & SEO Setup",
      "Print Portfolio & Workshop Showcase",
      "One-Tap WhatsApp Quote & Inquiry System",
      "Fast, Mobile-Optimized Performance",
    ],
    gallery: [
      above_printing_screenshot,
      above_printing_screenshot_1,
      above_printing_screenshot_2,
      above_printing_screenshot_3,
      above_printing_screenshot_4,
      above_printing_screenshot_5,
    ],
    myTooling: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Phosphor Icons",
    ],
    fullStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
    ],
  },
];
