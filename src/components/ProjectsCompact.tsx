import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  { title: "Neuro Window Explorer", description: "Interactive calcium-trace analysis for neuroscience research, paired with an event detector reaching 0.92 F1.", tags: ["Next.js", "Python", "ML"], github: "https://github.com/divyansh7877/neuro-window-explorer", demo: "https://neuro-window-explorer.vercel.app/", diagram: "trace" },
  { title: "Expert-Call RAG", description: "A local, source-grounded retrieval system for searching and reasoning over expert-call transcript archives.", tags: ["LlamaIndex", "LanceDB", "Gradio"], github: "https://github.com/divyansh7877/RAG-LLM-TC2", diagram: "rag" },
  { title: "Social Automation", description: "A serverless pipeline connecting media retrieval, computer vision, Claude captioning, and OpenSearch.", tags: ["AWS Lambda", "Bedrock", "Python"], diagram: "pipeline" },
  { title: "Collections Strategy", description: "An AI product that turns Excel and PDF inputs into transparent, multi-step collections strategies.", tags: ["FastAPI", "React", "OpenAI"], github: "https://github.com/divyansh7877/debt-collector", diagram: "strategy" },
];

function ProjectDiagram({ type }: { type: string }) {
  if (type === "trace") return (
    <svg className="project-diagram" viewBox="0 0 360 160" role="img" aria-label="Calcium signal trace diagram">
      <path d="M8 109 L35 108 L45 101 L52 36 L61 113 L90 110 L104 107 L113 67 L121 111 L159 109 L174 105 L184 23 L193 114 L231 109 L244 102 L252 54 L260 111 L297 108 L309 96 L318 72 L327 111 L352 108" fill="none" stroke="currentColor" strokeWidth="3" />
      <line x1="8" y1="130" x2="352" y2="130" stroke="var(--hairline)" /><text x="8" y="150" className="diagram-label">TIME / NEURAL RESPONSE</text>
    </svg>
  );
  if (type === "rag") return (
    <svg className="project-diagram" viewBox="0 0 360 160" role="img" aria-label="Retrieval augmented generation diagram">
      <g fill="none" stroke="currentColor"><rect x="8" y="48" width="74" height="54"/><rect x="143" y="48" width="74" height="54"/><rect x="278" y="48" width="74" height="54"/><path d="M82 75h61m74 0h61" strokeDasharray="5 5"/></g>
      <text x="22" y="79" className="diagram-label">CORPUS</text><text x="158" y="79" className="diagram-label">RETRIEVE</text><text x="298" y="79" className="diagram-label">ANSWER</text>
    </svg>
  );
  if (type === "pipeline") return (
    <svg className="project-diagram" viewBox="0 0 360 160" role="img" aria-label="Cloud automation pipeline diagram">
      <path d="M22 80h316" stroke="currentColor" strokeWidth="2"/><g fill="var(--surface)" stroke="currentColor"><circle cx="35" cy="80" r="18"/><circle cx="132" cy="80" r="18"/><circle cx="229" cy="80" r="18"/><circle cx="326" cy="80" r="18"/></g>
      <text x="20" y="119" className="diagram-label">FETCH</text><text x="112" y="119" className="diagram-label">VISION</text><text x="213" y="119" className="diagram-label">CLAUDE</text><text x="305" y="119" className="diagram-label">INDEX</text>
    </svg>
  );
  return (
    <svg className="project-diagram" viewBox="0 0 360 160" role="img" aria-label="Collections strategy timeline diagram">
      <line x1="30" y1="80" x2="330" y2="80" stroke="currentColor" strokeWidth="2"/><g fill="var(--surface)" stroke="currentColor" strokeWidth="2"><rect x="30" y="66" width="28" height="28"/><rect x="117" y="66" width="28" height="28"/><rect x="204" y="66" width="28" height="28"/><rect x="291" y="66" width="28" height="28"/></g>
      <text x="29" y="120" className="diagram-label">INGEST</text><text x="110" y="120" className="diagram-label">SCORE</text><text x="198" y="120" className="diagram-label">PLAN</text><text x="283" y="120" className="diagram-label">ACTION</text>
    </svg>
  );
}

export default function ProjectsCompact() {
  return (
    <section id="projects" className="portfolio-section site-container">
      <div className="section-heading-row">
        <p className="section-index">02 / Selected systems</p>
        <Link href="/projects" className="section-action-link">Full archive →</Link>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-visual"><ProjectDiagram type={project.diagram} /></div>
            <div className="project-card-header">
              <h3 className="project-card-title">{project.title}</h3>
              <div className="project-links">
                {project.github && <a className="project-icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`}><Github size={16}/></a>}
                {project.demo && <a className="project-icon-link" href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} live site`}><ExternalLink size={16}/></a>}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">{project.tags.map((tag) => <span className="project-tag" key={tag}>{tag}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
