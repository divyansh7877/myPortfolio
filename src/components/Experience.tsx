export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "AdsGency AI",
      companyUrl: "https://adsgency.ai",
      period: "Feb 2026 – Present",
      location: "San Francisco, CA",
      bullets: [
        "Built a natural language querying system generating SQL via DuckDB across multiple data sources.",
        "Developed a ranking and scoring system optimizing data selection for audio, image, and video ad generation.",
      ],
    },
    {
      title: "Researcher",
      company: "NYU Neuroinformatics Lab",
      companyUrl: "https://github.com/divyansh7877/neuro-window-explorer",
      period: "Oct 2024 – Feb 2026",
      location: "New York, NY",
      bullets: [
        "Trained ML/DL models for neural event detection — achieving 0.92 F1 on voltage imaging data.",
        "Built a browser-based tool for interactive exploration of calcium trace data used by the lab team.",
      ],
    },
    {
      title: "Data Analyst",
      company: "Adeptmind",
      period: "Feb 2023 – Jul 2023",
      location: "Toronto, Canada",
      bullets: [
        "Scaled landing pages from 10K to 80K, driving a 20% monthly traffic increase via LLM-generated content and SEO.",
        "Built a Streamlit dashboard for monitoring performance across 19 clients.",
      ],
    },
    {
      title: "Computer Vision Intern",
      company: "Enord",
      period: "Nov 2022 – Feb 2023",
      location: "New Delhi, India",
      bullets: [
        "Developed lightweight depth estimation models with stereo cameras and PyTorch/CUDA for drone deployment.",
      ],
    },
    {
      title: "Head of Autonomous Department",
      company: "Team OJAS (Formula Student)",
      period: "Sep 2020 – Feb 2022",
      location: "VIT Vellore, India",
      bullets: [
        "Led team to become the first Indian qualifiers for Formula Student Hungary.",
        "Implemented YOLO-based detection achieving 92% accuracy; managed perception, planning, and control tracks.",
      ],
    },
  ];

  return (
    <section id="experience" className="px-4 py-8 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[color:var(--accent)] mb-5">
          Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                <span className="font-medium text-sm text-[color:var(--text)]">{exp.title}</span>
                <span className="text-[color:var(--text-secondary)] text-sm">&mdash;</span>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[color:var(--accent)] hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span className="text-sm text-[color:var(--text-secondary)]">{exp.company}</span>
                )}
                <span className="text-xs text-[color:var(--text-secondary)] opacity-70">
                  {exp.period} &middot; {exp.location}
                </span>
              </div>
              <ul className="space-y-1">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-sm text-[color:var(--text-secondary)] leading-relaxed flex items-start gap-2">
                    <span className="text-[color:var(--accent)] mt-1 shrink-0 text-xs">&bull;</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
