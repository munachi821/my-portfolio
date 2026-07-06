"use client";
import Image from "next/image";
import myPhoto from "@/assets/3ASUd1xl_400x400.jpg";
import { WordRotate } from "@/components/uilayouts/word-rotate";
import { ArrowDown, ArrowRightUp } from "reicon-react";
import { RippleButton } from "@/components/uilayouts/ripple-button";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="pt-20">
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
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
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
    </main>
  );
}
