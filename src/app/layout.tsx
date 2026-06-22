import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ushan Perera | DevOps & Software Engineering Portfolio',
  description: 'Personal portfolio of Ushan Perera, showcasing projects and expertise in Full-Stack Development, DevOps, Site Reliability Engineering (SRE), and AI/ML integrations.',
  keywords: ['Ushan Perera', 'Software Engineer', 'DevOps', 'SRE', 'AI/ML', 'Full-Stack Developer', 'Next.js', 'React', 'Portfolio', 'Sri Lanka'],
  openGraph: {
    type: 'website',
    url: 'https://ushansamudithaperera.vercel.app/',
    title: 'Ushan Perera | DevOps & Software Engineering Portfolio',
    description: 'Personal portfolio of Ushan Perera, showcasing projects and expertise in modern web applications and automated software systems.',
    siteName: 'Ushan Perera Portfolio',
  },
  verification: {
    google: 'JiV8qPRlFOMoU1HxkGBZusM785Z5-VT8bTncYiaIAH8',
  },
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