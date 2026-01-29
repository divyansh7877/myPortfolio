import { Suspense } from "react";
import dynamic from "next/dynamic";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import {
  HeroSkeleton,
  SectionSkeleton,
  SkillsSkeleton,
  ProjectCardSkeleton,
} from "@/components/Skeleton";

// Dynamic imports with loading skeletons
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <HeroSkeleton />,
});

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <SectionSkeleton />,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <SkillsSkeleton />,
});

const Education = dynamic(() => import("@/components/Education"), {
  loading: () => (
    <div className="py-20 px-4 bg-[var(--surface)]">
      <SectionSkeleton />
    </div>
  ),
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="h-10 w-40 bg-[var(--code-bg)] rounded-lg animate-pulse" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </section>
  ),
});

const Hackathons = dynamic(() => import("@/components/Hackathons"), {
  loading: () => <SectionSkeleton />,
});

const Personal = dynamic(() => import("@/components/Personal"), {
  loading: () => (
    <div className="py-20 px-4 bg-[var(--surface)]">
      <SectionSkeleton />
    </div>
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <section className="py-24 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="h-32 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
        <div className="space-y-4">
          <div className="h-12 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
          <div className="grid grid-cols-2 gap-4">
            <div className="h-12 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
            <div className="h-12 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
          </div>
          <div className="h-32 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
          <div className="h-12 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
        </div>
      </div>
    </section>
  ),
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => (
    <footer className="py-12 border-t border-[color:var(--border)] bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
        <div className="h-8 w-48 bg-[var(--code-bg)] rounded animate-pulse" />
        <div className="flex gap-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-10 w-24 bg-[var(--code-bg)] rounded-full animate-pulse"
            />
          ))}
        </div>
      </div>
    </footer>
  ),
});

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Div Agarwal",
    url: "https://divyansh7877.github.io/myPortfolio",
    sameAs: [
      "https://www.linkedin.com/in/div2201/",
      "https://github.com/divyansh7877",
    ],
    jobTitle: "Computer Science Graduate",
    worksFor: {
      "@type": "Organization",
      name: "NYU",
    },
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[color:var(--accent-soft)] via-[color:var(--background)] to-[color:var(--background)] pointer-events-none z-0" />
      <BackgroundAnimation />

      <div className="relative z-10">
        <Suspense fallback={<HeroSkeleton />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SkillsSkeleton />}>
          <Skills />
        </Suspense>

        <Suspense
          fallback={
            <div className="py-20 px-4 bg-[var(--surface)]">
              <SectionSkeleton />
            </div>
          }
        >
          <Education />
        </Suspense>

        <Suspense
          fallback={
            <section className="py-20 px-4">
              <div className="max-w-6xl mx-auto space-y-8">
                <div className="h-10 w-40 bg-[var(--code-bg)] rounded-lg animate-pulse" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <ProjectCardSkeleton key={i} />
                  ))}
                </div>
              </div>
            </section>
          }
        >
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionSkeleton />}>
          <Hackathons />
        </Suspense>

        <Suspense
          fallback={
            <div className="py-20 px-4 bg-[var(--surface)]">
              <SectionSkeleton />
            </div>
          }
        >
          <Personal />
        </Suspense>

        <Suspense
          fallback={
            <section className="py-24 px-4">
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="h-32 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
                <div className="space-y-4">
                  <div className="h-12 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-12 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
                    <div className="h-12 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
                  </div>
                  <div className="h-32 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
                  <div className="h-12 w-full bg-[var(--code-bg)] rounded-xl animate-pulse" />
                </div>
              </div>
            </section>
          }
        >
          <Contact />
        </Suspense>

        <Suspense
          fallback={
            <footer className="py-12 border-t border-[color:var(--border)] bg-[var(--surface)]">
              <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
                <div className="h-8 w-48 bg-[var(--code-bg)] rounded animate-pulse" />
                <div className="flex gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-24 bg-[var(--code-bg)] rounded-full animate-pulse"
                    />
                  ))}
                </div>
              </div>
            </footer>
          }
        >
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}
