import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore the projects I've shipped — from fintech platforms and AI voice agents to SaaS tools and social apps. Built with React, Next.js, TypeScript, and more.",
  openGraph: {
    title: "Projects — Munachi Onyebuchi",
    description:
      "Explore the projects I've shipped — from fintech platforms and AI voice agents to SaaS tools and social apps.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
