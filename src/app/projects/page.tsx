import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Div Agarwal",
  description: "Full project portfolio: retrieval systems, AI tools, automation pipelines, and full-stack products.",
};

interface ProjectLink {
  github?: string;
  demo?: string;
}

interface Project {
  title: string;
  problem: string;
  approach: string;
  result: string;
  standout: string;
  tags: string[];
  links: ProjectLink;
}

interface Experiment {
  title: string;
  note: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Neuro Window Explorer",
    problem:
      "Neuroscience teams need to inspect calcium-trace events quickly without forcing every experiment through a slow desktop workflow.",
    approach:
      "Browser-based analysis interface in Next.js and TypeScript that makes neural traces explorable, shareable, and easy to pair with downstream event-detection research.",
    result:
      "The surrounding research workflow reached a 0.92 F1 event-detection score. Ships as a live demo for interactive inspection instead of static plots.",
    standout:
      "Combines research credibility with product execution: live UI, domain-specific data exploration, and measurable modeling impact.",
    tags: ["Next.js", "TypeScript", "Python", "ML", "Research Tooling"],
    links: {
      github: "https://github.com/divyansh7877/neuro-window-explorer",
      demo: "https://neuro-window-explorer.vercel.app/",
    },
  },
  {
    title: "Expert-Call RAG Assistant",
    problem:
      "Long expert-call transcript archives are difficult to search, summarize, and cite reliably when every answer has to stay grounded in source material.",
    approach:
      "Local RAG stack with Llama 3.1, LlamaIndex, LanceDB, and a Gradio interface — retrieval, inference, and source citation all stay modular and replaceable.",
    result:
      "Runs fully locally, returns source-grounded answers over transcript collections. Documents roughly 1–2 minute response times on local hardware.",
    standout:
      "Shows applied retrieval depth rather than just prompting: local inference, modular retrieval design, and explicit source grounding.",
    tags: ["Python", "Gradio", "LanceDB", "LlamaIndex", "Llama 3.1"],
    links: {
      github: "https://github.com/divyansh7877/RAG-LLM-TC2",
    },
  },
  {
    title: "Cloud-Native Social Media Automation",
    problem:
      "Content publishing breaks down when image selection, captioning, search, and posting still require manual handoffs across tools.",
    approach:
      "Serverless AWS pipeline connecting image retrieval, Rekognition analysis, Claude-based captioning, OpenSearch indexing, and publishing logic into one automated flow.",
    result:
      "Automates a 5-stage content pipeline end to end, reducing the workflow to one orchestrated system instead of separate manual steps.",
    standout:
      "Strong systems work: event-driven architecture, model orchestration, and production-minded automation instead of a single model demo.",
    tags: ["AWS Lambda", "Cognito", "Bedrock", "OpenSearch", "Python"],
    links: {},
  },
  {
    title: "Collections Strategy Management System",
    problem:
      "Collections teams need a usable operating surface for turning messy account data into actionable outreach plans rather than static spreadsheets.",
    approach:
      "Full-stack product with FastAPI, React, SQLite, and the OpenAI API to generate strategies, manage contacts, and organize actions in a timeline-based UI.",
    result:
      "Handles both Excel and PDF imports, then turns data into AI-generated multi-step strategy blocks inside a single workflow interface.",
    standout:
      "Clearest product build in the portfolio: ingestion, reasoning, UI state, and decision support packaged as one cohesive application.",
    tags: ["Python", "FastAPI", "React", "OpenAI API", "SQLite"],
    links: {
      github: "https://github.com/divyansh7877/debt-collector",
    },
  },
];

const experiments: Experiment[] = [
  {
    title: "Concurrent Multi-User RAG System",
    note: "Session-aware RAG architecture that isolates per-user conversational state over a shared corpus, supporting multiple active users without context bleed.",
    tags: ["Python", "RAG", "Concurrency", "Session Isolation"],
  },
  {
    title: "Fine-Tuning Llama 3.1-8B",
    note: "LoRA-based math-verification experiment with 0.85 accuracy from a Kaggle workflow.",
    tags: ["PyTorch", "LoRA", "Transformers", "LLMs"],
  },
  {
    title: "Scalable Vector Search Music Recs",
    note: "Recommendation-system exploration on the Spotify Million Playlist Dataset using Word2Vec and ChromaDB.",
    tags: ["Spark", "MongoDB", "ChromaDB", "Word2Vec"],
  },
  {
    title: "Trade Statistics Visualization",
    note: "Interactive OECD trade analysis with network maps and geospatial views.",
    tags: ["Python", "Streamlit", "Plotly", "NetworkX"],
  },
  {
    title: "ERC-721 NFT Smart Contract",
    note: "Sepolia NFT contract with IPFS-backed metadata, minting limits, and royalty support.",
    tags: ["Solidity", "IPFS", "Ethereum", "Web3"],
  },
  {
    title: "GPT-4 Pokémon Showdown Agent",
    note: "Prompting experiment around context-aware decision making in a competitive game environment.",
    tags: ["Python", "GPT-4", "Game AI"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-4 py-24 pt-28 sm:px-6">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] transition-colors mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <header className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)] mb-2">
            Portfolio
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[color:var(--text)] md:text-4xl mb-3">
            Projects
          </h1>
          <p className="text-[color:var(--text-secondary)] leading-relaxed">
            Work that best represents how I build: research tooling, retrieval systems,
            automation pipelines, and AI products with real interfaces.
          </p>
        </header>

        {/* Featured projects */}
        <div className="space-y-12">
          {projects.map((project, i) => (
            <article key={project.title} className="border-t border-[color:var(--border)] pt-8 first:border-0 first:pt-0">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <h2 className="text-xl font-semibold text-[color:var(--text)]">
                  {project.title}
                </h2>
                <div className="flex items-center gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-3 text-sm text-[color:var(--text-secondary)] leading-relaxed mb-4">
                <p>
                  <span className="font-medium text-[color:var(--text)]">Problem:</span>{" "}
                  {project.problem}
                </p>
                <p>
                  <span className="font-medium text-[color:var(--text)]">Approach:</span>{" "}
                  {project.approach}
                </p>
                <p>
                  <span className="font-medium text-[color:var(--text)]">Result:</span>{" "}
                  {project.result}
                </p>
                <p>
                  <span className="font-medium text-[color:var(--text)]">Why it stands out:</span>{" "}
                  {project.standout}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-[var(--code-bg)] text-[color:var(--text-secondary)] border border-[color:var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Experiments */}
        <div className="mt-16 border-t border-[color:var(--border)] pt-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[color:var(--accent)] mb-6">
            Other Experiments
          </h2>
          <div className="space-y-6">
            {experiments.map((exp) => (
              <div key={exp.title}>
                <p className="font-medium text-sm text-[color:var(--text)] mb-1">{exp.title}</p>
                <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed mb-2">
                  {exp.note}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-[var(--code-bg)] text-[color:var(--text-secondary)] border border-[color:var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
