"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

// Skill data with relationships
const skillsData = [
    {
        id: "ml",
        name: "ML",
        level: 90,
        years: 4,
        color: "#ea580c",
        projects: ["Neural Activity Detection", "Depth Estimation", "YOLO Object Detection"],
        x: 50,
        y: 50,
    },
    {
        id: "genai",
        name: "GenAI",
        level: 85,
        years: 2,
        color: "#3b82f6",
        projects: ["Fine-Tuning Llama 3.1", "GPT-4 Pokémon Agent", "Social Media Automation"],
        x: 75,
        y: 30,
    },
    {
        id: "rag",
        name: "RAG",
        level: 88,
        years: 1.5,
        color: "#2563eb",
        projects: ["Expert-Call RAG Assistant", "Collections Strategy System"],
        x: 70,
        y: 65,
    },
    {
        id: "llmops",
        name: "LLMOps",
        level: 75,
        years: 1,
        color: "#3b82f6",
        projects: ["Fine-Tuning Llama 3.1", "Expert-Call RAG Assistant"],
        x: 88,
        y: 48,
    },
    {
        id: "cloud",
        name: "Cloud",
        level: 80,
        years: 2,
        color: "#2563eb",
        projects: ["Social Media Automation (AWS)", "Scalable Vector Search"],
        x: 25,
        y: 25,
    },
    {
        id: "python",
        name: "Python",
        level: 95,
        years: 5,
        color: "#f97316",
        projects: ["All ML/AI Projects", "Data Analysis", "Backend APIs"],
        x: 35,
        y: 55,
    },
    {
        id: "react",
        name: "React",
        level: 82,
        years: 2,
        color: "#3b82f6",
        projects: ["Neuro Window Explorer", "Collections Strategy System", "This Portfolio"],
        x: 20,
        y: 75,
    },
    {
        id: "databases",
        name: "Databases",
        level: 78,
        years: 3,
        color: "#ea580c",
        projects: ["LanceDB (RAG)", "ChromaDB", "MongoDB", "OpenSearch"],
        x: 55,
        y: 20,
    },
];

// Define connections between skills
const connections: [string, string][] = [
    ["ml", "genai"],
    ["ml", "python"],
    ["genai", "rag"],
    ["genai", "llmops"],
    ["rag", "databases"],
    ["rag", "python"],
    ["llmops", "cloud"],
    ["cloud", "databases"],
    ["python", "databases"],
    ["python", "react"],
    ["react", "databases"],
    ["ml", "cloud"],
    ["genai", "python"],
];

function SkillNode({ 
    skill, 
    onHover, 
    isHovered,
    isConnected,
    isDimmed,
    index
}: { 
    skill: typeof skillsData[0];
    onHover: (skill: typeof skillsData[0] | null) => void;
    isHovered: boolean;
    isConnected: boolean;
    isDimmed: boolean;
    index: number;
}) {
    const nodeSize = isHovered ? 70 : isConnected ? 60 : 50;
    
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
                scale: 1, 
                opacity: isDimmed ? 0.3 : 1,
                x: [0, Math.sin(index) * 3, 0],
                y: [0, Math.cos(index) * 3, 0],
            }}
            transition={{ 
                scale: { delay: index * 0.1, duration: 0.5, type: "spring" },
                opacity: { duration: 0.3 },
                x: { repeat: Infinity, duration: 3 + index * 0.5, ease: "easeInOut" },
                y: { repeat: Infinity, duration: 4 + index * 0.3, ease: "easeInOut" },
            }}
            className="absolute cursor-pointer"
            style={{ 
                left: `${skill.x}%`, 
                top: `${skill.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: isHovered ? 20 : 10,
            }}
            onMouseEnter={() => onHover(skill)}
            onMouseLeave={() => onHover(null)}
        >
            {/* Glow effect */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: nodeSize * 2,
                    height: nodeSize * 2,
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: `radial-gradient(circle, ${skill.color}40 0%, transparent 70%)`,
                }}
                animate={{
                    scale: isHovered ? [1, 1.3, 1] : 1,
                    opacity: isHovered ? [0.5, 0.8, 0.5] : isDimmed ? 0.1 : 0.3,
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            {/* Main node */}
            <motion.div
                className="relative rounded-full flex items-center justify-center"
                style={{
                    width: nodeSize,
                    height: nodeSize,
                    background: `radial-gradient(circle at 30% 30%, ${skill.color}, ${skill.color}90)`,
                    boxShadow: isHovered 
                        ? `0 0 30px ${skill.color}, 0 0 60px ${skill.color}50`
                        : `0 0 15px ${skill.color}60`,
                }}
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <span 
                    className="text-white font-bold text-sm"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                >
                    {skill.name}
                </span>
            </motion.div>
        </motion.div>
    );
}

function ConnectionLine({ 
    startSkill, 
    endSkill, 
    isHighlighted,
    isDimmed,
    index
}: { 
    startSkill: typeof skillsData[0];
    endSkill: typeof skillsData[0];
    isHighlighted: boolean;
    isDimmed: boolean;
    index: number;
}) {
    return (
        <motion.line
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
                pathLength: 1, 
                opacity: isDimmed ? 0.05 : isHighlighted ? 0.8 : 0.2 
            }}
            transition={{ 
                pathLength: { delay: index * 0.05, duration: 0.8 },
                opacity: { duration: 0.3 }
            }}
            x1={`${startSkill.x}%`}
            y1={`${startSkill.y}%`}
            x2={`${endSkill.x}%`}
            y2={`${endSkill.y}%`}
            stroke={isHighlighted ? "#ea580c" : "#d1d5db"}
            strokeWidth={isHighlighted ? 2 : 1}
            strokeLinecap="round"
        />
    );
}

function SkillTooltip({ skill, containerRef }: { skill: typeof skillsData[0]; containerRef: React.RefObject<HTMLDivElement | null> }) {
    const [position, setPosition] = useState({ left: 0, top: 0 });
    
    useEffect(() => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const skillX = (skill.x / 100) * rect.width;
            const skillY = (skill.y / 100) * rect.height;
            
            // Position tooltip to avoid going off-screen
            let left = skillX;
            let top = skillY - 120;
            
            if (top < 10) top = skillY + 60;
            if (left < 150) left = 150;
            if (left > rect.width - 150) left = rect.width - 150;
            
            setPosition({ left, top });
        }
    }, [skill, containerRef]);
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute z-50 pointer-events-none"
            style={{ left: position.left, top: position.top, transform: 'translateX(-50%)' }}
        >
            <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border-2 border-gray-200 dark:border-zinc-700 rounded-xl p-5 shadow-2xl min-w-[280px]">
                <div className="flex items-center gap-3 mb-4">
                    <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: skill.color, boxShadow: `0 0 20px ${skill.color}` }}
                    />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                </div>

                <div className="space-y-3">
                    {/* Skill Level */}
                    <div>
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-500 dark:text-zinc-400">Proficiency</span>
                            <span className="text-gray-900 dark:text-zinc-200 font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: skill.color }}
                            />
                        </div>
                    </div>

                    {/* Years */}
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500 dark:text-zinc-400">Experience</span>
                        <span className="text-gray-900 dark:text-zinc-200 font-medium">
                            {skill.years} {skill.years === 1 ? "year" : "years"}
                        </span>
                    </div>

                    {/* Projects */}
                    <div>
                        <span className="text-gray-500 dark:text-zinc-400 text-sm block mb-2">Related Projects</span>
                        <div className="flex flex-wrap gap-1.5">
                            {skill.projects.map((project, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-300 border border-gray-300 dark:border-zinc-700"
                                >
                                    {project}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<typeof skillsData[0] | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleHover = useCallback((skill: typeof skillsData[0] | null) => {
        setHoveredSkill(skill);
    }, []);

    // Get connected skill IDs
    const connectedSkillIds = hoveredSkill ? new Set(
        connections
            .filter(([a, b]) => a === hoveredSkill.id || b === hoveredSkill.id)
            .flatMap(([a, b]) => [a, b])
    ) : new Set<string>();

    // Get highlighted connections
    const highlightedConnections = hoveredSkill ? new Set(
        connections
            .filter(([a, b]) => a === hoveredSkill.id || b === hoveredSkill.id)
            .map(([a, b]) => `${a}-${b}`)
    ) : new Set<string>();

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-4 flex items-center gap-3 text-gray-900 dark:text-white"
                >
                    <Sparkles className="text-blue-500" />
                    Skills
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 dark:text-zinc-400 mb-8"
                >
                    Hover over nodes to explore skill details and relationships
                </motion.p>

                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative h-[500px] md:h-[600px] bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-zinc-900/80 dark:via-zinc-900/50 dark:to-zinc-900/80 rounded-2xl border-2 border-gray-200 dark:border-zinc-800 overflow-hidden"
                >
                    {/* Background pattern */}
                    <div
                        className="absolute inset-0 opacity-5 dark:opacity-10"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                            backgroundSize: '40px 40px',
                        }}
                    />
                    
                    {/* Connection lines SVG */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                        {connections.map(([startId, endId], index) => {
                            const startSkill = skillsData.find((s) => s.id === startId);
                            const endSkill = skillsData.find((s) => s.id === endId);
                            if (!startSkill || !endSkill) return null;

                            const key = `${startId}-${endId}`;
                            const isHighlighted = highlightedConnections.has(key);
                            const isDimmed = hoveredSkill !== null && !isHighlighted;

                            return (
                                <ConnectionLine
                                    key={key}
                                    startSkill={startSkill}
                                    endSkill={endSkill}
                                    isHighlighted={isHighlighted}
                                    isDimmed={isDimmed}
                                    index={index}
                                />
                            );
                        })}
                    </svg>

                    {/* Skill nodes */}
                    {skillsData.map((skill, index) => {
                        const isHovered = hoveredSkill?.id === skill.id;
                        const isConnected = connectedSkillIds.has(skill.id);
                        const isDimmed = hoveredSkill !== null && !isHovered && !isConnected;

                        return (
                            <SkillNode
                                key={skill.id}
                                skill={skill}
                                onHover={handleHover}
                                isHovered={isHovered}
                                isConnected={isConnected}
                                isDimmed={isDimmed}
                                index={index}
                            />
                        );
                    })}

                    {/* Tooltip */}
                    <AnimatePresence>
                        {hoveredSkill && <SkillTooltip skill={hoveredSkill} containerRef={containerRef} />}
                    </AnimatePresence>

                    {/* Legend */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-3 z-10">
                        {skillsData.map((skill) => (
                            <div
                                key={skill.id}
                                className={`flex items-center gap-2 text-xs transition-opacity duration-300 ${
                                    hoveredSkill && hoveredSkill.id !== skill.id && !connectedSkillIds.has(skill.id)
                                        ? "opacity-30"
                                        : "opacity-100"
                                }`}
                            >
                                <div
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{ backgroundColor: skill.color }}
                                />
                                <span className="text-gray-600 dark:text-zinc-400">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
