const groups = [
  { title: "Intelligence", items: ["PyTorch", "Hugging Face", "RAG + LlamaIndex", "LangGraph", "Computer Vision"] },
  { title: "Systems", items: ["Python", "FastAPI", "SQL + DuckDB", "AWS", "Docker"] },
  { title: "Interfaces", items: ["TypeScript", "React + Next.js", "Data visualization", "Streamlit", "Git"] },
];

export default function Skills() {
  return (
    <section id="skills" className="portfolio-section site-container">
      <div className="section-heading-row"><p className="section-index">03 / Capabilities</p><p className="section-index">Tools follow problems</p></div>
      <div className="skills-grid">
        {groups.map((group) => (
          <div className="skill-column" key={group.title}>
            <h3>{group.title}</h3>
            <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
