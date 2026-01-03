"use client";

import { motion } from "framer-motion";
import { User, Music, BookOpen, Coffee, Twitter } from "lucide-react";

export default function Personal() {
    return (
        <section id="personal" className="py-20 px-4 bg-[var(--surface)]">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center gap-3"
                >
                    <User className="text-[color:var(--accent)]" />
                    Personal
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-[var(--card-bg)] p-6 rounded-xl border border-[color:var(--border)] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <Coffee className="text-[color:var(--accent)]" />
                                <h3 className="text-xl font-semibold">Interests</h3>
                            </div>
                            <p className="text-[color:var(--muted)] leading-relaxed mb-4">
                                I'm someone who finds joy in the little things—taking long walks in nature, discovering new experiences, and spending hours wandering through museums. When I'm not coding, you'll likely find me experimenting in the kitchen with new recipes or writing.
                            </p>
                            <div className="pt-4 border-t border-[color:var(--border)]">
                                <a
                                    href="https://x.com/div__vi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors"
                                >
                                    <Twitter className="w-4 h-4" />
                                    <span>@div__vi</span>
                                </a>
                            </div>
                        </div>

                        <div className="bg-[var(--card-bg)] p-6 rounded-xl border border-[color:var(--border)] shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-4">
                                <Music className="text-[color:var(--accent)]" />
                                <h3 className="text-xl font-semibold">Music</h3>
                            </div>
                            <p className="text-[color:var(--muted)] leading-relaxed mb-4">
                                Music is a huge part of my life. I love the immersive experience of live orchestral performances and the energy of rock.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Dire Straits", "Pearl Jam", "Steven Wilson", "Pink Floyd"].map((band, i) => (
                                    <span key={i} className="text-xs px-2 py-1 rounded bg-[var(--code-bg)] text-[color:var(--foreground)] border border-[color:var(--border)]">
                                        {band}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[var(--card-bg)] p-6 rounded-xl border border-[color:var(--border)] h-full shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="text-[color:var(--accent)]" />
                            <h3 className="text-xl font-semibold">Reading</h3>
                        </div>
                        <p className="text-[color:var(--muted)] leading-relaxed mb-6">
                            I've developed a deep appreciation for reading, particularly fiction, classic literature, and philosophy.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-zinc-300 mb-2">Currently Reading</h4>
                                <ul className="space-y-1 text-gray-600 dark:text-zinc-400 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]"></span>
                                        Wuthering Heights
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]"></span>
                                        The Stranger
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-zinc-300 mb-2">Recently Finished</h4>
                                <ul className="space-y-1 text-gray-600 dark:text-zinc-500 text-sm">
                                    <li>Crime and Punishment</li>
                                    <li>The Siddhartha</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
