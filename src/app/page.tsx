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
    <main className="relative z-10 w-full min-h-screen bg-transparent flex flex-col items-center overflow-hidden">

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
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-[50vh] left-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none z-0" />


      {/* ── Bounded Pipeline Container ── */}
      {/* 
        This relative container strictly bounds the absolute CentralPipeline. 
        It starts at Hero and exactly terminates at the bottom of Contact. 
      */}
      <div className="relative w-full z-10">
        {/* Pipeline Background (z-0) — lowest layer */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none opacity-30 md:opacity-100">
          <CentralPipelineBackground />
        </div>

        {/* Pipeline Trace + Packets (z-[1]) — behind content, visible in gaps */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-[1] pointer-events-none opacity-50 md:opacity-100">
          <CentralPipelineTrace />
        </div>

        {/* All content sections (z-[2]) — sit ABOVE the pipeline */}
        <div className="relative z-[2]">
          <Hero />
          <Education />
          <Skills />
          <Projects />
          <Certifications />
          <Extracurricular />
          <Contact />
        </div>
      </div>

      {/* Footer is completely outside the pipeline bounding container */}
      <div className="relative w-full z-20">
        <Footer />
      </div>
    </main>
  );
}