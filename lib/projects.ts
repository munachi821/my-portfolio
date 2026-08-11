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
import busierdesk_screenshot from "@/assets/busierdesk/busierdesk-landingpage-screenshot.png";
import unsaid_screenshot from "@/assets/unsaid/unsaid-landingpag-screenshot.png";
import tabletap_screenshot from "@/assets/tabletap/tabletap-order-screenshot.png";
import agrotrack_logo from "@/assets/agrotrack/agrotrack_logo.png";
import busierdesk_logo from "@/assets/busierdesk/busierdesk_logo.png";
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
    gallery: [agrotrack_screenshot],
  },
  {
    title: "BusierDesk",
    meta: "Fullstack · AI Voice · Automation",
    description:
      "An autonomous AI voice and messaging agent engineered with Vapi and Twilio to capture leads on autopilot. I pitched this live at the Enyata x Interswitch Buildathon Demo Day.",
    image: busierdesk_screenshot,
    logo: busierdesk_logo,
    icons: [NextJsIcon, TailwindCssIcon],
    link: "https://busier-desk-kjo5.vercel.app/",
    featured: true,
    slug: "busierdesk",
    overview:
      "BusierDesk is an autonomous AI voice and messaging receptionist designed to convert website traffic into qualified leads 24/7. Engineered during the Enyata x Interswitch Buildathon, it combines voice agents (Vapi), SMS automation (Twilio), and conversational AI to schedule appointments and answer inquiries in real-time.",
    myRole:
      "Engineered the fullstack application, building the client dashboard, call logs interface, real-time transcript viewer, and voice widget controls using Next.js, TypeScript, and Tailwind CSS.",
    challenges:
      "Managing bidirectional real-time audio streams and dynamic conversation transcripts seamlessly on the web interface while keeping response latency under 500ms.",
    deliverables: [
      "Autonomous Voice Bot",
      "Call Logs Dashboard",
      "Real-time Transcript Feed",
      "SMS Automation Engine",
    ],
    gallery: [busierdesk_screenshot],
  },
  {
    title: "Table-Tap",
    meta: "Fullstack · SaaS · B2B",
    description:
      "A multi-tenant restaurant ordering and Kitchen Display System built on Supabase. One unified codebase reliably serves isolated environments for multiple restaurants.",
    image: tabletap_screenshot,
    icons: [NextJsIcon, SupabaseIcon, TailwindCssIcon],
    link: "#",
    featured: true,
    slug: "tabletap",
    overview:
      "Table-Tap is a modern multi-tenant SaaS application built for high-throughput restaurant operations. It features a digital QR-based ordering flow for customers, a live Kitchen Display System (KDS) for back-of-house staff, and a unified administration panel for menu management, table tracking, and business analytics.",
    myRole:
      "Designed and built the fullstack application powered by Next.js and Supabase. Implemented role-based data isolation for multi-tenant security, live order status synchronization via WebSockets/Supabase Realtime, and responsive KDS UI tailored for kitchen touchscreens.",
    challenges:
      "Ensuring zero-data-leakage multi-tenancy across active restaurant accounts and building an unshakeable, auto-reconnecting WebSocket listener for fast-paced kitchen environments.",
    deliverables: [
      "Multi-Tenant DB Architecture",
      "QR-Code Ordering System",
      "Kitchen Display (KDS) Interface",
      "Real-time Order Streams",
    ],
    gallery: [tabletap_screenshot],
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
    gallery: [unsaid_screenshot],
  },
];
