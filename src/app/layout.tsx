import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-300 antialiased overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}