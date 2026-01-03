"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Expert-Call RAG Assistant",
        description: "A locally-run Retrieval-Augmented Generation (RAG) system that allows users to query a collection of expert-call transcripts. Uses Llama-3.1-8B for inference and LanceDB for vector storage.",
        tags: ["Python", "Gradio", "LanceDB", "LlamaIndex", "Llama 3.1"],
        links: {
            github: "https://github.com/divyansh7877/RAG-LLM-TC2"
        }
    },
    {
        title: "Cloud-Native Social Media Automation",
        description: "Serverless pipeline on AWS to automate social media posting. Fetches photos, analyzes them with Rekognition, generates captions with Claude 3, and posts to platforms.",
        tags: ["AWS Lambda", "Cognito", "Bedrock", "OpenSearch", "Python"],
        links: {}
    },
    {
        title: "Fine-Tuning Llama 3.1-8B",
        description: "Kaggle competition entry to verify math answers. Achieved 0.85 accuracy using LoRA adapters, prompt engineering, and hyperparameter optimization.",
        tags: ["PyTorch", "LoRA", "Transformers", "LLMs"],
        links: {
            github: "https://github.com/divyansh7877/DeepLearning_Midterm/tree/main"
        }
    },
    {
        title: "Scalable Vector Search Music Recs",
        description: "Large-scale recommendation system using Spotify Million Playlist Dataset. Generated embeddings with Word2Vec and used ChromaDB for similarity search.",
        tags: ["Spark", "MongoDB", "ChromaDB", "Word2Vec"],
        links: {}
    },
    {
        title: "ERC-721 NFT Smart Contract",
        description: "Deployed an NFT smart contract on Sepolia testnet with IPFS integration for decentralized storage. Features minting limits and royalty enforcement.",
        tags: ["Solidity", "IPFS", "Ethereum", "Web3"],
        links: {
            demo: "https://testnets.opensea.io/assets/sepolia/0xa8b6ff7ddb28b09cb79bb04848d98e5a11089a7c/1"
        }
    },
    {
        title: "Trade Statistics Visualization",
        description: "Interactive visualization of OECD trade data using network maps and geo-spatial data. Built with Streamlit and Plotly.",
        tags: ["Python", "Streamlit", "Plotly", "NetworkX"],
        links: {
            github: "https://github.com/divyansh7877/OECD-Trade-Statistics"
        }
    },
    {
        title: "Collections Strategy Management System",
        description: "AI-powered debt collection management system with web interface. Features AI-generated collection strategies, timeline-based action blocks, contact management, and Excel/PDF data import capabilities.",
        tags: ["Python", "FastAPI", "React", "OpenAI API", "SQLite"],
        links: {
            github: "https://github.com/divyansh7877/debt-collector"
        }
    },
    {
        title: "GPT-4 Pokémon Showdown Agent",
        description: "Explored strategic capabilities of GPT-4 in competitive Pokémon battles. Implemented context-aware prompting for decision making.",
        tags: ["Python", "GPT-4", "Game AI"],
        links: {}
    },
    {
        title: "Neuro Window Explorer",
        description: "A fast, browser-based application for interactive exploration and visualization of neural calcium trace data. Developed for detecting neural activity patterns using machine learning and deep learning techniques.",
        tags: ["TypeScript", "Next.js", "Python", "Machine Learning"],
        links: {
            github: "https://github.com/divyansh7877/neuro-window-explorer",
            demo: "https://neuro-window-explorer.vercel.app/"
        }
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 bg-[var(--surface)]">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center gap-3 text-[color:var(--foreground)]"
                >
                    <Code2 className="text-[color:var(--accent)]" />
                    Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-[var(--card-bg)] border-2 border-[color:var(--border)] rounded-xl overflow-hidden hover:border-[color:var(--accent)] transition-all hover:-translate-y-1 hover:shadow-2xl"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <h3 className="text-xl font-semibold text-[color:var(--foreground)] mb-3 group-hover:text-[color:var(--accent)] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-[color:var(--muted)] text-sm mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--code-bg)] text-[color:var(--foreground)] border border-[color:var(--border)]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[color:var(--border)]">
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors">
                                            <Github className="w-4 h-4" />
                                            Code
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--accent)] transition-colors">
                                            <ExternalLink className="w-4 h-4" />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
