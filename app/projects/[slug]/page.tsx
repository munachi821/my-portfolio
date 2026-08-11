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

  const title = `${project.title} — Case Study | Munachi`;
  const description = project.description || `Case study detailing the engineering, tools, and challenges of ${project.title}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://munachi.cv/projects/${slug}`,
      images: [
        {
          url: project.image.src,
          width: project.image.width || 1200,
          height: project.image.height || 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.image.src],
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

  const project: Project = projects[currentIndex];
  const prevProject: Project =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject: Project = projects[(currentIndex + 1) % projects.length];

  return (
    <ProjectCaseStudyClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
