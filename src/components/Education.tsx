"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

type EducationItem = {
    school: string;
    degree: string;
    period: string;
    gpa: string;
    note?: string;
    focusAreas?: string[];
};

const education: EducationItem[] = [
    {
        school: "New York University",
        degree: "Master of Science in Computer Science",
        period: "2023 - 2025",
        gpa: "3.76/4.0",
        note: "Graduate work centered on applied AI, visualization, and scalable systems.",
        focusAreas: [
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
            "Natural Language Processing",
            "Information Visualization",
            "Big Data",
            "Blockchains",
            "Cloud Computing",
        ],
    },
    {
        school: "VIT University, Vellore",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        period: "2019 - 2023",
        gpa: "8.9/10",
        note: "Broad CS foundation spanning AI, statistics, product thinking, and business context.",
        focusAreas: ["AI/ML/DL", "Statistics", "Finance", "Business Management", "Design Thinking", "Innovation"],
    },
    {
        school: "Delhi Public School, R.K. Puram",
        degree: "High School (Science and Math)",
        period: "2017 - 2019",
        gpa: "92.8%",
    },
];

export default function Education() {
    return (
        <section id="education" className="bg-[var(--surface)] px-4 py-16 sm:px-6 lg:px-8 md:py-20">
            <div className="mx-auto max-w-5xl">
                <div className="mb-12 max-w-3xl space-y-4">
                    <div className="data-pill">
                        <span className="status-dot" />
                        Formal training in computer science, machine learning, visualization, and cloud systems
                    </div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-3xl font-bold text-[color:var(--foreground)]"
                    >
                        <GraduationCap className="text-[color:var(--accent)]" />
                        Education
                    </motion.h2>
                    <p className="text-base leading-8 text-[color:var(--muted)] md:text-lg">
                        Academic foundations that support the research, systems, and product-oriented work shown elsewhere in the portfolio.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {education.map((edu, index) => (
                        <motion.article
                            key={edu.school}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className="shell-panel surface-grid rounded-[1.75rem] p-1"
                        >
                            <div className="h-full rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)] p-6">
                                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[color:var(--border)] pb-4">
                                    <div>
                                        <p className="section-kicker">{edu.school}</p>
                                        <h3 className="mt-3 text-xl font-semibold text-[color:var(--foreground)]">{edu.degree}</h3>
                                    </div>
                                    <span className="rounded-full border border-[color:var(--border)] bg-[var(--code-bg)] px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                                        {edu.period}
                                    </span>
                                </div>

                                <div className="mt-5 space-y-4">
                                    <p className="text-sm text-[color:var(--muted)]">
                                        <span className="font-medium text-[color:var(--foreground)]">GPA:</span> {edu.gpa}
                                    </p>

                                    {edu.note && <p className="leading-7 text-[color:var(--foreground)]">{edu.note}</p>}

                                    {edu.focusAreas && (
                                        <div>
                                            <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                                Relevant coursework
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.focusAreas.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="rounded-full border border-[color:var(--border)] bg-[var(--card-bg)] px-3 py-1.5 text-xs font-medium text-[color:var(--foreground)]"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
