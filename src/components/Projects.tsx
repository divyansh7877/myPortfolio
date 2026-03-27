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
    visual: React.ReactNode;
}

interface OtherProject {
    title: string;
    note: string;
    tags: string[];
}

// ── Per-project visual panels ─────────────────────────────────────────────────

function NeuroVisual() {
    const bars = [0.61, 0.74, 0.55, 0.88, 0.72, 0.92, 0.68, 0.81];
    return (
        <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-5 h-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[color:var(--foreground)]">Calcium trace window</p>
                <span className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--muted)] font-mono">Live research UI</span>
            </div>

            {/* Simulated trace waveform */}
            <div className="rounded-xl border border-[color:var(--border)] bg-[var(--card-bg)] p-3 flex flex-col gap-2">
                <p className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--muted)] font-mono mb-1">ΔF/F signal — neuron #07</p>
                <div className="flex items-end gap-1 h-12">
                    {bars.map((h, i) => (
                        <div
                            key={i}
                            className="flex-1 rounded-sm bg-[color:var(--accent)] opacity-80 transition-all"
                            style={{ height: `${h * 100}%` }}
                        />
                    ))}
                </div>
                <div className="flex justify-between text-[9px] text-[color:var(--muted)] font-mono mt-1">
                    <span>0 ms</span><span>400 ms</span><span>800 ms</span>
                </div>
            </div>

            {/* Key metrics */}
            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: "F1 score", value: "0.92" },
                    { label: "Surface", value: "Browser" },
                    { label: "Access", value: "Live demo" },
                ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-[color:var(--border)] bg-[var(--card-bg)] p-2.5">
                        <p className="text-[10px] uppercase tracking-[0.12em] text-[color:var(--muted)] mb-1">{m.label}</p>
                        <p className="text-sm font-semibold text-[color:var(--foreground)]">{m.value}</p>
                    </div>
                ))}
            </div>

            {/* Pipeline steps */}
            <div className="rounded-xl border border-dashed border-[color:var(--accent)]/40 bg-[var(--card-bg)] p-3 flex items-center gap-2 flex-wrap text-xs">
                {["Load window", "Detect events", "Compare traces"].map((s, i, arr) => (
                    <span key={s} className="flex items-center gap-2">
                        <span className="rounded-full bg-[var(--accent-soft)] text-[color:var(--accent)] px-2 py-0.5 font-medium">{s}</span>
                        {i < arr.length - 1 && <span className="text-[color:var(--muted)]">→</span>}
                    </span>
                ))}
            </div>
        </div>
    );
}

function RAGVisual() {
    return (
        <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-5 h-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[color:var(--foreground)]">Query-to-citation flow</p>
                <span className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--muted)] font-mono">Local RAG stack</span>
            </div>

            {/* Architecture layers */}
            <div className="rounded-xl border border-[color:var(--border)] bg-[var(--card-bg)] p-3 flex flex-col gap-2">
                {[
                    { layer: "Gradio UI", sub: "Query interface", color: "var(--accent)" },
                    { layer: "LlamaIndex", sub: "Retrieval + context", color: "var(--accent-alt)" },
                    { layer: "LanceDB", sub: "Vector store", color: "var(--accent)" },
                    { layer: "Llama 3.1", sub: "Local inference", color: "var(--accent-alt)" },
                ].map((row, i, arr) => (
                    <div key={row.layer} className="flex items-center gap-3">
                        <div
                            className="rounded-lg px-3 py-1.5 text-xs font-semibold shrink-0"
                            style={{ background: `color-mix(in srgb, ${row.color} 14%, transparent)`, color: `var(--foreground)`, border: `1px solid color-mix(in srgb, ${row.color} 30%, transparent)` }}
                        >
                            {row.layer}
                        </div>
                        <div className="h-px flex-1 bg-[color:var(--border)]" />
                        <span className="text-[10px] text-[color:var(--muted)] font-mono">{row.sub}</span>
                        {i < arr.length - 1 && (
                            <div className="absolute" />
                        )}
                    </div>
                ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: "Inference", value: "Local" },
                    { label: "Response", value: "1–2 min" },
                    { label: "Answers", value: "Cited" },
                ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-[color:var(--border)] bg-[var(--card-bg)] p-2.5">
                        <p className="text-[10px] uppercase tracking-[0.12em] text-[color:var(--muted)] mb-1">{m.label}</p>
                        <p className="text-sm font-semibold text-[color:var(--foreground)]">{m.value}</p>
                    </div>
                ))}
            </div>

            {/* Snippet-style output */}
            <div className="rounded-xl border border-[color:var(--border)] bg-[var(--code-bg)] p-3 font-mono text-[11px] leading-relaxed text-[color:var(--muted)]">
                <span className="text-[color:var(--accent)]">{">"}</span> query: <span className="text-[color:var(--foreground)]">&quot;What did the expert say about churn?&quot;</span><br />
                <span className="text-[color:var(--accent)]">{">"}</span> source: <span className="text-[color:var(--foreground)]">transcript_2024_q3.txt · chunk 14</span>
            </div>
        </div>
    );
}

function AWSVisual() {
    const stages = [
        { icon: "🖼", label: "Fetch images", service: "S3 + API" },
        { icon: "🔍", label: "Analyze media", service: "Rekognition" },
        { icon: "✍", label: "Generate caption", service: "Bedrock / Claude" },
        { icon: "🔎", label: "Index content", service: "OpenSearch" },
        { icon: "📤", label: "Publish post", service: "Lambda trigger" },
    ];
    return (
        <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-5 h-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[color:var(--foreground)]">Serverless pipeline</p>
                <span className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--muted)] font-mono">AWS-native</span>
            </div>

            <div className="flex flex-col gap-2">
                {stages.map((stage, i) => (
                    <div key={stage.label} className="flex items-center gap-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xs font-bold text-[color:var(--accent)]">
                            {i + 1}
                        </div>
                        <div className="flex-1 rounded-xl border border-[color:var(--border)] bg-[var(--card-bg)] px-3 py-2 flex items-center justify-between">
                            <span className="text-xs font-medium text-[color:var(--foreground)]">{stage.label}</span>
                            <span className="text-[10px] font-mono text-[color:var(--muted)]">{stage.service}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: "Stages", value: "5-step" },
                    { label: "Stack", value: "Serverless" },
                    { label: "Output", value: "Post-ready" },
                ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-[color:var(--border)] bg-[var(--card-bg)] p-2.5">
                        <p className="text-[10px] uppercase tracking-[0.12em] text-[color:var(--muted)] mb-1">{m.label}</p>
                        <p className="text-sm font-semibold text-[color:var(--foreground)]">{m.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function CollectionsVisual() {
    return (
        <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--surface)] p-5 h-full flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[color:var(--foreground)]">Strategy workspace</p>
                <span className="text-[10px] uppercase tracking-[0.14em] text-[color:var(--muted)] font-mono">Full-stack product</span>
            </div>

            {/* Mock import bar */}
            <div className="rounded-xl border border-[color:var(--border)] bg-[var(--card-bg)] p-3 flex items-center gap-3">
                <div className="flex gap-2">
                    <span className="rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--foreground)]">Excel</span>
                    <span className="rounded-full border border-[color:var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] font-medium text-[color:var(--foreground)]">PDF</span>
                </div>
                <div className="h-px flex-1 bg-[color:var(--border)]" />
                <span className="text-xs text-[color:var(--accent)] font-medium">ingested</span>
            </div>

            {/* Mock timeline blocks */}
            <div className="flex flex-col gap-2">
                {[
                    { day: "Day 1", action: "Initial outreach call", status: "done" },
                    { day: "Day 4", action: "Send payment plan", status: "done" },
                    { day: "Day 10", action: "Follow-up email", status: "pending" },
                ].map((item) => (
                    <div key={item.day} className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-[color:var(--muted)] w-10 shrink-0">{item.day}</span>
                        <div className="flex-1 rounded-lg border border-[color:var(--border)] bg-[var(--card-bg)] px-3 py-1.5 text-xs text-[color:var(--foreground)]">
                            {item.action}
                        </div>
                        <span
                            className="text-[10px] font-medium"
                            style={{ color: item.status === "done" ? "var(--accent)" : "var(--muted)" }}
                        >
                            {item.status === "done" ? "✓" : "○"}
                        </span>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-3 gap-2">
                {[
                    { label: "Imports", value: "Excel+PDF" },
                    { label: "UX", value: "Timeline" },
                    { label: "Output", value: "AI strategy" },
                ].map((m) => (
                    <div key={m.label} className="rounded-xl border border-[color:var(--border)] bg-[var(--card-bg)] p-2.5">
                        <p className="text-[10px] uppercase tracking-[0.12em] text-[color:var(--muted)] mb-1">{m.label}</p>
                        <p className="text-sm font-semibold text-[color:var(--foreground)]">{m.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ── Data ──────────────────────────────────────────────────────────────────────

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
        visual: <NeuroVisual />,
    },
    {
        title: "Expert-Call RAG Assistant",
        problem: "Long expert-call transcript archives are difficult to search, summarize, and cite reliably when every answer has to stay grounded in source material.",
        approach: "I built a local RAG stack with Llama 3.1, LlamaIndex, LanceDB, and a Gradio interface so retrieval, inference, and source citation all stay modular and replaceable.",
        result: "The system runs fully locally, returns source-grounded answers over transcript collections, and the current README documents roughly 1–2 minute response times on local hardware.",
        standout: "It shows applied retrieval depth rather than just prompting: local inference, modular retrieval design, and explicit source grounding.",
        tags: ["Python", "Gradio", "LanceDB", "LlamaIndex", "Llama 3.1"],
        links: {
            github: "https://github.com/divyansh7877/RAG-LLM-TC2"
        },
        visual: <RAGVisual />,
    },
    {
        title: "Cloud-Native Social Media Automation",
        problem: "Content publishing breaks down when image selection, captioning, search, and posting still require manual handoffs across tools.",
        approach: "I designed a serverless AWS pipeline that connects image retrieval, Rekognition analysis, Claude-based captioning, OpenSearch indexing, and publishing logic into one automated flow.",
        result: "The project automates a 5-stage content pipeline end to end, reducing the workflow to one orchestrated system instead of separate manual steps.",
        standout: "It is strong systems work: event-driven architecture, model orchestration, and production-minded automation instead of a single model demo.",
        tags: ["AWS Lambda", "Cognito", "Bedrock", "OpenSearch", "Python"],
        links: {},
        visual: <AWSVisual />,
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
        visual: <CollectionsVisual />,
    },
];

const otherExperiments: OtherProject[] = [
    {
        title: "Concurrent Multi-User RAG System",
        note: "Session-aware RAG architecture that isolates per-user conversational state over a shared corpus, supporting multiple active users without context bleed.",
        tags: ["Python", "RAG", "Concurrency", "Session Isolation", "Backend"]
    },
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

// ── Component ─────────────────────────────────────────────────────────────────

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
                                {/* Left: text */}
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
                                            <span className="font-semibold text-[color:var(--foreground)]">Problem:</span>{" "}
                                            {project.problem}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-[color:var(--foreground)]">Approach:</span>{" "}
                                            {project.approach}
                                        </p>
                                        <p>
                                            <span className="font-semibold text-[color:var(--foreground)]">Result:</span>{" "}
                                            {project.result}
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

                                {/* Right: project-specific visual */}
                                {project.visual}
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
