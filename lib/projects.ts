import campusPadi_logo from "@/assets/campuspadi/campuspadi_logo.png";
import campuspadi_screenshot from "@/assets/campuspadi/campuspadi-dashboard-screenshot.png";
import campus_screenshot_1 from "@/assets/campuspadi/campus_screenshot_1.png";
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
import tabletap_screenshot from "@/assets/tabletap/tabletap-order-screenshot.png";
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
import {
  ReactIcon,
  TailwindCssIcon,
  TypescriptIcon,
  NextJsIcon,
  SupabaseIcon,
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
      "CampusPadi originated from a real-world necessity at Enugu State University of Science and Technology (ESUT). Managing class dues, course materials, and tracking academic progress like CGPA calculation was historically disorganised across WhatsApp groups and paper records.\n\nWe engineered CampusPadi as a comprehensive digital ecosystem that simplifies payment collection, organizes course materials, provides automated CGPA tracking, and offers a collaborative study layer for thousands of active students.",
    myRole:
      "As Co-Founder and Lead Frontend Developer, I spearheaded the complete client-side architecture. I built responsive dashboards, payment integration interfaces, CGPA calculator utilities, and study tool interfaces using React, TypeScript, and Tailwind CSS. I prioritized fast load times on mobile networks and seamless UX for everyday student use.",
    challenges:
      "Designing for high-variance mobile network speeds across campus required heavy client-side state caching, aggressive asset optimization, and defensive UI states for offline/slow connections.",
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
      "Agrotrack addresses a critical agricultural and social challenge: reducing conflicts between pastoral herders and local farmers. By leveraging IoT hardware and geofencing technology, the platform establishes virtual boundaries around farmland.\n\nWhen livestock approach or breach designated farm perimeters, the system broadcasts instant alerts to farmers and regional monitoring teams to prevent crop destruction.",
    myRole:
      "I designed and developed the web dashboard and interactive mapping interface using Next.js, TypeScript, and Tailwind CSS. I implemented real-time geo-visualization primitives to render geofence perimeters, alert logs, and animal tracking telemetry with low latency.",
    challenges:
      "Displaying dynamic geospatial perimeters and handling real-time alert updates without lagging the browser DOM required efficient state management and optimized SVG mapping components.",
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
    image: tabletap_screenshot,
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
      tabletap_screenshot,
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
      "Unsaid is a minimalist anonymous social platform built for expressing unspoken thoughts, confessions, and feedback in a private space. It emphasizes user privacy, seamless content delivery, and simple interaction models.",
    myRole:
      "Built the platform using Next.js, Supabase, and Tailwind CSS. Focused on clean micro-interactions, dark mode aesthetic, image upload handling, and responsive feed layout.",
    challenges:
      "Optimizing media load speeds and ensuring complete anonymity on database queries without compromising user feed pagination performance.",
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
];
