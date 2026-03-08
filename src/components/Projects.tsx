"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Github } from "lucide-react";

type Project = {
    title: string;
    category: string;
    summary: string;
    impact: string;
    tags: string[];
    featured?: boolean;
    links: {
        github?: string;
        demo?: string;
    };
};

const projects: Project[] = [
    {
        title: "Neuro Window Explorer",
        category: "Research tooling",
        summary:
            "Browser-based application for exploring and visualizing neural calcium trace data as part of ML-driven neural activity analysis.",
        impact: "Brings research workflows into a fast, shareable interface for inspection and iteration.",
        tags: ["TypeScript", "Next.js", "Python", "Machine Learning"],
        featured: true,
        links: {
            github: "https://github.com/divyansh7877/neuro-window-explorer",
            demo: "https://neuro-window-explorer.vercel.app/",
        },
    },
    {
        title: "Expert-Call RAG Assistant",
        category: "LLM retrieval system",
        summary:
            "Locally run RAG system for querying expert-call transcripts with Llama 3.1-8B and LanceDB-backed retrieval.",
        impact: "Combines retrieval, inference, and transcript search into a practical research workflow.",
        tags: ["Python", "Gradio", "LanceDB", "LlamaIndex", "Llama 3.1"],
        featured: true,
        links: {
            github: "https://github.com/divyansh7877/RAG-LLM-TC2",
        },
    },
    {
        title: "Cloud-Native Social Media Automation",
        category: "Serverless AI automation",
        summary:
            "AWS pipeline that fetches images, analyzes them with Rekognition, generates captions with Claude 3, and posts to social platforms.",
        impact: "Connects vision, content generation, and publishing in one event-driven workflow.",
        tags: ["AWS Lambda", "Cognito", "Bedrock", "OpenSearch", "Python"],
        featured: true,
        links: {},
    },
    {
        title: "Fine-Tuning Llama 3.1-8B",
        category: "Model adaptation",
        summary:
            "Kaggle competition entry for verifying math answers with LoRA adapters, prompt engineering, and hyperparameter tuning.",
        impact: "Reached 0.85 accuracy while iterating on model adaptation and evaluation strategy.",
        tags: ["PyTorch", "LoRA", "Transformers", "LLMs"],
        links: {
            github: "https://github.com/divyansh7877/DeepLearning_Midterm/tree/main",
        },
    },
    {
        title: "Collections Strategy Management System",
        category: "Full-stack AI product",
        summary:
            "Debt collection management system with AI-generated strategies, timeline-based workflows, contact management, and Excel/PDF import support.",
        impact: "Blends LLM-assisted recommendations with operational tooling people can use day to day.",
        tags: ["Python", "FastAPI", "React", "OpenAI API", "SQLite"],
        links: {
            github: "https://github.com/divyansh7877/debt-collector",
        },
    },
    {
        title: "Scalable Vector Search Music Recs",
        category: "Recommendation systems",
        summary:
            "Recommendation system built on the Spotify Million Playlist Dataset using Word2Vec embeddings and ChromaDB similarity search.",
        impact: "Explores large-scale retrieval and embedding-driven recommendations on real playlist data.",
        tags: ["Spark", "MongoDB", "ChromaDB", "Word2Vec"],
        links: {},
    },
    {
        title: "Trade Statistics Visualization",
        category: "Data visualization",
        summary:
            "Interactive OECD trade analysis with network maps and geospatial visualizations built in Streamlit and Plotly.",
        impact: "Turns complex economic data into views that are easier to explore and compare.",
        tags: ["Python", "Streamlit", "Plotly", "NetworkX"],
        links: {
            github: "https://github.com/divyansh7877/OECD-Trade-Statistics",
        },
    },
    {
        title: "ERC-721 NFT Smart Contract",
        category: "Smart contracts",
        summary:
            "NFT smart contract deployed on Sepolia with IPFS-backed storage, minting limits, and royalty enforcement.",
        impact: "Demonstrates end-to-end ownership logic and asset handling on-chain.",
        tags: ["Solidity", "IPFS", "Ethereum", "Web3"],
        links: {
            demo: "https://testnets.opensea.io/assets/sepolia/0xa8b6ff7ddb28b09cb79bb04848d98e5a11089a7c/1",
        },
    },
    {
        title: "GPT-4 Pokémon Showdown Agent",
        category: "Agent experimentation",
        summary:
            "Exploration of GPT-4 decision making in competitive Pokémon battles using context-aware prompting.",
        impact: "Tests how prompt design shapes strategy under uncertainty and adversarial play.",
        tags: ["Python", "GPT-4", "Game AI"],
        links: {},
    },
];

const featuredProjects = projects.filter((project) => project.featured);
const additionalProjects = projects.filter((project) => !project.featured);

export default function Projects() {
    return (
        <section id="projects" className="bg-[var(--surface)] px-4 py-16 sm:px-6 lg:px-8 md:py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-3xl space-y-4">
                    <div className="data-pill">
                        <span className="status-dot" />
                        Selected work across research tooling, LLM systems, automation, and product builds
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-3xl font-bold text-[color:var(--foreground)]"
                    >
                        <Code2 className="text-[color:var(--accent)]" />
                        Projects
                    </motion.h2>
                    <p className="text-base leading-8 text-[color:var(--muted)] md:text-lg">
                        I bias toward projects that make technical depth legible: clear problem framing, pragmatic architecture,
                        and results that are easy for a recruiter or engineer to evaluate quickly.
                    </p>
                </div>

                <div className="mb-10 space-y-4">
                    <div>
                        <p className="section-kicker">Featured builds</p>
                        <p className="mt-2 text-sm leading-7 text-[color:var(--muted)] md:text-base">
                            The strongest examples of research-adjacent product work, local LLM systems, and applied automation.
                        </p>
                    </div>

                    <div className="grid gap-6 xl:grid-cols-3">
                        {featuredProjects.map((project, index) => {
                            const hasLinks = Boolean(project.links.github || project.links.demo);

                            return (
                                <motion.article
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className={`shell-panel surface-grid rounded-[1.75rem] p-1 ${index === 0 ? "xl:col-span-2" : ""}`}
                                >
                                    <div className="flex h-full flex-col rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)] p-6 md:p-7">
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <p className="section-kicker">{project.category}</p>
                                            <span className="rounded-full border border-[color:var(--accent-soft)] bg-[var(--code-bg)] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--accent)]">
                                                Featured
                                            </span>
                                        </div>

                                        <div className="mt-5 space-y-4">
                                            <h3 className="text-2xl font-semibold text-[color:var(--foreground)]">{project.title}</h3>
                                            <p className="text-sm leading-7 text-[color:var(--muted)] md:text-base">{project.summary}</p>
                                            <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--card-bg)] p-4">
                                                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                                    Why it stands out
                                                </p>
                                                <p className="mt-2 leading-7 text-[color:var(--foreground)]">{project.impact}</p>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-[color:var(--border)] bg-[var(--card-bg)] px-3 py-1.5 text-xs font-medium text-[color:var(--foreground)]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {hasLinks && (
                                            <div className="mt-6 flex flex-wrap gap-3 border-t border-[color:var(--border)] pt-5">
                                                {project.links.github && (
                                                    <a
                                                        href={project.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                                                    >
                                                        <Github className="h-4 w-4" />
                                                        View Code
                                                    </a>
                                                )}
                                                {project.links.demo && (
                                                    <a
                                                        href={project.links.demo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        Live Demo
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <p className="section-kicker">Additional builds</p>
                        <p className="mt-2 text-sm leading-7 text-[color:var(--muted)] md:text-base">
                            Other projects that show experimentation across full-stack AI apps, retrieval, data systems, and smart contracts.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {additionalProjects.map((project, index) => {
                            const hasLinks = Boolean(project.links.github || project.links.demo);

                            return (
                                <motion.article
                                    key={project.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.06 }}
                                    className="group rounded-[1.5rem] border border-[color:var(--border)] bg-[var(--card-bg)] p-6 shadow-[0_20px_70px_-50px_var(--shadow-accent)] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--accent)]"
                                >
                                    <div className="flex h-full flex-col">
                                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--accent)]">
                                            {project.category}
                                        </p>
                                        <h3 className="mt-3 text-xl font-semibold text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)]">
                                            {project.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">{project.summary}</p>
                                        <p className="mt-4 rounded-2xl border border-[color:var(--border)] bg-[var(--background)] px-4 py-3 text-sm leading-7 text-[color:var(--foreground)]">
                                            {project.impact}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-[color:var(--border)] bg-[var(--code-bg)] px-3 py-1 text-xs font-medium text-[color:var(--foreground)]"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {hasLinks && (
                                            <div className="mt-auto flex flex-wrap gap-4 border-t border-[color:var(--border)] pt-5 text-sm">
                                                {project.links.github && (
                                                    <a
                                                        href={project.links.github}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]"
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
                                                        className="inline-flex items-center gap-2 text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]"
                                                    >
                                                        <ExternalLink className="h-4 w-4" />
                                                        Demo
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </motion.article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
