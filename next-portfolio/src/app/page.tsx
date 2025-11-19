import Hero from "@/components/Hero";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Personal from "@/components/Personal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black pointer-events-none z-0" />
      <BackgroundAnimation />

      <div className="relative z-10">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Personal />
        <Footer />
      </div>
    </main>
  );
}
