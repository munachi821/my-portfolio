import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const googleSans = localFont({
  src: "./fonts/GoogleSans.ttf",
  variable: "--font-google-sans",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

import CustomCursor from "@/components/uilayouts/custom-cursor";

export const metadata: Metadata = {
  title: "Munachi Onyebuchi | Frontend Developer",
  description:
    "Frontend Developer | Building modern and scalable web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${googleSans.variable} ${fraunces.variable} antialiased min-h-full flex flex-col max-w-5xl mx-auto px-5 md:px-8 lg:px-0 bg-soft-linen text-gunmetal relative overflow-x-hidden selection:bg-sky-surge/30 cursor-none`}
      >
        <div className="block">
          <CustomCursor />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
