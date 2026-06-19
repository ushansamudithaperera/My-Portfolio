import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer"; 

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen w-full overflow-hidden">
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}