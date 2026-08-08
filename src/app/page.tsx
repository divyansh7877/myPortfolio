import { SITE_URL } from "@/lib/constants";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectsCompact from "@/components/ProjectsCompact";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Personal from "@/components/Personal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Div Agarwal",
    url: SITE_URL,
    sameAs: ["https://www.linkedin.com/in/div2201/", "https://github.com/divyansh7877"],
    jobTitle: "AI/ML Engineer",
  };

  return (
    <main className="site-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Experience />
      <ProjectsCompact />
      <Skills />
      <Education />
      <Personal />
      <Contact />
      <Footer />
    </main>
  );
}
