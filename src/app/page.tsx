import { Suspense } from "react";
import dynamic from "next/dynamic";
import { SITE_URL } from "@/lib/constants";

const Hero = dynamic(() => import("@/components/Hero"));
const Experience = dynamic(() => import("@/components/Experience"));
const Education = dynamic(() => import("@/components/Education"));
const Skills = dynamic(() => import("@/components/Skills"));
const ProjectsCompact = dynamic(() => import("@/components/ProjectsCompact"));
const Personal = dynamic(() => import("@/components/Personal"));
const Contact = dynamic(() => import("@/components/Contact"));
const CalEmbed = dynamic(() => import("@/components/CalEmbed"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Div Agarwal",
    url: SITE_URL,
    sameAs: [
      "https://www.linkedin.com/in/div2201/",
      "https://github.com/divyansh7877",
    ],
    jobTitle: "Full Stack Engineer",
    worksFor: {
      "@type": "Organization",
      name: "AdsGency AI",
    },
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Narrow reading-column wrapper */}
      <div className="mx-auto max-w-2xl">
        <Suspense>
          <Hero />
        </Suspense>

        <hr className="mx-4 border-[color:var(--border)] sm:mx-6" />

        <Suspense>
          <Experience />
        </Suspense>

        <hr className="mx-4 border-[color:var(--border)] sm:mx-6" />

        <Suspense>
          <Education />
        </Suspense>

        <hr className="mx-4 border-[color:var(--border)] sm:mx-6" />

        <Suspense>
          <Skills />
        </Suspense>

        <hr className="mx-4 border-[color:var(--border)] sm:mx-6" />

        <Suspense>
          <ProjectsCompact />
        </Suspense>

        <hr className="mx-4 border-[color:var(--border)] sm:mx-6" />

        <Suspense>
          <Personal />
        </Suspense>

        <hr className="mx-4 border-[color:var(--border)] sm:mx-6" />

        <Suspense>
          <Contact />
        </Suspense>

        <hr className="mx-4 border-[color:var(--border)] sm:mx-6" />

        <Suspense>
          <CalEmbed />
        </Suspense>

        <Suspense>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
