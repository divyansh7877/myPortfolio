"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-24 pt-24 md:pt-28">
            <div className="max-w-4xl w-full space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-[color:var(--foreground)] via-[color:var(--foreground)] to-[color:var(--accent)] bg-clip-text text-transparent">
                        Div Agarwal
                    </h1>
                    <p className="text-xl md:text-2xl text-[color:var(--muted)] max-w-2xl">
                        AI/ML Engineer building intelligent systems at the intersection of research and product. NYU CS · Full-stack execution.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-[var(--card-bg)] border-2 border-[color:var(--border)] rounded-lg overflow-hidden shadow-2xl relative group hover:shadow-xl transition-shadow duration-300"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--accent-soft),_transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="bg-[var(--code-bg)] px-4 py-2 flex items-center gap-2 border-b-2 border-[color:var(--border)] relative">
                        <Terminal className="w-4 h-4 text-[color:var(--muted)]" />
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm shadow-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm shadow-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm shadow-green-500/50" />
                        </div>
                        <span className="text-xs text-[color:var(--muted)] font-mono ml-2">guest@div:~/summary</span>
                    </div>
                    <div className="p-6 font-mono text-sm md:text-base text-[color:var(--muted)] space-y-4 relative">
                        <p>
                            <span className="text-[color:var(--accent)]">➜</span> <span className="text-[color:var(--muted)]">~</span> cat summary.txt
                        </p>
                        <p className="leading-relaxed">
                            Hi, I&apos;m Div Agarwal. I build AI systems that have to survive both product constraints and real-world data: retrieval pipelines, full-stack interfaces, and applied ML workflows that move from prototype to usable software.
                        </p>
                        <p className="leading-relaxed">
                            Right now that means AI-assisted querying and ad generation at AdsGency AI. Previously, it meant neural event detection research at NYU and shipping tools for interactive analysis of neuroimaging data.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400 dark:text-zinc-500">
                            <span className="animate-pulse text-[color:var(--accent)]">▋</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                >
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 px-6 py-3 bg-[color:var(--accent)] hover:bg-[color:var(--accent-hover)] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border-2 border-[color:var(--border)] text-[color:var(--foreground)] rounded-full font-medium hover:bg-[var(--code-bg)] hover:border-[color:var(--accent)] transition-all duration-300"
                    >
                        Contact Me
                    </a>
                    <a
                        href={`${BASE_PATH}/blog`}
                        className="px-6 py-3 border-2 border-[color:var(--border)] text-[color:var(--foreground)] rounded-full font-medium hover:bg-[var(--code-bg)] hover:border-[color:var(--accent)] transition-all duration-300"
                    >
                        Read Blog
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65 }}
                    className="grid gap-4 md:grid-cols-[auto,1fr] items-start rounded-2xl border border-[color:var(--border)] bg-[var(--card-bg)]/80 p-5"
                >
                    <span className="inline-flex w-fit items-center rounded-full border border-[color:var(--accent)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)]">
                        Currently
                    </span>
                    <p className="text-sm md:text-base text-[color:var(--muted)] leading-relaxed">
                        Building AI-assisted data querying at AdsGency AI. Previously: neural event detection research and browser-based analysis tooling at NYU Neuroinformatics Lab.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
