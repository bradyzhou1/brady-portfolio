import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
});


export const metadata: Metadata = {
  title: {
    default: "Brady Zhou",
    template: "%s | Brady Zhou",
  },
  description:
    "Student researcher and builder using computer science to understand human differences and create tools for families.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className={`${geist.variable} ${newsreader.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}