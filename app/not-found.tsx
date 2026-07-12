"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "reicon-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-6"
      >
        <p className="text-[13px] font-bold text-khaki-beige tracking-[0.2em] uppercase">
          Page not found
        </p>
        <h1 className="font-fraunces text-6xl md:text-8xl font-bold tracking-tight text-gunmetal">
          404
        </h1>
        <p className="text-base md:text-lg text-gunmetal/60 font-google_sans max-w-md leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="group mt-4 inline-flex items-center gap-2 px-6 py-3 bg-gunmetal text-soft-linen rounded-full font-google_sans font-medium text-sm hover:bg-sky-surge transition-colors duration-300"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          Back to home
        </Link>
      </motion.div>
    </main>
  );
}
