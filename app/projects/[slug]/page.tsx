import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";

const ProjectCaseStudy = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }
  return <div>page</div>;
};
export default ProjectCaseStudy;
