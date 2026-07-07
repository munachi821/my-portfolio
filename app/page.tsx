"use client";
import Image from "next/image";
import myPhoto from "@/assets/3ASUd1xl_400x400.jpg";
import { WordRotate } from "@/components/uilayouts/word-rotate";
import { ArrowDown, ArrowRight } from "reicon-react";
import { RippleButton } from "@/components/uilayouts/ripple-button";
import Link from "next/link";
import { motion } from "motion/react";
import ReactLenis from "lenis/react";
import TechStack from "@/components/uilayouts/techstack";
import { Lens } from "@/components/uilayouts/lens";
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
} from "@/components/svg";

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
      <main className="pt-15">
        <section>
          <div>
            {/* my image */}
            <div className="border border-red w-60 h-60 rounded-4xl overflow-hidden bg-black">
              {/* <Image src={myPhoto} alt="Munachi" /> */}
            </div>

            <div className="mt-10 font-google_sans">
              <h1 className="text-4xl font-bold">
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
              <p className="text-lg text-khaki-beige mt-3 max-w-md">
                I build fast, clean interfaces for SaaS and fintech products —
                crafted with care, shipped with confidence.
              </p>
            </div>

            <div className="mt-8 font-google_sans flex items-center gap-4">
              <RippleButton />
              <motion.div whileHover="hover" initial="initial" className="ml-4">
                <Link
                  href={"#"}
                  className="group flex items-center gap-2 text-xl font-medium  hover:text-gunmetal! transition-colors duration-300"
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
            </div>
          </div>
        </section>
        <section className="py-40">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Left Column: Sticky Anchor */}
            <div className="md:col-span-4">
              <div className="sticky top-32">
                <h2 className="font-fraunces text-4xl font-bold tracking-tight text-gunmetal">
                  About Me
                </h2>
                <div className="w-10 h-0.5 bg-sky-surge/60 mt-6 rounded-full" />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="md:col-span-8 flex flex-col">
              <div className="max-w-2xl flex flex-col gap-8 text-lg text-gunmetal/80 font-google_sans leading-[1.8]">
                <p>
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
                </p>

                <p>
                  I&apos;m{" "}
                  <span className="text-gunmetal font-medium">
                    Munachi Onyebuchi
                  </span>
                  , a frontend developer with 2+ years of experience, studying
                  Computer Science at ESUT, based in Enugu.
                </p>

                <p>
                  I have a low tolerance for bad UX — a slow page, a confusing
                  flow, a button that doesn&apos;t respond right — and that
                  impatience is exactly why I care so much about the details
                  most people skip: hover states, spacing, load times, the small
                  stuff that separates &quot;it works&quot; from &quot;it feels
                  considered.&quot;
                </p>

                <p>
                  Outside of client work, you&apos;ll usually find me in the
                  middle of a hackathon, arguing about a color palette, or
                  rebuilding something I already finished because I found a
                  better way to do it.
                </p>
              </div>

              {/* Marquee Footer */}
              <div className="mt-16 pt-12 border-t border-khaki-beige/30">
                <p className="text-[13px] font-bold text-khaki-beige mb-6 tracking-[0.2em] uppercase">
                  The Toolkit
                </p>
                <TechStack />
              </div>
            </div>
          </div>
        </section>
        <section className="pb-40">
          <div className="mb-24">
            <h2 className="font-fraunces text-4xl font-bold tracking-tight text-gunmetal">
              Things I&apos;ve shipped
            </h2>
            <div className="w-10 h-0.5 bg-sky-surge/60 mt-6 rounded-full" />
          </div>

          <div className="flex flex-col gap-32">
            {my_works.map((project, idx) => (
              <div key={idx} className="flex flex-col gap-12">
                {/* Project Image (Stacked Top) */}
                <div className="relative rounded-xl overflow-hidden border border-khaki-beige/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] bg-white/50 backdrop-blur-sm">
                  {/* Minimalist Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-4 border-b border-khaki-beige/20 bg-soft-linen/30">
                    <div className="w-2.5 h-2.5 rounded-full bg-gunmetal/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gunmetal/15" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gunmetal/15" />
                  </div>

                  <div className="p-1 bg-soft-linen/10">
                    <Lens zoomFactor={1.4} lensSize={150}>
                      <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-auto object-cover rounded-lg border border-khaki-beige/10"
                      />
                    </Lens>
                  </div>
                </div>

                {/* Project Details (Stacked Bottom, Split Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start px-2">
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
                      <h3 className="text-4xl lg:text-[2.75rem] leading-tight font-bold font-fraunces text-gunmetal truncate">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="md:col-span-7 lg:col-span-7 flex flex-col font-google_sans pt-1 min-w-0">
                    <p className="text-lg text-gunmetal/80 leading-[1.8] mb-8 max-w-2xl">
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
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 lg:mt-32 flex justify-center">
            <Link href="#">
              <RippleButton text="View All Projects" />
            </Link>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}
