"use client";

import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const featuredProjects = [
  {
    title: "Neuro Window Explorer",
    description:
      "Browser-based calcium trace analysis tool built at NYU Neuroinformatics Lab. Surrounding research workflow reached 0.92 F1 event-detection score.",
    tags: ["Next.js", "TypeScript", "Python", "ML"],
    links: {
      github: "https://github.com/divyansh7877/neuro-window-explorer",
      demo: "https://neuro-window-explorer.vercel.app/",
    },
  },
  {
    title: "Expert-Call RAG Assistant",
    description:
      "Local RAG stack with Llama 3.1, LlamaIndex, and LanceDB for source-grounded answers over expert-call transcript archives.",
    tags: ["Python", "Gradio", "LanceDB", "LlamaIndex"],
    links: {
      github: "https://github.com/divyansh7877/RAG-LLM-TC2",
    },
  },
  {
    title: "Cloud-Native Social Media Automation",
    description:
      "Serverless AWS pipeline connecting image retrieval, Rekognition analysis, Claude captioning, and OpenSearch into one automated publishing flow.",
    tags: ["AWS Lambda", "Bedrock", "OpenSearch", "Python"],
    links: {},
  },
  {
    title: "Collections Strategy Management System",
    description:
      "Full-stack AI product for debt collections: FastAPI + React + OpenAI, Excel/PDF ingestion, and AI-generated multi-step strategy timelines.",
    tags: ["Python", "FastAPI", "React", "OpenAI API"],
    links: {
      github: "https://github.com/divyansh7877/debt-collector",
    },
  },
];

const otherExperiments = [
  "Concurrent Multi-User RAG System",
  "Fine-Tuning Llama 3.1-8B (LoRA, 0.85 accuracy)",
  "Scalable Vector Search Music Recommendations (Spotify dataset)",
  "Trade Statistics Visualization (OECD, Streamlit)",
  "ERC-721 NFT Smart Contract (Solidity, IPFS)",
  "GPT-4 Pokémon Showdown Agent",
];

export default function ProjectsCompact() {
  return (
    <section id="projects" className="px-4 py-8 sm:px-6">
      <div className="max-w-2xl">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[color:var(--accent)]">
            Projects
          </h2>
          <Link
            href="/projects"
            className="text-xs text-[color:var(--accent)] hover:underline"
          >
            All projects with detail &rarr;
          </Link>
        </div>

        <ul className="space-y-5">
          {featuredProjects.map((project) => (
            <li key={project.title}>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="font-medium text-sm text-[color:var(--text)]">
                  {project.title}
                </span>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
                  >
                    <Github className="inline h-3.5 w-3.5" />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className="text-[color:var(--accent)] hover:text-[color:var(--accent-hover)]"
                  >
                    <ExternalLink className="inline h-3.5 w-3.5" />
                  </a>
                )}
              </div>
              <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed mt-0.5">
                {project.description}
              </p>
              <p className="text-xs text-[color:var(--text-secondary)] mt-1 opacity-70">
                {project.tags.join(", ")}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-[color:var(--border)]">
          <p className="text-xs font-medium text-[color:var(--text-secondary)] mb-2 uppercase tracking-wider">
            Other experiments
          </p>
          <p className="text-sm text-[color:var(--text-secondary)] leading-relaxed">
            {otherExperiments.join(" · ")}
          </p>
        </div>
      </div>
    </section>
  );
}
