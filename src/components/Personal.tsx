"use client";

import { motion } from "framer-motion";
import { User, Music, BookOpen, Coffee } from "lucide-react";

export default function Personal() {
    return (
        <section id="personal" className="py-20 px-4 bg-gray-50/50 dark:bg-zinc-900/30">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center gap-3"
                >
                    <User className="text-blue-400" />
                    Personal
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800">
                            <div className="flex items-center gap-3 mb-4">
                                <Coffee className="text-blue-400" />
                                <h3 className="text-xl font-semibold">Interests</h3>
                            </div>
                            <p className="text-gray-700 dark:text-zinc-400 leading-relaxed">
                                I’m someone who finds joy in the little things—taking long walks in nature, discovering new experiences, and spending hours wandering through museums. When I’m not coding, you’ll likely find me experimenting in the kitchen with new recipes or writing.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800">
                            <div className="flex items-center gap-3 mb-4">
                                <Music className="text-blue-400" />
                                <h3 className="text-xl font-semibold">Music</h3>
                            </div>
                            <p className="text-zinc-400 leading-relaxed mb-4">
                                Music is a huge part of my life. I love the immersive experience of live orchestral performances and the energy of rock.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {["Dire Straits", "Pearl Jam", "Steven Wilson", "Pink Floyd"].map((band, i) => (
                                    <span key={i} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 border border-gray-200 dark:border-zinc-700">
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
                        className="bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800 h-full"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="text-blue-400" />
                            <h3 className="text-xl font-semibold">Reading</h3>
                        </div>
                        <p className="text-zinc-400 leading-relaxed mb-6">
                            I’ve developed a deep appreciation for reading, particularly fiction, classic literature, and philosophy.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-zinc-300 mb-2">Currently Reading</h4>
                                <div className="flex items-center gap-2 text-gray-600 dark:text-zinc-400 text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Crime and Punishment (Dostoevsky)
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-zinc-300 mb-2">On Deck</h4>
                                <ul className="space-y-1 text-gray-600 dark:text-zinc-500 text-sm">
                                    <li>The Brothers Karamazov</li>
                                    <li>White Nights</li>
                                    <li>Siddhartha</li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-gray-900 dark:text-zinc-300 mb-2">Recently Finished</h4>
                                <ul className="space-y-1 text-gray-600 dark:text-zinc-500 text-sm">
                                    <li>The Death of Ivan Ilyich</li>
                                    <li>The Metamorphosis</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
