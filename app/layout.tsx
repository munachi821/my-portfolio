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
  metadataBase: new URL("https://munachi.cv"),
  title: {
    default: "Munachi Onyebuchi | Frontend Developer — React, Next.js, TypeScript",
    template: "%s — Munachi Onyebuchi",
  },
  description:
    "Munachi Onyebuchi is a self-taught frontend developer from Enugu, Nigeria, specializing in React, Next.js, and TypeScript. Building fast, polished interfaces for SaaS and fintech products. Co-founder of CampusPadi.",
  keywords: [
    "Munachi Onyebuchi",
    "Munachi",
    "munachi.cv",
    "frontend developer",
    "self-taught developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Tailwind CSS",
    "frontend developer Nigeria",
    "frontend developer Enugu",
    "web developer Nigeria",
    "self-taught frontend developer Nigeria",
    "SaaS developer",
    "fintech developer",
    "CampusPadi",
    "portfolio",
    "freelance frontend developer",
  ],
  authors: [{ name: "Munachi Onyebuchi", url: "https://munachi.cv" }],
  creator: "Munachi Onyebuchi",
  publisher: "Munachi Onyebuchi",
  alternates: {
    canonical: "https://munachi.cv",
  },
  openGraph: {
    title: "Munachi Onyebuchi | Frontend Developer",
    description:
      "Frontend developer from Enugu, Nigeria. I build fast, clean interfaces for SaaS and fintech products — crafted with care, shipped with confidence.",
    url: "https://munachi.cv/",
    siteName: "Munachi Onyebuchi",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Munachi Onyebuchi — Frontend Developer from Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munachi Onyebuchi | Frontend Developer",
    description:
      "Frontend developer from Enugu, Nigeria. Building fast, polished interfaces for SaaS and fintech products.",
    creator: "@dev_munachi",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
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
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Munachi Onyebuchi",
      url: "https://munachi.cv/",
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Munachi Onyebuchi",
      url: "https://munachi.cv",
      jobTitle: "Frontend Developer",
      description:
        "Self-taught frontend developer specializing in React, Next.js, and TypeScript. Co-founder of CampusPadi.",
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Frontend Development",
        "SaaS",
        "Fintech",
      ],
      sameAs: [
        "https://twitter.com/dev_munachi",
        "https://github.com/munachi821",
        "https://ng.linkedin.com/in/munachi-onyebuchi-90b6a12a8",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Enugu",
        addressCountry: "NG",
      },
    },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
