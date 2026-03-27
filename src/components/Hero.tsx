import { Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";
import { BASE_PATH } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-24 pt-28 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl space-y-10">

        {/* Heading */}
        <div className="space-y-3">
          <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
            AI / ML Engineer
          </p>
          <h1 className="font-display text-5xl font-bold tracking-tight text-[color:var(--text)] text-balance md:text-6xl">
            Div Agarwal
          </h1>
          <p className="text-lg text-[color:var(--text-secondary)] leading-relaxed max-w-2xl text-pretty">
            Building intelligent systems at the intersection of research and product.
            NYU CS &middot; Full-stack execution.
          </p>
        </div>

        {/* Terminal block */}
        <div className="rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] overflow-hidden">
          <div className="flex items-center gap-2 border-b border-[color:var(--border)] bg-[color:var(--surface-strong)] px-4 py-2.5">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-1 font-mono text-xs text-[color:var(--text-secondary)]">
              guest@div:~/summary
            </span>
            <Terminal className="ml-auto h-3.5 w-3.5 text-[color:var(--text-secondary)]" aria-hidden="true" />
          </div>
          <div className="p-5 font-mono text-sm leading-relaxed text-[color:var(--text-secondary)] space-y-3">
            <p>
              <span className="text-[color:var(--accent)]">$</span>{" "}
              <span className="text-[color:var(--text)]">cat summary.txt</span>
            </p>
            <p>
              Hi, I&apos;m Div. I build AI systems that have to survive both product
              constraints and real-world data: retrieval pipelines, full-stack interfaces,
              and applied ML workflows that move from prototype to production.
            </p>
            <p>
              Right now: AI-assisted querying and ad generation at AdsGency AI.
              Previously: neural event detection research and browser-based neuroimaging
              tooling at NYU.
            </p>
            <span className="inline-block text-[color:var(--accent)]" aria-hidden="true">▋</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-[color:var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent-hover)]"
          >
            View Projects
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-[color:var(--border)] px-5 py-2.5 text-sm font-medium text-[color:var(--text)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Contact
          </a>
          <Link
            href={`${BASE_PATH}/blog`}
            className="inline-flex items-center rounded-md border border-[color:var(--border)] px-5 py-2.5 text-sm font-medium text-[color:var(--text)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            Blog
          </Link>
        </div>

        {/* Status pill */}
        <div className="flex items-start gap-3 rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-3">
          <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent-alt)]" aria-hidden="true" />
          <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed text-pretty">
            <span className="font-medium text-[color:var(--text)]">Currently:</span>{" "}
            Building AI-assisted data querying at AdsGency AI. Previously:
            neural event detection research and analysis tooling at NYU Neuroinformatics Lab.
          </p>
        </div>

      </div>
    </section>
  );
}
