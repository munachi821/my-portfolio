import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const googleSans = localFont({
  src: "./fonts/GoogleSans.ttf",
  variable: "--font-google-sans",
});

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
    <html lang="en" className={`${googleSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col max-w-5xl mx-auto bg-soft-linen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
