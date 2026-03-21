"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code2, ExternalLink, Github } from "lucide-react";

interface ProjectLinkSet {
    github?: string;
    demo?: string;
}

interface FeaturedProject {
    title: string;
    problem: string;
    approach: string;
    result: string;
    standout: string;
    tags: string[];
    links: ProjectLinkSet;
    visualLabel: string;
    metrics: { label: string; value: string }[];
    visualSteps: string[];
}

interface OtherProject {
    title: string;
    note: string;
    tags: string[];
}

const featuredProjects: FeaturedProject[] = [
    {
        title: "Neuro Window Explorer",
        problem: "Neuroscience teams need to inspect calcium-trace events quickly without forcing every experiment through a slow desktop workflow.",
        approach: "I built a browser-based analysis interface in Next.js and TypeScript that makes neural traces explorable, shareable, and easier to pair with downstream event-detection research.",
        result: "The surrounding research workflow reached a 0.92 F1 event-detection score, and the tool ships as a live demo for interactive inspection instead of static plots.",
        standout: "It combines research credibility with product execution: live UI, domain-specific data exploration, and measurable modeling impact.",
        tags: ["Next.js", "TypeScript", "Python", "ML", "Research Tooling"],
        links: {
            github: "https://github.com/divyansh7877/neuro-window-explorer",
            demo: "https://neuro-window-explorer.vercel.app/"
        },
        visualLabel: "Live research UI",
        metrics: [
            { label: "Model signal", value: "0.92 F1" },
            { label: "Surface", value: "Browser app" },
            { label: "Access", value: "Live demo" }
        ],
        visualSteps: ["Load trace window", "Inspect events", "Compare patterns"]
    },
    {
        title: "Expert-Call RAG Assistant",
        problem: "Long expert-call transcript archives are difficult to search, summarize, and cite reliably when every answer has to stay grounded in source material.",
        approach: "I built a local RAG stack with Llama 3.1, LlamaIndex, LanceDB, and a Gradio interface so retrieval, inference, and source citation all stay modular and replaceable.",
        result: "The system runs fully locally, returns source-grounded answers over transcript collections, and the current README documents roughly 1-2 minute response times on local hardware.",
        standout: "It shows applied retrieval depth rather than just prompting: local inference, modular retrieval design, and explicit source grounding.",
        tags: ["Python", "Gradio", "LanceDB", "LlamaIndex", "Llama 3.1"],
        links: {
            github: "https://github.com/divyansh7877/RAG-LLM-TC2"
        },
        visualLabel: "Query-to-citation flow",
        metrics: [
            { label: "Inference mode", value: "Local-only" },
            { label: "Response time", value: "1-2 min" },
            { label: "Answer style", value: "Source-cited" }
        ],
        visualSteps: ["Embed transcripts", "Retrieve evidence", "Generate answer"]
    },
    {
        title: "Cloud-Native Social Media Automation",
        problem: "Content publishing breaks down when image selection, captioning, search, and posting still require manual handoffs across tools.",
        approach: "I designed a serverless AWS pipeline that connects image retrieval, Rekognition analysis, Claude-based captioning, OpenSearch indexing, and publishing logic into one automated flow.",
        result: "The project automates a 5-stage content pipeline end to end, reducing the workflow to one orchestrated system instead of separate manual steps.",
        standout: "It is strong systems work: event-driven architecture, model orchestration, and production-minded automation instead of a single model demo.",
        tags: ["AWS Lambda", "Cognito", "Bedrock", "OpenSearch", "Python"],
        links: {},
        visualLabel: "Serverless pipeline snapshot",
        metrics: [
            { label: "Stages", value: "5-step flow" },
            { label: "Stack", value: "AWS-native" },
            { label: "Output", value: "Post-ready content" }
        ],
        visualSteps: ["Fetch images", "Analyze media", "Generate captions"]
    },
    {
        title: "Collections Strategy Management System",
        problem: "Collections teams need a usable operating surface for turning messy account data into actionable outreach plans rather than static spreadsheets.",
        approach: "I built a full-stack product with FastAPI, React, SQLite, and the OpenAI API to generate strategies, manage contacts, and organize actions in a timeline-based UI.",
        result: "The system handles both Excel and PDF imports, then turns that data into AI-generated multi-step strategy blocks inside a single workflow interface.",
        standout: "This is the clearest product build in the portfolio: ingestion, reasoning, UI state, and decision support packaged as one cohesive application.",
        tags: ["Python", "FastAPI", "React", "OpenAI API", "SQLite"],
        links: {
            github: "https://github.com/divyansh7877/debt-collector"
        },
        visualLabel: "Strategy workspace",
        metrics: [
            { label: "Imports", value: "Excel + PDF" },
            { label: "UX", value: "Timeline UI" },
            { label: "Output", value: "AI strategy blocks" }
        ],
        visualSteps: ["Import accounts", "Generate plan", "Track actions"]
    },
    {
        title: "Concurrent Multi-User RAG System",
        problem: "A useful shared knowledge assistant has to support multiple active users without cross-session context bleed or fragile state management.",
        approach: "I designed a session-aware RAG architecture that separates shared retrieval infrastructure from per-user conversational state so multiple users can query the same corpus safely.",
        result: "The system supports concurrent multi-user access over a shared knowledge base while keeping retrieval context isolated at the session level.",
        standout: "It highlights systems thinking beyond a single-user chatbot: concurrency, state isolation, and reuse of shared retrieval layers.",
        tags: ["Python", "RAG", "Concurrency", "Session Isolation", "Backend"],
        links: {},
        visualLabel: "Shared-index architecture",
        metrics: [
            { label: "Usage mode", value: "Multi-user" },
            { label: "Index", value: "Shared corpus" },
            { label: "State", value: "Isolated sessions" }
        ],
        visualSteps: ["Ingest corpus", "Route sessions", "Serve concurrent queries"]
    }
];

const otherExperiments: OtherProject[] = [
    {
        title: "Fine-Tuning Llama 3.1-8B",
        note: "LoRA-based math-verification experiment with 0.85 accuracy from a Kaggle workflow.",
        tags: ["PyTorch", "LoRA", "Transformers", "LLMs"]
    },
    {
        title: "Scalable Vector Search Music Recs",
        note: "Recommendation-system exploration on the Spotify Million Playlist Dataset using Word2Vec and ChromaDB.",
        tags: ["Spark", "MongoDB", "ChromaDB", "Word2Vec"]
    },
    {
        title: "Trade Statistics Visualization",
        note: "Interactive OECD trade analysis with network maps and geospatial views.",
        tags: ["Python", "Streamlit", "Plotly", "NetworkX"]
    },
    {
        title: "ERC-721 NFT Smart Contract",
        note: "Sepolia NFT contract with IPFS-backed metadata, minting limits, and royalty support.",
        tags: ["Solidity", "IPFS", "Ethereum", "Web3"]
    },
    {
        title: "GPT-4 Pokémon Showdown Agent",
        note: "Prompting experiment around context-aware decision making in a competitive game environment.",
        tags: ["Python", "GPT-4", "Game AI"]
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-4 flex items-center gap-3 text-[color:var(--foreground)]"
                >
                    <Code2 className="text-[color:var(--accent)]" />
                    Projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="max-w-3xl text-[color:var(--muted)] mb-10 leading-relaxed"
                >
                    I trimmed this section to the work that best represents how I build: research tooling, retrieval systems, automation pipelines, and AI products with real interfaces.
                </motion.p>

                <div className="space-y-8">
                    {featuredProjects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="rounded-3xl border border-[color:var(--border)] bg-[var(--card-bg)] p-6 md:p-8 shadow-sm hover:border-[color:var(--accent)] hover:shadow-xl transition-all"
                        >
                            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.8fr),minmax(280px,0.95fr)]">
                                <div>
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-[color:var(--foreground)] mb-2">
                                                {project.title}
                                            </h3>
                                            <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--accent)] font-semibold">
                                                Featured Work
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4">
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    Code
                                                </a>
                                            )}
                                            {project.links.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-sm md:text-base leading-relaxed text-[color:var(--muted)]">
                                        <p>
                                            <span className="font-semibold text-[color:var(--foreground)]">Problem:</span> {project.problem}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-[color:var(--foreground)]">Approach:</span> {project.approach}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-[color:var(--foreground)]">Result:</span> {project.result}
                                        </p>
                                    </div>

                                    <div className="mt-6">
                                        <p className="text-sm font-semibold text-[color:var(--foreground)] mb-2">
                                            Why it stands out
                                        </p>
                                        <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                                            {project.standout}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--code-bg)] text-[color:var(--foreground)] border border-[color:var(--border)]"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-5">
                                    <div className="flex items-center justify-between mb-5">
                                        <p className="text-sm font-semibold text-[color:var(--foreground)]">
                                            {project.visualLabel}
                                        </p>
                                        <span className="text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
                                            Embedded Visual
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3 mb-5">
                                        {project.metrics.map((metric) => (
                                            <div
                                                key={metric.label}
                                                className="rounded-xl border border-[color:var(--border)] bg-[var(--card-bg)] p-3"
                                            >
                                                <p className="text-[11px] uppercase tracking-[0.12em] text-[color:var(--muted)] mb-1">
                                                    {metric.label}
                                                </p>
                                                <p className="text-sm font-semibold text-[color:var(--foreground)]">
                                                    {metric.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="rounded-2xl border border-dashed border-[color:var(--accent)]/40 bg-[var(--card-bg)] p-4">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--accent)]" />
                                            <span className="text-xs uppercase tracking-[0.14em] text-[color:var(--muted)]">
                                                Flow Snapshot
                                            </span>
                                        </div>

                                        <div className="space-y-3">
                                            {project.visualSteps.map((step, stepIndex) => (
                                                <div key={step} className="flex items-center gap-3">
                                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-semibold text-[color:var(--accent)]">
                                                        {stepIndex + 1}
                                                    </span>
                                                    <div className="h-px flex-1 bg-[color:var(--border)]" />
                                                    <span className="min-w-0 rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-3 py-1 text-xs text-[color:var(--foreground)]">
                                                        {step}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <motion.details
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="group mt-10 rounded-2xl border border-[color:var(--border)] bg-[var(--card-bg)] p-6"
                >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[color:var(--foreground)]">
                        <div>
                            <p className="font-semibold">Other Experiments</p>
                            <p className="text-sm text-[color:var(--muted)] mt-1">
                                Good learning projects, but not the clearest signal for the portfolio front page.
                            </p>
                        </div>
                        <ChevronDown className="w-5 h-5 text-[color:var(--muted)] transition-transform group-open:rotate-180" />
                    </summary>

                    <div className="grid gap-4 md:grid-cols-2 mt-6">
                        {otherExperiments.map((project) => (
                            <div
                                key={project.title}
                                className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-5"
                            >
                                <h4 className="text-lg font-semibold text-[color:var(--foreground)] mb-2">
                                    {project.title}
                                </h4>
                                <p className="text-sm text-[color:var(--muted)] leading-relaxed mb-4">
                                    {project.note}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--card-bg)] text-[color:var(--foreground)] border border-[color:var(--border)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.details>
            </div>
        </section>
    );
}
