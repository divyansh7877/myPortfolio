const experiences = [
  { title: "AI Engineer (Contract)", company: "Daylit", companyUrl: "https://www.daylit.com/", period: "Apr 2026 — Present", location: "San Francisco", signal: "Risk models", summary: "Building ML risk prediction, real-time Airflow pipelines, and conversation intelligence for accounts-receivable collections." },
  { title: "AI Engineer (Contract)", company: "Variant Avatars", companyUrl: "https://variantavatars.com/", period: "Mar 2026 — Present", location: "San Francisco", signal: "+30% relevance", summary: "Improving agentic retrieval and multi-agent financial research systems across market data, audio, and presentations." },
  { title: "Software Engineer", company: "AdsGency AI", companyUrl: "https://adsgency.ai", period: "Feb — Mar 2026", location: "San Francisco", signal: "NL → SQL", summary: "Built natural-language analytics over DuckDB and ranking systems for multimodal advertising data." },
  { title: "Researcher", company: "NYU Neuroinformatics Lab", companyUrl: "https://github.com/divyansh7877/neuro-window-explorer", period: "Oct 2024 — Feb 2026", location: "New York", signal: "0.92 F1", summary: "Trained neural event-detection models and shipped a browser tool for exploring calcium-imaging traces." },
  { title: "Data Analyst", company: "Adeptmind", period: "Feb — Jul 2023", location: "Toronto", signal: "+20% traffic", summary: "Scaled data-driven landing pages from 10K to 80K and built performance monitoring across 19 clients." },
  { title: "Research Engineer", company: "Enord", period: "Nov 2022 — Feb 2023", location: "New Delhi", signal: "Depth / ROS", summary: "Developed deep-learning depth estimation for autonomous drone navigation on ROS and NVIDIA systems." },
  { title: "Head of Autonomous", company: "Team OJAS · Formula Student", period: "Sep 2020 — Feb 2022", location: "Vellore", signal: "92% vision", summary: "Led perception, planning, and control; helped the team become the first Indian qualifiers for Formula Student Hungary." },
];

function ExperienceContent({ experience }: { experience: (typeof experiences)[number] }) {
  return (
    <>
      <div className="experience-meta">{experience.period}<br />{experience.location}</div>
      <div className="experience-body">
        <h3 className="experience-title">{experience.title} · {experience.company}</h3>
        <p className="experience-copy">{experience.summary}</p>
      </div>
      <span className="experience-signal">{experience.signal}</span>
    </>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="portfolio-section site-container">
      <div className="section-heading-row">
        <p className="section-index">01 / Experience</p>
        <p className="section-index">2020 — Now</p>
      </div>
      <div>
        {experiences.map((experience) => experience.companyUrl ? (
          <a className="experience-row" href={experience.companyUrl} target="_blank" rel="noreferrer" key={experience.company}>
            <ExperienceContent experience={experience} />
          </a>
        ) : (
          <article className="experience-row" key={experience.company}>
            <ExperienceContent experience={experience} />
          </article>
        ))}
      </div>
    </section>
  );
}
