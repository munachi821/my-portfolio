"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft } from "reicon-react";
import ReactLenis from "lenis/react";
import { projects } from "@/lib/projects";
import ContactSection from "@/components/contact-section";

export default function ProjectsPage() {
  return (
    <ReactLenis root>
      <main>
        {/* Page Header */}
        <section className="pt-20 md:pt-24 pb-16 md:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
            }}
          >
            {/* Back link */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="mb-12 md:mb-16"
            >
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm font-google_sans font-medium text-khaki-beige hover:text-gunmetal! transition-colors duration-300"
              >
                <ArrowLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform duration-300"
                />
                Back home
              </Link>
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <h1 className="font-fraunces text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gunmetal">
                Things I&apos;ve shipped
              </h1>
              <div className="w-10 h-0.5 bg-sky-surge/60 mt-4 md:mt-6 rounded-full" />
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="mt-6 md:mt-8 text-base md:text-lg text-gunmetal/70 font-google_sans leading-[1.8] max-w-xl"
            >
              A collection of products I&apos;ve designed and built — from
              co-founding a fintech platform to engineering AI voice agents.
              Each one taught me something new.
            </motion.p>
          </motion.div>
        </section>

        {/* All Projects */}
        <section className="pb-20 md:pb-32">
          <div className="flex flex-col gap-28 md:gap-40">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="flex flex-col gap-8 md:gap-12"
              >
                {/* Project Image */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="relative rounded-xl overflow-hidden border border-khaki-beige/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] bg-white/50 backdrop-blur-sm group"
                >
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-4 border-b border-khaki-beige/20 bg-soft-linen/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-gunmetal/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gunmetal/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gunmetal/15" />
                  </div>

                  <div className="p-1 bg-soft-linen/10">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      sizes="(max-width: 768px) 100vw, 960px"
                      priority={idx === 0}
                      className="w-full h-auto object-cover rounded-lg border border-khaki-beige/10"
                    />
                  </div>

                  {/* Hover overlay with link */}
                  {project.link !== "#" && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-10 flex items-center justify-center bg-gunmetal/0 group-hover:bg-gunmetal/60 transition-all duration-500"
                    >
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 bg-soft-linen text-gunmetal px-6 py-3 rounded-full font-google_sans font-bold text-sm tracking-[0.1em] uppercase shadow-lg"
                      >
                        Visit Live Site
                        <ArrowRight size={16} />
                      </motion.span>
                    </Link>
                  )}
                </motion.div>

                {/* Project Details */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-start px-2"
                >
                  {/* Left: Title & Meta */}
                  <div className="md:col-span-5 lg:col-span-5 shrink-0">
                    <p className="text-[12px] font-bold text-sky-surge tracking-[0.2em] uppercase mb-4">
                      {project.meta}
                    </p>
                    <div className="flex items-center gap-4">
                      {project.logo && (
                        <Image
                          src={project.logo}
                          alt={`${project.title} logo`}
                          className="h-10 lg:h-12 w-auto object-contain drop-shadow-sm shrink-0"
                        />
                      )}
                      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-tight font-bold font-fraunces text-gunmetal truncate">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  {/* Right: Description & Links */}
                  <div className="md:col-span-7 lg:col-span-7 flex flex-col font-google_sans pt-1 min-w-0">
                    <p className="text-base md:text-lg text-gunmetal/80 leading-[1.8] mb-6 md:mb-8 max-w-2xl">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-5">
                      <div className="opacity-60 flex items-center gap-3">
                        {project.icons.map((Icon, i) => (
                          <Icon key={i} className="size-6" />
                        ))}
                      </div>
                      {project.link !== "#" && (
                        <motion.div whileHover="hover" initial="initial">
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.15em] uppercase text-gunmetal w-fit pb-1 border-b border-gunmetal/30 hover:border-sky-surge hover:text-sky-surge transition-colors duration-300"
                          >
                            <span>View Project</span>

                            {/* Scrolling Arrow Container */}
                            <div className="relative overflow-hidden w-5 h-5 flex items-center justify-center">
                              {/* Original arrow shoots right */}
                              <motion.div
                                variants={{
                                  initial: { x: "0%" },
                                  hover: { x: "150%" },
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: "anticipate",
                                }}
                                className="absolute flex items-center justify-center"
                              >
                                <ArrowRight size={20} />
                              </motion.div>

                              {/* New arrow slides in from left */}
                              <motion.div
                                variants={{
                                  initial: { x: "-150%" },
                                  hover: { x: "0%" },
                                }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeOut",
                                  delay: 0.1,
                                }}
                                className="absolute flex items-center justify-center"
                              >
                                <ArrowRight size={20} />
                              </motion.div>
                            </div>
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </ReactLenis>
  );
}
