"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
    {
        title: "Researcher",
        company: "NYU Neuroinformatics Lab",
        period: "Sep 2024 - Present",
        location: "New York, NY",
        description: "Focusing on defining and detecting events in voltage imaging data that reflect neural activity. Collaborating with neuroscientists to establish ground truth labels and using ML/DL to identify distinct event types.",
        achievements: [
            "Model training to achieve a F1 score of 0.92 for event detection.",
            "Built a fast, browser-based app for interactive exploration of neural calcium trace data."
        ],
        links: [
            { label: "View on GitHub", url: "https://github.com/divyansh7877/neuro-window-explorer" },
            { label: "Web Application", url: "https://neuro-window-explorer.vercel.app/" }
        ]
    },
    {
        title: "Data Analyst",
        company: "Adeptmind",
        period: "Feb 2023 – Jul 2023",
        location: "Remote, Toronto, Canada",
        description: "Analyzed data and optimized landing pages for improved traffic and SEO performance.",
        achievements: [
            "Scaled landing pages from 10K to 80K, resulting in a 20% monthly increase in traffic.",
            "Created page content using LLMs and prompt engineering.",
            "Generated analytical reports for 19 clients and monitored SEO performance.",
            "Built a dashboard with Streamlit for internal stakeholders."
        ]
    },
    {
        title: "Computer Vision Intern",
        company: "Enord",
        period: "Nov 2022 – Feb 2023",
        location: "New Delhi, India",
        description: "Developed computer vision models for autonomous systems.",
        achievements: [
            "Developed lightweight depth estimation models using stereo cameras and PyTorch/CUDA.",
            "Optimized models for real-time deployment on embedded systems such as drones."
        ]
    },
    {
        title: "Head of Autonomous Department",
        company: "Team OJAS",
        period: "Sep 2020 – Feb 2022",
        location: "VIT Vellore, India",
        description: "Led the autonomous vehicle team for Formula Student competitions.",
        achievements: [
            "Led the team to become the first Indian qualifiers for Formula Student Hungary.",
            "Managed parallel projects in perception, planning, and control.",
            "Implemented YOLO-based object detection models, achieving 92% accuracy."
        ]
    },
    {
        title: "ROS Internship",
        company: "Smartbridge",
        period: "Jun 2021 - Jul 2021",
        location: "Remote",
        description: "Worked on Robot Operating System (ROS) simulations.",
        achievements: [
            "Using ROS, built robotic simulations for different vehicles and created testing environments."
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center gap-3"
                >
                    <Briefcase className="text-indigo-400" />
                    Experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l border-zinc-800 hover:border-indigo-500/50 transition-colors"
                        >
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-zinc-800 ring-4 ring-zinc-950 group-hover:bg-indigo-500 transition-colors" />

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                <h3 className="text-xl font-semibold text-zinc-100">{exp.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-zinc-500">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {exp.period}</span>
                                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                                </div>
                            </div>

                            <div className="text-indigo-400 font-medium mb-4">{exp.company}</div>

                            <p className="text-zinc-400 mb-4 leading-relaxed">{exp.description}</p>

                            <ul className="space-y-2 mb-4">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="text-zinc-400 text-sm flex items-start gap-2">
                                        <span className="text-indigo-500 mt-1.5">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {exp.links && (
                                <div className="flex gap-4 mt-4">
                                    {exp.links.map((link, i) => (
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-sm text-indigo-400 hover:text-indigo-300 underline underline-offset-4">
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
