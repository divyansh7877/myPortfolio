"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
    {
        school: "New York University",
        degree: "Master of Science in Computer Science",
        period: "2023 - 2025",
        gpa: "3.76/4.0",
        coursework: "Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Information Visualization, Big Data, Blockchains, Cloud Computing"
    },
    {
        school: "VIT University, Vellore",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        period: "2019 - 2023",
        gpa: "8.9/10",
        coursework: "AI/ML/DL, Statistics, Finance, Business Management, Design Thinking, Innovation."
    },
    {
        school: "Delhi Public School, R.K. Puram",
        degree: "High School (Science and Math)",
        period: "2017 - 2019",
        gpa: "92.8%"
    }
];

export default function Education() {
    return (
        <section id="education" className="py-20 px-4 bg-[var(--surface)]">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center gap-3"
                >
                    <GraduationCap className="text-[color:var(--accent)]" />
                    Education
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[var(--card-bg)] border border-[color:var(--border)] p-6 rounded-xl hover:border-[color:var(--accent)] hover:shadow-lg transition-all"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{edu.school}</h3>
                                    <p className="text-[color:var(--accent)] text-sm">{edu.degree}</p>
                                </div>
                                <span className="text-xs font-mono text-[color:var(--muted)] bg-[var(--code-bg)] px-2 py-1 rounded border border-[color:var(--border)]">{edu.period}</span>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm text-[color:var(--muted)]"><span className="text-[color:var(--muted)]">GPA:</span> {edu.gpa}</p>
                                {edu.coursework && (
                                    <p className="text-sm text-[color:var(--muted)] leading-relaxed">
                                        <span className="text-[color:var(--muted)]">Relevant Coursework:</span> {edu.coursework}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
