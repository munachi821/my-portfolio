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
    <html
      lang="en"
      className={`${googleSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-5xl mx-auto bg-soft-linen relative cursor-none">
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
