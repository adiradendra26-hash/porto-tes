import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="w-full flex-1">
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
