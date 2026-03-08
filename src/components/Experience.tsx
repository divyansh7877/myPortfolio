"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Calendar, MapPin } from "lucide-react";

type ExperienceItem = {
    title: string;
    company: string;
    period: string;
    location: string;
    badge?: string;
    focus: string;
    summary: string;
    achievements: string[];
    stack: string[];
    links?: { label: string; url: string }[];
};

const experiences: ExperienceItem[] = [
    {
        title: "Researcher",
        company: "NYU Neuroinformatics Lab",
        period: "Sep 2024 - Present",
        location: "New York, NY",
        badge: "Current",
        focus: "ML for neural activity detection",
        summary:
            "Working with neuroscientists to define ground-truth event labels in voltage imaging data and turn research workflows into usable tooling.",
        achievements: [
            "Trained models to achieve an F1 score of 0.92 for event detection.",
            "Built a fast, browser-based app for interactive exploration of neural calcium trace data.",
        ],
        stack: ["Machine Learning", "Deep Learning", "Research Tooling", "Visualization"],
        links: [
            { label: "GitHub", url: "https://github.com/divyansh7877/neuro-window-explorer" },
            { label: "Live App", url: "https://neuro-window-explorer.vercel.app/" },
        ],
    },
    {
        title: "Data Analyst",
        company: "Adeptmind",
        period: "Feb 2023 – Jul 2023",
        location: "Remote, Toronto, Canada",
        focus: "Growth experimentation and internal analytics",
        summary:
            "Combined traffic analysis, landing-page experimentation, and internal reporting to improve SEO performance and make client trends easier to act on.",
        achievements: [
            "Scaled landing pages from 10K to 80K, contributing to a 20% monthly increase in traffic.",
            "Created page content using LLMs and prompt engineering.",
            "Generated analytical reports for 19 clients and built a Streamlit dashboard for stakeholders.",
        ],
        stack: ["Analytics", "SEO", "LLMs", "Streamlit"],
    },
    {
        title: "Computer Vision Intern",
        company: "Enord",
        period: "Nov 2022 – Feb 2023",
        location: "New Delhi, India",
        focus: "Embedded computer vision",
        summary:
            "Built depth-estimation models for autonomous systems with an emphasis on real-time performance and deployment constraints.",
        achievements: [
            "Developed lightweight depth-estimation models using stereo cameras and PyTorch/CUDA.",
            "Optimized models for real-time deployment on embedded systems such as drones.",
        ],
        stack: ["PyTorch", "CUDA", "Stereo Vision", "Embedded Deployment"],
    },
    {
        title: "Head of Autonomous Department",
        company: "Team OJAS",
        period: "Sep 2020 – Feb 2022",
        location: "VIT Vellore, India",
        focus: "Autonomous systems leadership",
        summary:
            "Led autonomous vehicle work for Formula Student builds, coordinating perception, planning, and control efforts across the team.",
        achievements: [
            "Led the team to become the first Indian qualifiers for Formula Student Hungary.",
            "Managed parallel projects in perception, planning, and control.",
            "Implemented YOLO-based object detection models, achieving 92% accuracy.",
        ],
        stack: ["Perception", "Planning", "Control", "YOLO"],
    },
    {
        title: "ROS Internship",
        company: "Smartbridge",
        period: "Jun 2021 - Jul 2021",
        location: "Remote",
        focus: "Robotics simulation",
        summary:
            "Built and tested Robot Operating System simulations for different vehicle scenarios to validate behavior before deployment.",
        achievements: ["Using ROS, built robotic simulations for different vehicles and created testing environments."],
        stack: ["ROS", "Simulation", "Testing"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="px-4 py-16 sm:px-6 lg:px-8 md:py-20">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 max-w-3xl space-y-4">
                    <div className="data-pill">
                        <span className="status-dot" />
                        Research, ML, analytics, and autonomous systems
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-3xl font-bold text-[color:var(--foreground)]"
                    >
                        <Briefcase className="text-[color:var(--accent)]" />
                        Experience
                    </motion.h2>
                    <p className="text-base leading-8 text-[color:var(--muted)] md:text-lg">
                        Selected roles where I moved between research questions, product building, and execution work that
                        had to be practical, measurable, and easy for collaborators to use.
                    </p>
                </div>

                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <motion.article
                            key={`${exp.company}-${exp.title}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="shell-panel surface-grid rounded-[1.75rem] p-1"
                        >
                            <div className="rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)] p-6 md:p-7">
                                <div className="flex flex-col gap-5 border-b border-[color:var(--border)] pb-5 md:flex-row md:items-start md:justify-between">
                                    <div className="space-y-3">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <p className="section-kicker">{exp.company}</p>
                                            {exp.badge && (
                                                <span className="rounded-full border border-[color:var(--accent-soft)] bg-[var(--code-bg)] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--accent)]">
                                                    {exp.badge}
                                                </span>
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-semibold text-[color:var(--foreground)]">{exp.title}</h3>
                                            <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-[color:var(--accent)]">
                                                {exp.focus}
                                            </p>
                                        </div>
                                        <p className="max-w-2xl text-sm leading-7 text-[color:var(--muted)] md:text-base">
                                            {exp.summary}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3 text-sm text-[color:var(--muted)]">
                                        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.2em]">
                                            <Calendar className="h-3.5 w-3.5 text-[color:var(--accent)]" />
                                            {exp.period}
                                        </div>
                                        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-2 text-sm">
                                            <MapPin className="h-3.5 w-3.5 text-[color:var(--accent)]" />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid gap-6 pt-6 md:grid-cols-[1.15fr_0.85fr]">
                                    <div>
                                        <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                            Selected contributions
                                        </p>
                                        <ul className="space-y-3">
                                            {exp.achievements.map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[color:var(--muted)]">
                                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-5">
                                        <div>
                                            <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                                Technical context
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.stack.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="rounded-full border border-[color:var(--border)] bg-[var(--card-bg)] px-3 py-1.5 text-xs font-medium text-[color:var(--foreground)]"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {exp.links && (
                                            <div>
                                                <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                                    Relevant links
                                                </p>
                                                <div className="flex flex-wrap gap-3">
                                                    {exp.links.map((link) => (
                                                        <a
                                                            key={link.url}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                                                        >
                                                            {link.label}
                                                            <ArrowUpRight className="h-4 w-4" />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
