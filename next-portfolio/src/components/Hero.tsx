"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center p-4 pt-20">
            <div className="max-w-4xl w-full space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        Divyansh Agarwal
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl">
                        Computer Science Graduate from NYU. AI/ML Enthusiast. System Builder.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl"
                >
                    <div className="bg-zinc-800/50 px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
                        <Terminal className="w-4 h-4 text-zinc-400" />
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <span className="text-xs text-zinc-500 font-mono ml-2">guest@divyansh:~/summary</span>
                    </div>
                    <div className="p-6 font-mono text-sm md:text-base text-zinc-300 space-y-4">
                        <p>
                            <span className="text-green-400">➜</span> <span className="text-cyan-400">~</span> cat summary.txt
                        </p>
                        <p className="leading-relaxed">
                            Hi, I’m Divyansh Agarwal—most people call me Div. I&apos;m a Computer Science graduate from NYU with a deep interest in artificial intelligence, machine learning, and the systems that power modern computing. My experience spans academic research, startup innovation, and collaborative engineering environments.
                        </p>
                        <p className="leading-relaxed">
                            My work sits at the intersection of theory and implementation—whether it&apos;s designing models to interpret neurological signals, optimizing systems for real-time performance, or exploring how large language models can reshape automation.
                        </p>
                        <div className="flex items-center gap-2 text-zinc-500">
                            <span className="animate-pulse">▋</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4"
                >
                    <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition-colors">
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#contact" className="px-6 py-3 border border-zinc-700 text-white rounded-full font-medium hover:bg-zinc-800 transition-colors">
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
