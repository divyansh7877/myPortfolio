"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Code, Github, Trophy, Users } from "lucide-react";

// Data derived from hackathons.txt
const hackathons = [
    {
        name: "Mitate",
        tagline: "AI-Powered Research Paper Visual Explainer",
        event: "DigitalOcean x MLH Hackathon",
        location: "Brooklyn, NY",
        description: "A web application that transforms complex arXiv research papers into beautiful, educational visualizations tailored to the user's knowledge level. The idea is to make understanding of complex knowledge into a infographic based on the user's background. So say a paper like Attention is all you need can be explained to a 5 year old as well as a 80 year old.",
        techStack: ["React", "Appwrite", "DigitalOcean Gradient AI", "FIBO/Bria AI", "Tailwind CSS"],
        team: ["Chris", "Asra"],
        links: {
            github: "https://github.com/divyansh7877/Mitate",
            // demo: "" // No demo link explicitly provided in the summary, omitting
        },
        achievements: [
            "Engineered multi-tier summarization with Llama 3.3",
            "Architected serverless backend with Appwrite Functions",
            "Implemented automated visual pipeline using Bria AI"
        ]
    },
    {
        name: "Connie",
        tagline: "Streamlined platform for creators",
        event: "Columbia × Lovable Hackathon",
        location: "New York, NY",
        description: "A full-stack web application empowering digital creators to organize their portfolio, publish content, and explore monetization features.",
        techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn-ui", "Lovable"],
        team: ["Devin", "Aarthi", "Boris", "Jan"],
        links: {
            github: "https://github.com/radilek/creator-studio-demo",
        },
        achievement: "3rd Place Winner",
        achievements: [
            "Secured 3rd place among innovative AI-powered builder teams",
            "Built with Lovable's AI-powered platform",
            "Integrated real-time preview and one-click publishing"
        ]
    },
    {
        name: "Cibo",
        tagline: "AI-Powered Voice Agent",
        event: "ElevenLabs Worldwide Hackathon",
        location: "New York, NY",
        description: "An innovative AI-powered voice agent ensuring seamless voice-based user experiences for food-related interactions.",
        techStack: ["React", "TypeScript", "Convex", "Python", "ElevenLabs SDK", "Twilio"],
        team: ["Chris", "Syed", "Shubham"],
        links: {
            github: "https://github.com/divyansh7877/cibo",
        },
        achievements: [
            "Full-stack app with reactive data syncing via Convex",
            "Orchestrated AI agent deployment with Python scripts",
            "Integrated Twilio for telephony features"
        ]
    }
];

// Re-ordering to match the file or chronological if possible?
// File order: Mitate, Cibo, Creator Studio. 
// I will stick to that order or maybe reverse chronological? 
// Mitate (Dec 2025 according to text? Wait, Cibo says "In December 2025". Creator Studio "December 2025". Mitate "DigitalOcean x MLH"). 
// I will just use the order they appear or importance. The file has Mitate first.

export default function Hackathons() {
    return (
        <section id="hackathons" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center gap-3 text-[color:var(--foreground)]"
                >
                    <Trophy className="text-[color:var(--accent)]" />
                    Hackathons
                </motion.h2>

                <div className="grid md:grid-cols-1 gap-8">
                    {hackathons.map((hackathon, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[var(--card-bg)] border border-[color:var(--border)] rounded-xl overflow-hidden hover:border-[color:var(--accent)] transition-all shadow-md hover:shadow-xl"
                        >
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold text-[color:var(--foreground)]">
                                                {hackathon.name}
                                            </h3>
                                            {hackathon.achievement && (
                                                <span className="px-3 py-1 text-xs font-semibold text-[color:var(--accent)] bg-[var(--code-bg)] rounded-full border border-[color:var(--border)] flex items-center gap-1">
                                                    <Award className="w-3 h-3" />
                                                    {hackathon.achievement}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-lg text-[color:var(--muted)] font-medium mb-1">
                                            {hackathon.tagline}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-[color:var(--muted)]">
                                            <span className="font-medium text-[color:var(--accent)]">{hackathon.event}</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {hackathon.location}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        {hackathon.links?.github && (
                                            <a href={hackathon.links.github} target="_blank" rel="noopener noreferrer" className="p-2 text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors bg-[var(--code-bg)] rounded-lg border border-[color:var(--border)]">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {/* Add other links if available */}
                                    </div>
                                </div>

                                <p className="text-[color:var(--muted)] mb-6 leading-relaxed">
                                    {hackathon.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-[color:var(--foreground)] mb-3 flex items-center gap-2">
                                            <Code className="w-4 h-4 text-[color:var(--accent)]" />
                                            Key Contributions
                                        </h4>
                                        <ul className="space-y-2">
                                            {hackathon.achievements.map((item, i) => (
                                                <li key={i} className="text-sm text-[color:var(--muted)] flex items-start gap-2">
                                                    <span className="text-[color:var(--accent)] mt-0.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-[color:var(--foreground)] mb-3 flex items-center gap-2">
                                            <Code className="w-4 h-4 text-[color:var(--accent)]" />
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {hackathon.techStack.map((tech, i) => (
                                                <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-[var(--code-bg)] text-[color:var(--foreground)] border border-[color:var(--border)]">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-[color:var(--muted)] pt-4 border-t border-[color:var(--border)]">
                                    <Users className="w-4 h-4" />
                                    <span>Team: {hackathon.team.join(", ")}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
