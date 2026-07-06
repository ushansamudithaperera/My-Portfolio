import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Spotlight from "@/components/Spotlight";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Extracurricular from "@/components/Extracurricular";
import { CentralPipelineBackground, CentralPipelineTrace } from "@/components/Pipeline";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">

      {/* ── Global Background Layers ── */}
      {/* Subtle glowing grid effect covering the entire site */}
      <div
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,255,170,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,170,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      {/* Global radial glowing blur orbs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-[50vh] left-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

      <Spotlight />

      {/* ── Bounded Pipeline Container ── */}
      {/* 
        This relative container strictly bounds the absolute CentralPipeline. 
        It starts at Hero and exactly terminates at the bottom of Contact. 
      */}
      <div className="relative w-full z-10">
        {/* Global Pipeline Background (z-0) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-0">
          <CentralPipelineBackground />
        </div>

        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Extracurricular />
        <Contact />

        {/* Global Pipeline Trace (z-20) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <CentralPipelineTrace />
        </div>
      </div>

      {/* Footer is completely outside the pipeline bounding container */}
      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
}