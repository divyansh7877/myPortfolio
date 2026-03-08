"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";

const focusAreas = [
    {
        label: "Focus",
        value: "AI/ML systems",
    },
    {
        label: "Approach",
        value: "Research × product",
    },
    {
        label: "Priority",
        value: "Readable, reliable execution",
    },
];

const signalLines = [
    "Building systems where model quality, product clarity, and performance all matter.",
    "Combining academic curiosity with startup-minded execution and engineering discipline.",
    "Optimizing for work that feels technically strong, usable, and easy to evaluate quickly.",
];

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center px-4 py-20 pt-28 sm:px-6 lg:px-8 md:py-24 md:pt-32">
            <div className="mx-auto grid max-w-6xl w-full items-center gap-10 lg:grid-cols-[1.15fr_0.95fr]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="data-pill">
                        <span className="status-dot" />
                        Technical portfolio · AI research · systems thinking
                    </div>

                    <div className="space-y-5">
                        <p className="section-kicker">NYU · Machine learning · Full-stack execution</p>
                        <h1 className="font-display text-5xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-6xl md:text-7xl">
                            Div Agarwal
                        </h1>
                        <p className="max-w-2xl text-xl text-[color:var(--foreground)] md:text-2xl">
                            Computer Science Graduate from NYU. AI/ML Enthusiast. System Builder.
                        </p>
                        <p className="max-w-2xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                            I build machine learning systems and technical products with an emphasis on practical
                            intelligence, performance, and clear execution.
                        </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                        {focusAreas.map((item) => (
                            <div key={item.label} className="shell-panel surface-grid rounded-2xl px-4 py-4">
                                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                    {item.label}
                                </p>
                                <p className="mt-2 text-sm font-medium text-[color:var(--foreground)] md:text-base">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="shell-panel-strong surface-grid relative overflow-hidden rounded-[1.75rem] p-1"
                >
                    <div className="rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)]">
                        <div className="flex items-center justify-between border-b border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-3">
                            <div className="flex items-center gap-3">
                                <Terminal className="h-4 w-4 text-[color:var(--muted)]" />
                                <div className="flex gap-1.5">
                                    <div className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                                </div>
                                <span className="font-mono text-xs text-[color:var(--muted)]">guest@div:~/portfolio/home</span>
                            </div>
                            <span className="rounded-full border border-[color:var(--border)] px-2 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[color:var(--accent)]">
                                live
                            </span>
                        </div>
                        <div className="space-y-6 p-6 font-mono text-sm text-[color:var(--muted)] md:p-7 md:text-[0.95rem]">
                            <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.22em]">
                                <span>session: profile.signal</span>
                                <span>mode: shipping</span>
                            </div>

                            <div className="space-y-3">
                                <p>
                                    <span className="text-[color:var(--accent)]">$</span> cat profile.signal
                                </p>
                                {signalLines.map((line) => (
                                    <p key={line} className="leading-7 text-[color:var(--foreground)]">
                                        {line}
                                    </p>
                                ))}
                            </div>

                            <div className="grid gap-3 md:grid-cols-2">
                                <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--card-bg)] p-4">
                                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                        Current lanes
                                    </p>
                                    <p className="mt-2 leading-7 text-[color:var(--foreground)]">
                                        Machine learning, automation, performance, and technically credible product work.
                                    </p>
                                </div>
                                <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--card-bg)] p-4">
                                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                        Working style
                                    </p>
                                    <p className="mt-2 leading-7 text-[color:var(--foreground)]">
                                        Structured thinking, fast iteration, and clear communication around complex systems.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-[color:var(--muted)]">
                                <span className="animate-pulse text-[color:var(--accent)]">▋</span>
                                <span>Open to impactful engineering and AI-focused opportunities.</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4 lg:col-start-1"
                >
                    <a
                        href="#projects"
                        className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--accent)] bg-[color:var(--accent)] px-6 py-3 font-medium text-white shadow-[0_20px_60px_-30px_var(--shadow-accent)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)]"
                    >
                        View Projects
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#contact"
                        className="shell-panel inline-flex items-center rounded-full px-6 py-3 font-medium text-[color:var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[var(--surface-strong)]"
                    >
                        Contact Me
                    </a>
                    <Link
                        href="/blog"
                        className="shell-panel inline-flex items-center rounded-full px-6 py-3 font-medium text-[color:var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:bg-[var(--surface-strong)]"
                    >
                        Read Blog
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
