"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  GithubIcon,
  TiktokIcon,
  XIcon,
  LinkedinIcon,
} from "@/components/svg";

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

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      className="my-10 md:my-20 mb-24 md:mb-28 scroll-mt-24 bg-gunmetal rounded-3xl overflow-hidden p-6 md:p-10 flex flex-col justify-between shadow-2xl"
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
  );
}
