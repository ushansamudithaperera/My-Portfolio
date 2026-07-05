import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Spotlight from "@/components/Spotlight";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Extracurricular from "@/components/Extracurricular";
import { CentralPipeline } from "@/components/Pipeline";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-slate-950 overflow-hidden">
      <CentralPipeline />
      <Navbar />
      <Spotlight />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Extracurricular />
      <Contact />
      <Footer />
    </main>
  );
}