import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar eka import karanawa

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ushan Perera | Portfolio",
  description: "Portfolio of Ushan Perera - Full-Stack Developer & DevOps Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // scroll-smooth dapu nisa links click karama lassanata pallehata yai
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-300 antialiased overflow-x-hidden`}>
        <Navbar /> {/* Navbar eka body eke udinma danawa */}
        {children}
      </body>
    </html>
  );
}