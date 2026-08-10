"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowRightUp } from "reicon-react";
import ReactLenis from "lenis/react";
import { projects, Project } from "@/lib/projects";
import ContactSection from "@/components/contact-section";

export default function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  const [activeLightboxImage, setActiveLightboxImage] = useState<any>(null);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (currentIndex === -1) {
    notFound();
  }

  const project: Project = projects[currentIndex];
  const prevProject: Project =
    projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject: Project = projects[(currentIndex + 1) % projects.length];

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <ReactLenis root>
      {/* Sticky Floating Sub-Header on Scroll (#3) */}
      <AnimatePresence>
        {showStickyHeader && (
          <motion.header
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -70, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-40 bg-soft-linen/90 backdrop-blur-md border border-khaki-beige/40 rounded-full px-5 py-2.5 shadow-xl flex items-center justify-between gap-4 max-w-lg w-[90%]"
          >
            <div className="flex items-center gap-3 truncate">
              {project.logo && (
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  className="w-6 h-6 object-contain shrink-0"
                />
              )}
              <span className="font-fraunces font-bold text-gunmetal text-sm md:text-base truncate">
                {project.title}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {project.link && project.link !== "#" && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-gunmetal text-soft-linen! text-xs font-bold px-4 py-2 rounded-full hover:bg-sky-surge hover:text-gunmetal! transition-colors duration-300 shadow-sm"
                >
                  <span>Visit Site</span>
                  <ArrowRightUp size={14} />
                </Link>
              )}
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Lightbox Zoom Modal (#2) */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gunmetal/85 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-khaki-beige/30 bg-soft-linen/10 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveLightboxImage(null)}
                className="absolute top-4 right-4 z-20 bg-gunmetal/80 text-soft-linen! p-2.5 rounded-full hover:bg-black transition-colors shadow-lg cursor-pointer"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <Image
                src={activeLightboxImage}
                alt={`${project.title} expanded view`}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20 md:pt-24 pb-20 md:pb-32">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <button
            onClick={handleBack}
            className="group inline-flex items-center gap-2 text-sm font-google_sans font-medium text-khaki-beige hover:text-gunmetal! transition-colors duration-300 cursor-pointer"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform duration-300"
            />
            Back
          </button>
        </motion.div>

        {/* Hero Section */}
        <section className="mb-14 md:mb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
            className="flex flex-col gap-6"
          >
            {/* Meta Category */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="text-xs md:text-sm font-bold text-sky-surge tracking-[0.2em] uppercase"
            >
              {project.meta}
            </motion.p>

            {/* Title & Logo Header */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="flex flex-wrap items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4 md:gap-6">
                {project.logo && (
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="h-12 md:h-16 w-auto object-contain drop-shadow-sm shrink-0"
                  />
                )}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-fraunces text-gunmetal tracking-tight">
                  {project.title}
                </h1>
              </div>

              {/* Action Links */}
              {project.link && project.link !== "#" && (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-gunmetal text-soft-linen! px-6 py-3.5 rounded-full font-google_sans font-medium text-sm hover:bg-sky-surge hover:text-gunmetal! transition-colors duration-300 shadow-md"
                  >
                    <span>Visit Live Site</span>
                    <ArrowRightUp size={18} />
                  </Link>
                </motion.div>
              )}
            </motion.div>

            {/* Brief Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="text-lg md:text-xl text-gunmetal/80 font-google_sans leading-[1.8] max-w-3xl mt-2"
            >
              {project.description}
            </motion.p>

            {/* Tech Stack Icons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="flex items-center gap-4 pt-4 border-t border-khaki-beige/30 mt-4"
            >
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-khaki-beige">
                Built With
              </span>
              <div className="flex items-center gap-3 opacity-80">
                {project.icons.map((Icon, i) => (
                  <Icon key={i} className="size-6 text-gunmetal" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Screenshot Container with Lightbox Zoom */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="relative rounded-2xl overflow-hidden border border-khaki-beige/40 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.08)] bg-white/60 backdrop-blur-md">
            {/* Minimal Chrome */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-khaki-beige/20 bg-soft-linen/40">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
              </div>

              <div className="text-[11px] font-mono text-gunmetal/40 truncate max-w-xs">
                {project.link !== "#" ? project.link : `${project.slug}.app`}
              </div>
              <div className="w-12" />
            </div>

            {/* Image Preview Area */}
            <div className="p-2 md:p-4 bg-soft-linen/20">
              <div
                onClick={() => setActiveLightboxImage(project.image)}
                className="relative group cursor-zoom-in overflow-hidden rounded-xl"
              >
                <Image
                  src={project.image}
                  alt={`${project.title} detailed screenshot`}
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="w-full h-auto object-cover rounded-xl border border-khaki-beige/15 transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gunmetal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-semibold text-soft-linen! uppercase tracking-wider bg-black/40 backdrop-blur-xs rounded-xl">
                  Click to Zoom
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Narrative & Case Study Content */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-24 md:mb-32">
          {/* Left Side: Quick Specs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-4 flex flex-col gap-8 p-6 md:p-8 rounded-2xl border border-khaki-beige/30 bg-white/30 backdrop-blur-xs h-fit"
          >
            <div>
              <h3 className="text-xs font-bold text-khaki-beige uppercase tracking-[0.15em] mb-2">
                Category
              </h3>
              <p className="text-base font-medium font-google_sans text-gunmetal">
                {project.meta}
              </p>
            </div>

            <div className="border-t border-khaki-beige/20 pt-6">
              <h3 className="text-xs font-bold text-khaki-beige uppercase tracking-[0.15em] mb-2">
                Deliverables
              </h3>
              <ul className="text-sm font-google_sans text-gunmetal/80 space-y-1.5 list-disc list-inside">
                <li>UI Architecture & Design</li>
                <li>Frontend Implementation</li>
                <li>Performance Optimization</li>
                <li>Responsive Design</li>
              </ul>
            </div>

            {project.link && project.link !== "#" && (
              <div className="border-t border-khaki-beige/20 pt-6">
                <h3 className="text-xs font-bold text-khaki-beige uppercase tracking-[0.15em] mb-2">
                  Live Product
                </h3>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-surge! hover:underline"
                >
                  Visit Application <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </motion.div>

          {/* Right Side: Narrative */}
          <div className="md:col-span-8 flex flex-col gap-12 font-google_sans">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-fraunces text-2xl md:text-3xl font-bold text-gunmetal mb-4">
                Overview & Context
              </h2>
              <p className="text-base md:text-lg text-gunmetal/80 leading-[1.85] whitespace-pre-line">
                {project.overview || project.description}
              </p>
            </motion.div>

            {/* My Role */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-fraunces text-2xl md:text-3xl font-bold text-gunmetal mb-4">
                What I Engineered
              </h2>
              <p className="text-base md:text-lg text-gunmetal/80 leading-[1.85] whitespace-pre-line">
                {project.myRole ||
                  "Designed and built key responsive features, focusing on rapid page loads, state synchronization, and accessible UI interactions."}
              </p>
            </motion.div>

            {/* Challenges if present */}
            {project.challenges && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="font-fraunces text-2xl md:text-3xl font-bold text-gunmetal mb-4">
                  Challenges & Lessons
                </h2>
                <p className="text-base md:text-lg text-gunmetal/80 leading-[1.85] whitespace-pre-line">
                  {project.challenges}
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Gallery Section if images exist (#2 Clickable Zoom) */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24 md:mb-32"
          >
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold text-gunmetal mb-8">
              Product Screenshots
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveLightboxImage(img)}
                  className="group relative rounded-xl overflow-hidden border border-khaki-beige/30 shadow-md bg-white/40 cursor-zoom-in"
                >
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gunmetal/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs font-bold text-soft-linen! uppercase tracking-wider backdrop-blur-xs">
                    Click to Zoom
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Project Navigation Footer */}
        <section className="pt-12 border-t border-khaki-beige/30 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Prev Project */}
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group p-6 rounded-2xl border border-khaki-beige/30 bg-white/20 hover:bg-white/50 transition-all duration-300 flex flex-col gap-2"
            >
              <span className="text-xs font-bold text-khaki-beige uppercase tracking-[0.15em] flex items-center gap-1.5 group-hover:text-gunmetal transition-colors">
                <ArrowLeft size={14} /> Previous Project
              </span>
              <span className="font-fraunces text-xl font-bold text-gunmetal group-hover:text-sky-surge transition-colors">
                {prevProject.title}
              </span>
            </Link>

            {/* Next Project */}
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-6 rounded-2xl border border-khaki-beige/30 bg-white/20 hover:bg-white/50 transition-all duration-300 flex flex-col gap-2 text-right items-end"
            >
              <span className="text-xs font-bold text-khaki-beige uppercase tracking-[0.15em] flex items-center gap-1.5 group-hover:text-gunmetal transition-colors">
                Next Project <ArrowRight size={14} />
              </span>
              <span className="font-fraunces text-xl font-bold text-gunmetal group-hover:text-sky-surge transition-colors">
                {nextProject.title}
              </span>
            </Link>
          </div>
        </section>

        {/* Global Contact Section */}
        <ContactSection />
      </main>
    </ReactLenis>
  );
}
