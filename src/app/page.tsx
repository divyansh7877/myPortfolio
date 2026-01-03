import Hero from "@/components/Hero";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hackathons from "@/components/Hackathons";

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Divyansh Agarwal',
    url: 'https://divyansh7877.github.io/myPortfolio',
    sameAs: [
      'https://www.linkedin.com/in/div2201/',
      'https://github.com/divyansh7877',
    ],
    jobTitle: 'Computer Science Graduate',
    worksFor: {
      '@type': 'Organization',
      name: 'NYU',
    },
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[color:var(--accent-soft)] via-[color:var(--background)] to-[color:var(--background)] pointer-events-none z-0" />
      <BackgroundAnimation />

      <div className="relative z-10">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Hackathons />
        <Personal />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
