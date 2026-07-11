"use client";
import Image from "next/image";
import myPhoto from "@/assets/3ASUd1xl_400x400.jpg";
import { WordRotate } from "@/components/uilayouts/word-rotate";
import { ArrowDown, ArrowRight } from "reicon-react";
import { RippleButton } from "@/components/uilayouts/ripple-button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import ReactLenis from "lenis/react";
import TechStack from "@/components/uilayouts/techstack";
import campusPadi_logo from "@/assets/campuspadi_logo.png";
import campuspadi_screenshot from "@/assets/campuspadi-dashboard-screenshot.png";
import agrotrack_screenshot from "@/assets/agrotrack-landingpage-screenshot.png";
import busierdesk_screenshot from "@/assets/busierdesk-landingpage-screenshot.png";
import unsaid_screenshot from "@/assets/unsaid-landingpag-screenshot.png";
import tabletap_screenshot from "@/assets/tabletap-order-screenshot.png";
import agrotrack_logo from "@/assets/agrotrack_logo.png";
import busierdesk_logo from "@/assets/busierdesk_logo.png";
import unsaid_logo from "@/assets/theunsaid_logo.png";
import {
  ReactIcon,
  TailwindCssIcon,
  TypescriptIcon,
  NextJsIcon,
  SupabaseIcon,
  GithubIcon,
  TiktokIcon,
  XIcon,
  LinkedinIcon,
} from "@/components/svg";
import VariableFontCursorProximity from "@/components/uilayouts/text-weight";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("munaonye4@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center gap-2 md:gap-3 px-5 md:px-8 py-3 md:py-4 bg-soft-linen text-gunmetal font-bold font-google_sans text-[11px] md:text-[13px] tracking-[0.15em] uppercase rounded-full overflow-hidden group shadow-lg"
    >
      <span className="relative z-10 flex items-center gap-3 transition-all duration-300">
        {copied ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-sky-surge"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Email Copied!
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Copy Email
          </>
        )}
      </span>
      {/* Sleek hover fill */}
      <div className="absolute inset-0 bg-sky-surge/20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
    </motion.button>
  );
}

export default function Home() {
  const my_works = [
    {
      title: "Campuspadi",
      meta: "Co-Founder · Fintech · Edutech",
      description:
        "Started as a way to fix a real problem at ESUT — messy class fee collection and no easy way to track CGPA. CampusPadi now handles both, plus a study layer, and has been live for over a year.",
      image: campuspadi_screenshot,
      logo: campusPadi_logo,
      icons: [ReactIcon, TailwindCssIcon, TypescriptIcon],
      link: "#",
    },
    {
      title: "Agrotrack",
      meta: "Frontend · Agritech · Hardware",
      description:
        "A smart agritech platform that reduces conflicts between farmers and herders — using geofencing to define grazing zones and alert farmers the moment animals enter their farmland.",
      image: agrotrack_screenshot,
      logo: agrotrack_logo,
      icons: [NextJsIcon, TailwindCssIcon, TypescriptIcon],
      link: "#",
    },
    {
      title: "BusierDesk",
      meta: "Fullstack · AI Voice · Automation",
      description:
        "An autonomous AI voice and messaging agent engineered with Vapi and Twilio to capture leads on autopilot. I pitched this live at the Enyata x Interswitch Buildathon Demo Day.",
      image: busierdesk_screenshot,
      logo: busierdesk_logo,
      icons: [NextJsIcon, TailwindCssIcon],
      link: "#",
    },
    {
      title: "Table-Tap",
      meta: "Fullstack · SaaS · B2B",
      description:
        "A multi-tenant restaurant ordering and Kitchen Display System built on Supabase. One unified codebase reliably serves isolated environments for multiple restaurants.",
      image: tabletap_screenshot,
      icons: [NextJsIcon, SupabaseIcon, TailwindCssIcon],
      link: "#",
    },
    {
      title: "Unsaid",
      meta: "Fullstack · Social · Anonymity",
      description:
        "An anonymous social platform where users can securely share their unspoken thoughts. Engineered to handle both text and image-based confessions in a completely untraceable, minimalist environment.",
      image: unsaid_screenshot,
      logo: unsaid_logo,
      icons: [NextJsIcon, SupabaseIcon, TailwindCssIcon],
      link: "#",
    },
  ];
  return (
    <ReactLenis root>
      <main className="pt-10 md:pt-15">
        <section id="home">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
          >
            {/* my image */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="border border-red w-40 h-40 md:w-60 md:h-60 rounded-4xl overflow-hidden bg-black"
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
              className="mt-8 font-google_sans flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-4"
            >
              <Link href={"Mailto:munaonye4@gmail.com"}>
                <RippleButton />
              </Link>
              <motion.div
                whileHover="hover"
                initial="initial"
                className="sm:ml-4"
              >
                <Link
                  href={"#projects"}
                  className="ml-2 sm:ml-0 group flex items-center gap-2 text-lg sm:text-xl font-medium hover:text-gunmetal! transition-colors duration-300"
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
        <section className="py-20 md:py-40">
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

          <div className="flex flex-col gap-20 md:gap-32">
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
            <Link href="#">
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
        <motion.section
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="my-10 md:my-20 scroll-mt-24 bg-gunmetal rounded-3xl overflow-hidden p-6 md:p-10 flex flex-col justify-between shadow-2xl"
        >
          <div>
            {/* Eyebrow */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="text-xs md:text-[13px] font-bold text-khaki-beige tracking-[0.2em] uppercase"
            >
              LET&apos;S TALK
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="mt-4 md:mt-6 font-fraunces text-3xl md:text-5xl font-bold tracking-tight text-soft-linen"
            >
              Let&apos;s build something.
            </motion.h2>
            <motion.div
              variants={{
                hidden: { opacity: 0, scaleX: 0 },
                visible: {
                  opacity: 1,
                  scaleX: 1,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="w-10 h-0.5 bg-sky-surge mt-4 md:mt-6 rounded-full origin-left"
            />

            {/* Body */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="mt-6 md:mt-8 text-base md:text-lg text-soft-linen/80 font-google_sans leading-[1.8] max-w-lg"
            >
              I&apos;m currently open to frontend work — SaaS, fintech, edutech,
              or anything that needs real attention to detail.{" "}
              <br className="hidden md:block" />
              If that&apos;s you, reach out.
            </motion.p>

            {/* Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              className="mt-12 w-fit"
            >
              <CopyEmailButton />
            </motion.div>
          </div>

          {/* Footer / Divider */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-16 md:mt-24 pt-6 md:pt-8 border-t border-khaki-beige/20 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left"
          >
            <div className="text-soft-linen/50 text-xs md:text-sm font-google_sans">
              © {new Date().getFullYear()} Munachi Onyebuchi.
            </div>
            <div className="flex items-center gap-6 text-white! font-google_sans text-sm font-medium">
              <Link
                href="https://ng.linkedin.com/in/munachi-onyebuchi-90b6a12a8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white! hover:text-sky-surge/80! flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="size-5 fill-current" />
              </Link>
              <Link
                href="https://x.com/dev_munachi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white! hover:text-sky-surge/80! flex items-center justify-center"
                aria-label="X (Twitter)"
              >
                <XIcon className="size-5 fill-current" />
              </Link>
              <Link
                href="https://github.com/munachi821"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white! hover:text-sky-surge/80! flex items-center justify-center"
                aria-label="GitHub"
              >
                <GithubIcon className="size-5 fill-current" />
              </Link>
              <Link
                href="https://www.tiktok.com/@dev_muna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white! hover:text-sky-surge/80! flex items-center justify-center"
                aria-label="TikTok"
              >
                <TiktokIcon className="size-5 fill-current" />
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </ReactLenis>
  );
}
