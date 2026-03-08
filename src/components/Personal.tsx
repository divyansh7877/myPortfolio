"use client";

import { motion } from "framer-motion";
import { BookOpen, Coffee, Music, User } from "lucide-react";

const personalSections = [
    {
        icon: Coffee,
        title: "Offline reset",
        body: "Long walks, museums, cooking, and writing are the routines that help me reset and stay curious during long build cycles.",
        highlights: ["Nature walks", "Museums", "Cooking", "Writing"],
    },
    {
        icon: Music,
        title: "Music",
        body: "I gravitate toward the immersive feel of live orchestral performances and the energy of rock.",
        highlights: ["Dire Straits", "Pearl Jam", "Steven Wilson", "Pink Floyd"],
    },
    {
        icon: BookOpen,
        title: "Reading",
        body: "Reading fiction, classics, and philosophy is one of the ways I keep perspective outside technical work.",
        highlights: ["Wuthering Heights", "The Stranger", "Crime and Punishment", "The Siddhartha"],
    },
];

export default function Personal() {
    return (
        <section id="personal" className="bg-[var(--surface)] px-4 py-16 sm:px-6 lg:px-8 md:py-20">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 max-w-3xl space-y-4">
                    <div className="data-pill">
                        <span className="status-dot" />
                        Personal context that complements the way I work: curiosity, patience, and sustained focus
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-3xl font-bold text-[color:var(--foreground)]"
                    >
                        <User className="text-[color:var(--accent)]" />
                        Personal
                    </motion.h2>
                    <p className="text-base leading-8 text-[color:var(--muted)] md:text-lg">
                        A few non-work signals that add personality without pulling the portfolio away from its technical center of gravity.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {personalSections.map((section, index) => {
                        const Icon = section.icon;

                        return (
                            <motion.article
                                key={section.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                                className="shell-panel surface-grid rounded-[1.75rem] p-1"
                            >
                                <div className="h-full rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)] p-6">
                                    <div className="flex items-center gap-3">
                                        <Icon className="text-[color:var(--accent)]" />
                                        <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{section.title}</h3>
                                    </div>

                                    <p className="mt-4 leading-7 text-[color:var(--muted)]">{section.body}</p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {section.highlights.map((item) => (
                                            <span
                                                key={item}
                                                className="rounded-full border border-[color:var(--border)] bg-[var(--card-bg)] px-3 py-1.5 text-xs font-medium text-[color:var(--foreground)]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
