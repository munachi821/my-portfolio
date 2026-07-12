"use client";
import Image from "next/image";
import { WordRotate } from "@/components/uilayouts/word-rotate";
import { ArrowDown, ArrowRight } from "reicon-react";
import { RippleButton } from "@/components/uilayouts/ripple-button";
import Link from "next/link";
import { motion } from "motion/react";
import ReactLenis from "lenis/react";
import TechStack from "@/components/uilayouts/techstack";
import campusPadi_logo from "@/assets/campuspadi_logo.png";
import { projects } from "@/lib/projects";
import ContactSection from "@/components/contact-section";
import VariableFontCursorProximity from "@/components/uilayouts/text-weight";

export default function Home() {
  const my_works = projects;
  return (
    <ReactLenis root>
      <main>
        <section
          id="home"
          className="pt-20 md:pt-15 min-h-[75vh] md:min-h-0 md:h-fit md:pb-20"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* my image */}
            {/* Uncomment when photo is ready */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="w-40 h-40 md:w-60 md:h-60 rounded-4xl overflow-hidden bg-black"
            >
              {/* <Image src={myPhoto} alt="Munachi" /> */}
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="mt-10 font-google_sans"
            >
              <h1 className="text-3xl md:text-4xl font-bold">
                <span className="flex items-end">
                  <WordRotate
                    words={["Hello", "Kedu", "Ẹ n lẹ", "Bonjour", "Hola"]}
                    className="inline mb-1"
                  />
                  ,
                </span>
                I&apos;m Munachi, a Frontend Developer
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-khaki-beige mt-3 max-w-md">
                I build fast, clean interfaces for SaaS and fintech products —
                crafted with care, shipped with confidence.
              </p>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="mt-8 font-google_sans flex flex-row items-center gap-4 md:gap-6"
            >
              <Link href={"Mailto:munaonye4@gmail.com"}>
                <RippleButton />
              </Link>
              <motion.div whileHover="hover" initial="initial">
                <Link
                  href={"#projects"}
                  className="group flex items-center gap-2 text-lg sm:text-xl font-medium hover:text-gunmetal! transition-colors duration-300"
                >
                  <span>View my work</span>

                  {/* Scrolling Arrow Container - Fixed size and color inheritance */}
                  <div className="relative overflow-hidden w-7 h-7 flex items-center justify-center transition-colors duration-300">
                    {/* Original arrow shoots down */}
                    <motion.div
                      variants={{
                        initial: { y: "0%" },
                        hover: { y: "150%" },
                      }}
                      transition={{ duration: 0.3, ease: "anticipate" }}
                      className="absolute flex items-center justify-center"
                    >
                      <ArrowDown size={25} />
                    </motion.div>

                    {/* New arrow drops in from top */}
                    <motion.div
                      variants={{
                        initial: { y: "-150%" },
                        hover: { y: "0%" },
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: 0.05,
                      }}
                      className="absolute flex items-center justify-center"
                    >
                      <ArrowDown size={25} />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
        <section id="about" className="my-20 md:my-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8"
          >
            {/* Left Column: Sticky Anchor */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="md:col-span-4"
            >
              <div className="md:sticky md:top-32">
                <h2 className="font-fraunces text-3xl md:text-4xl font-bold tracking-tight text-gunmetal">
                  About Me
                </h2>
                <div className="w-10 h-0.5 bg-sky-surge/60 mt-4 md:mt-6 rounded-full" />
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <div className="md:col-span-8 flex flex-col">
              <div className="max-w-2xl flex flex-col gap-6 md:gap-8 text-base md:text-lg text-gunmetal/80 font-google_sans leading-[1.8]">
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  Co-founder of{" "}
                  <span className="inline-flex items-center gap-1.5 ml-1 align-middle text-gunmetal font-medium">
                    <Image
                      src={campusPadi_logo}
                      width={22}
                      alt="campuspadi"
                      className="shrink-0 rounded-sm"
                    />
                    CampusPadi
                  </span>
                  , a platform helping students manage fees and study better.
                </motion.p>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  I&apos;m{" "}
                  <span className="text-gunmetal font-medium">
                    Munachi Onyebuchi
                  </span>
                  , a frontend developer with 2+ years of experience, studying
                  Computer Science at ESUT, based in Enugu.
                </motion.p>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  I have a low tolerance for bad UX — a slow page, a confusing
                  flow, a button that doesn&apos;t respond right — and that
                  impatience is exactly why I care so much about the details
                  most people skip: hover states, spacing, load times, the small
                  stuff that separates &quot;it works&quot; from &quot;it feels
                  considered.&quot;
                </motion.p>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  Outside of client work, you&apos;ll usually find me in the
                  middle of a hackathon, arguing about a color palette, or
                  rebuilding something I already finished because I found a
                  better way to do it.
                </motion.p>
              </div>

              {/* Marquee Footer */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="mt-10 md:mt-16 pt-8 md:pt-12 border-t border-khaki-beige/30"
              >
                <p className="text-[13px] font-bold text-khaki-beige mb-6 tracking-[0.2em] uppercase">
                  The Toolkit
                </p>
                <TechStack />
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section id="projects" className="mb-20 md:mb-30 scroll-mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mb-16 md:mb-24"
          >
            <h2 className="font-fraunces text-3xl md:text-4xl font-bold tracking-tight text-gunmetal">
              Things I&apos;ve shipped
            </h2>
            <div className="w-10 h-0.5 bg-sky-surge/60 mt-4 md:mt-6 rounded-full" />
          </motion.div>

          <div className="flex flex-col gap-24 md:gap-32">
            {my_works.map((project, idx) => (
              <div key={idx} className="flex flex-col gap-8 md:gap-12">
                {/* Project Image (Stacked Top) */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="relative rounded-xl overflow-hidden border border-khaki-beige/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] bg-white/50 backdrop-blur-sm"
                >
                  {/* Minimalist Browser Chrome */}
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
                </motion.div>

                {/* Project Details (Stacked Bottom, Split Columns) */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start px-2"
                >
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
                      <h3 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-tight font-bold font-fraunces text-gunmetal truncate">
                        {project.title}
                      </h3>
                    </div>
                  </div>

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
                              transition={{ duration: 0.3, ease: "anticipate" }}
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
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-24 lg:mt-32 flex justify-center">
            <Link href="/projects">
              <RippleButton text="View All Projects" />
            </Link>
          </div>
        </section>
        <section className="mb-20 md:mb-30 flex justify-center items-center overflow-hidden">
          <div className="w-full overflow-hidden flex justify-center text-center">
            <VariableFontCursorProximity
              label="MUNACHI"
              fontSize="clamp(60px, 12vw, 140px)"
              fromWeight={300}
              toWeight={900}
              color="#222B38"
              strength={50}
            />
          </div>
        </section>
        <ContactSection />
      </main>
    </ReactLenis>
  );
}
