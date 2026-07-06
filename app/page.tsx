"use client";
import Image from "next/image";
import myPhoto from "@/assets/3ASUd1xl_400x400.jpg";
import { WordRotate } from "@/components/uilayouts/word-rotate";
import { ArrowDown } from "reicon-react";
import { RippleButton } from "@/components/uilayouts/ripple-button";
import Link from "next/link";
import { motion } from "motion/react";
import ReactLenis from "lenis/react";
import TechStack from "@/components/uilayouts/techstack";
import campusPadi_logo from "@/assets/campuspadi_logo.png";

export default function Home() {
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
                <div className="w-10 h-[2px] bg-sky-surge/60 mt-6 rounded-full" />
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
                  I have a low tolerance for bad UX — a slow page, a confusing flow,
                  a button that doesn&apos;t respond right — and that impatience is
                  exactly why I care so much about the details most people skip:
                  hover states, spacing, load times, the small stuff that separates
                  &quot;it works&quot; from &quot;it feels considered.&quot;
                </p>

                <p>
                  Outside of client work, you&apos;ll usually find me in the middle
                  of a hackathon, arguing about a color palette, or rebuilding
                  something I already finished because I found a better way to do
                  it.
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
      </main>
    </ReactLenis>
  );
}
