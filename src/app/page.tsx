import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Spotlight from "@/components/Spotlight";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen w-full overflow-hidden">
      <Spotlight />
      <Hero />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}