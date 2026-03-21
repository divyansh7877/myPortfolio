"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const skillTiers = [
    {
        title: "Core",
        subtitle: "Daily-use tools for shipping AI products end to end.",
        tone: "border-[color:var(--accent)] bg-[var(--card-bg)] shadow-[0_0_32px_-24px_var(--shadow-accent)]",
        chipClass: "border-[color:var(--accent)] bg-[var(--accent-soft)] text-[color:var(--foreground)] text-sm md:text-base px-4 py-2.5",
        skills: ["Python", "PyTorch", "SQL", "React/Next.js", "AWS", "Docker", "Git"]
    },
    {
        title: "Proficient",
        subtitle: "Project-level depth across retrieval, APIs, and model tooling.",
        tone: "border-[color:var(--border)] bg-[var(--card-bg)]",
        chipClass: "border-[color:var(--border)] bg-[var(--code-bg)] text-[color:var(--foreground)] text-sm px-3.5 py-2",
        skills: ["HuggingFace", "LlamaIndex", "RAG", "LangGraph", "FastAPI", "TensorFlow", "Pandas", "NumPy"]
    },
    {
        title: "Familiar",
        subtitle: "Comfortable with these tools when the project calls for them.",
        tone: "border-[color:var(--border)] bg-[var(--surface)]",
        chipClass: "border-[color:var(--border)] bg-transparent text-[color:var(--muted)] text-xs md:text-sm px-3 py-1.5",
        skills: ["Solidity", "ROS", "MATLAB", "Kubernetes", "C++"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-4 flex items-center gap-3 text-[color:var(--foreground)]"
                >
                    <Sparkles className="text-[color:var(--accent)]" />
                    Skills
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="max-w-3xl text-[color:var(--muted)] mb-10 leading-relaxed"
                >
                    I work across modeling, retrieval, product interfaces, and deployment. The grouping below reflects how often these tools show up in shipped work rather than a flat keyword dump.
                </motion.p>

                <div className="grid gap-6 lg:grid-cols-3">
                    {skillTiers.map((tier, index) => (
                        <motion.div
                            key={tier.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`rounded-2xl border p-6 md:p-7 ${tier.tone}`}
                        >
                            <div className="mb-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--accent)] mb-2">
                                    {tier.title}
                                </p>
                                <p className="text-sm leading-relaxed text-[color:var(--muted)]">
                                    {tier.subtitle}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {tier.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`rounded-full border font-medium transition-transform hover:-translate-y-0.5 ${tier.chipClass}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
