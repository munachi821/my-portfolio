import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const googleSans = localFont({
  src: "./fonts/GoogleSans.ttf",
  variable: "--font-google-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

import CustomCursor from "@/components/uilayouts/custom-cursor";

export const metadata: Metadata = {
  title: {
    default: "Munachi Onyebuchi | Frontend Developer",
    template: "%s — Munachi Onyebuchi",
  },
  description:
    "Frontend developer specializing in React, Next.js, and TypeScript. Building fast, polished interfaces for SaaS and fintech products.",
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "portfolio",
    "web developer",
    "SaaS",
    "fintech",
    "Nigeria",
    "Enugu",
  ],
  authors: [{ name: "Munachi Onyebuchi" }],
  creator: "Munachi Onyebuchi",
  openGraph: {
    title: "Munachi Onyebuchi | Frontend Developer",
    description:
      "I build fast, clean interfaces for SaaS and fintech products — crafted with care, shipped with confidence.",
    url: "https://munachi-xi.vercel.app/",
    siteName: "Munachi Onyebuchi",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Munachi Onyebuchi — Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munachi Onyebuchi | Frontend Developer",
    description:
      "I build fast, clean interfaces for SaaS and fintech products — crafted with care, shipped with confidence.",
    creator: "@dev_munachi",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "T5Htue6fhDPN-3J1HNb_FHqR4PS102oW4MjKN_ul5Gk",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${googleSans.variable} ${fraunces.variable} antialiased min-h-full flex flex-col max-w-5xl mx-auto px-5 md:px-8 lg:px-0 bg-soft-linen text-gunmetal relative overflow-x-hidden selection:bg-sky-surge/30 cursor-none`}
      >
        <div className="block">
          <CustomCursor />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
