import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the projects I've shipped — from fintech platforms and AI voice agents to SaaS tools and social apps. Built with React, Next.js, TypeScript, and more.",
  alternates: {
    canonical: "https://munachi.cv/projects",
  },
  openGraph: {
    title: "Projects — Munachi Onyebuchi",
    description:
      "Explore the projects I've shipped — from fintech platforms and AI voice agents to SaaS tools and social apps.",
    url: "https://munachi.cv/projects",
    siteName: "Munachi Onyebuchi Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Munachi Onyebuchi — Projects and Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Munachi Onyebuchi",
    description:
      "Explore the projects I've shipped — from fintech platforms and AI voice agents to SaaS tools and social apps.",
    creator: "@dev_munachi",
    images: ["/og-image.png"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://munachi.cv/projects/#collection",
        url: "https://munachi.cv/projects",
        name: "Projects — Munachi Onyebuchi",
        description:
          "Explore the portfolio projects shipped by Munachi Onyebuchi across fintech, SaaS, and web applications.",
        isPartOf: {
          "@id": "https://munachi.cv/#website",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://munachi.cv/projects/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://munachi.cv",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: "https://munachi.cv/projects",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
