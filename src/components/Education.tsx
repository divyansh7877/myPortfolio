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
        <section id="education" className="py-20 px-4 bg-zinc-900/30">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center gap-3"
                >
                    <GraduationCap className="text-blue-400" />
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
                            className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-blue-500/30 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-zinc-100">{edu.school}</h3>
                                    <p className="text-blue-400 text-sm">{edu.degree}</p>
                                </div>
                                <span className="text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-1 rounded">{edu.period}</span>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm text-zinc-400"><span className="text-zinc-500">GPA:</span> {edu.gpa}</p>
                                {edu.coursework && (
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        <span className="text-zinc-500">Relevant Coursework:</span> {edu.coursework}
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
