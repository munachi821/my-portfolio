import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, Project } from "@/lib/projects";
import ProjectCaseStudyClient from "./project-client";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const title = project.title;
  const fullTitle = `${project.title} — Munachi Onyebuchi`;
  const description =
    project.description ||
    `Case study detailing the engineering, tools, and architecture of ${project.title}.`;
  const imageUrl = project.image.src.startsWith("http")
    ? project.image.src
    : `https://munachi.cv${project.image.src}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      `${project.title} case study`,
      "Munachi Onyebuchi",
      ...project.myTooling,
      ...project.fullStack,
    ],
    openGraph: {
      title: fullTitle,
      description,
      type: "article",
      siteName: "Munachi Onyebuchi Portfolio",
      locale: "en_US",
      url: `https://munachi.cv/projects/${slug}`,
      images: [
        {
          url: imageUrl,
          width: project.image.width || 1200,
          height: project.image.height || 630,
          alt: `${project.title} case study screenshot`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@dev_munachi",
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://munachi.cv/projects/${slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = projects[currentIndex];
  const imageUrl = project.image.src.startsWith("http")
    ? project.image.src
    : `https://munachi.cv${project.image.src}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `https://munachi.cv/projects/${slug}/#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: `https://munachi.cv/projects/${slug}`,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `https://munachi.cv/projects/${slug}/#software`,
        name: project.title,
        description: project.description,
        applicationCategory: project.meta,
        operatingSystem: "Web Browser",
        image: imageUrl,
        url:
          project.link && project.link !== "#"
            ? project.link
            : `https://munachi.cv/projects/${slug}`,
        author: {
          "@type": "Person",
          "@id": "https://munachi.cv/#person",
          name: "Munachi Onyebuchi",
        },
        creator: {
          "@type": "Person",
          "@id": "https://munachi.cv/#person",
          name: "Munachi Onyebuchi",
        },
        keywords: project.fullStack.join(", "),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectCaseStudyClient slug={slug} />
    </>
  );
}
