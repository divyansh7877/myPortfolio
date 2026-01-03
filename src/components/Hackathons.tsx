"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Code, ExternalLink, Github, Trophy, Users } from "lucide-react";

// Data derived from hackathons.txt
const hackathons = [
    {
        name: "Mitate",
        tagline: "AI-Powered Research Paper Visual Explainer",
        event: "DigitalOcean x MLH Hackathon",
        location: "Brooklyn, NY",
        description: "A web application that transforms complex arXiv research papers into beautiful, educational visualizations tailored to the user's knowledge level.",
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
        name: "Creator Studio",
        tagline: "Streamlined platform for creators",
        event: "Columbia × Lovable Hackathon",
        location: "New York, NY",
        description: "A full-stack web application empowering digital creators to organize their portfolio, publish content, and explore monetization features.",
        techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn-ui", "Lovable"],
        team: ["Devin", "Aarthi", "Boris", "Jan"],
        links: {
            // Repo link inferred from context or likely exists, but not explicitly in text snippet for this one specifically in the same format. 
            // Actually, the text says "Project: Creator Studio... 3rd place". No direct github link in the snippet provided for Creator Studio in the SHORT summary, 
            // but I should check if I missed it. Rescanning hackathons.txt...
            // "Footer with GitHub and project links" is mentioned as a feature. 
            // Wait, looking closer at hackathons.txt... 
            // "3rd place among innovative AI-powered builder teams"
            // I don't see a direct link for Creator Studio in the provided text file content for the second item (which is actually Cibo in the text file order, wait).
            // Let's re-read the file content carefully.
            // Item 1: Mitate.
            // Item 2: Cibo (ElevenLabs Worldwide Hackathon).
            // Item 3: Creator Studio (Columbia x Lovable).
            // Ok, I need to make sure I get the order and details right. I will follow the file content.
            // Cibo is strictly 2nd in the file. Creator Studio is 3rd.
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
            // No specific link in text, but implies repo structure exists.
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
        <section id="hackathons" className="py-20 px-4 bg-zinc-50 dark:bg-black/50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center gap-3 text-gray-900 dark:text-white"
                >
                    <Trophy className="text-yellow-500" />
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
                            className="bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 rounded-xl overflow-hidden hover:border-yellow-500/50 transition-all shadow-md hover:shadow-xl hover:shadow-yellow-500/10 dark:hover:shadow-yellow-500/10"
                        >
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-zinc-100">
                                                {hackathon.name}
                                            </h3>
                                            {hackathon.achievement && (
                                                <span className="px-3 py-1 text-xs font-semibold text-yellow-700 bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full border border-yellow-200 dark:border-yellow-700/50 flex items-center gap-1">
                                                    <Award className="w-3 h-3" />
                                                    {hackathon.achievement}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-lg text-gray-600 dark:text-zinc-300 font-medium mb-1">
                                            {hackathon.tagline}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-zinc-400">
                                            <span className="font-medium text-blue-600 dark:text-blue-400">{hackathon.event}</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {hackathon.location}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        {hackathon.links?.github && (
                                            <a href={hackathon.links.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-white transition-colors bg-gray-100 dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-zinc-700">
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {/* Add other links if available */}
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-zinc-400 mb-6 leading-relaxed">
                                    {hackathon.description}
                                </p>

                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-zinc-200 mb-3 flex items-center gap-2">
                                            <Code className="w-4 h-4 text-blue-500" />
                                            Key Contributions
                                        </h4>
                                        <ul className="space-y-2">
                                            {hackathon.achievements.map((item, i) => (
                                                <li key={i} className="text-sm text-gray-600 dark:text-zinc-400 flex items-start gap-2">
                                                    <span className="text-blue-500 mt-1.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-zinc-200 mb-3 flex items-center gap-2">
                                            <Code className="w-4 h-4 text-purple-500" />
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {hackathon.techStack.map((tech, i) => (
                                                <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-zinc-500 pt-4 border-t border-gray-100 dark:border-zinc-800">
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
