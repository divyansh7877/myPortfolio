import Link from "next/link";
import { BASE_PATH } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="px-4 py-24 pt-28 sm:px-6">
      <div className="w-full max-w-2xl space-y-8">

        {/* Name + tagline */}
        <div className="space-y-2">
          <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
            AI / ML Engineer
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[color:var(--text)] md:text-5xl">
            Div Agarwal
          </h1>
          <p className="text-base text-[color:var(--text-secondary)] leading-relaxed">
            Building AI systems at the intersection of research and product. NYU CS &middot; Full-stack execution.
          </p>
        </div>

        {/* Enhanced summary */}
        <div className="space-y-4 text-[color:var(--text-secondary)] leading-relaxed">
          <p>
            I build AI systems that have to survive both research constraints and production reality: retrieval
            pipelines, ML workflows, and full-stack interfaces that move from prototype to shipped product.
            Currently, I&apos;m working on ML-based risk prediction and data pipelines at{" "}
            <a
              href="https://www.daylit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--accent)] hover:underline"
            >
              Daylit
            </a>
            , and building agentic research systems and LLM-driven agents for financial analysis at{" "}
            <a
              href="https://variantavatars.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--accent)] hover:underline"
            >
              Variant Avatars
            </a>
            .
          </p>
          <p>
            I care about the gap between a model that works in a notebook and a system that holds up when
            real users touch it. Most of my projects live in that gap: multi-agent pipelines for financial reasoning,
            serverless automation workflows, and full-stack products with real interfaces on top of AI.
          </p>
        </div>

        {/* Current status */}
        <p className="text-sm text-[color:var(--text-secondary)]">
          <span className="font-medium text-[color:var(--text)]">Previously:</span>{" "}
          Software Engineer at AdsGency AI (San Francisco). Researcher at NYU Neuroinformatics Lab.
        </p>

        {/* Links */}
        <nav aria-label="Profile links" className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a
            href="https://github.com/divyansh7877"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--accent)] hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/div2201/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[color:var(--accent)] hover:underline"
          >
            LinkedIn
          </a>
          <Link
            href={`${BASE_PATH}/blog`}
            className="text-[color:var(--accent)] hover:underline"
          >
            Blog
          </Link>
          <a
            href="#contact"
            className="text-[color:var(--accent)] hover:underline"
          >
            Contact
          </a>
        </nav>

      </div>
    </section>
  );
}
