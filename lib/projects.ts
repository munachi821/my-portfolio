import campusPadi_logo from "@/assets/campuspadi_logo.png";
import campuspadi_screenshot from "@/assets/campuspadi-dashboard-screenshot.png";
import agrotrack_screenshot from "@/assets/agrotrack-landingpage-screenshot.png";
import busierdesk_screenshot from "@/assets/busierdesk-landingpage-screenshot.png";
import unsaid_screenshot from "@/assets/unsaid-landingpag-screenshot.png";
import tabletap_screenshot from "@/assets/tabletap-order-screenshot.png";
import agrotrack_logo from "@/assets/agrotrack_logo.png";
import busierdesk_logo from "@/assets/busierdesk_logo.png";
import unsaid_logo from "@/assets/theunsaid_logo.png";
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
  },
];
