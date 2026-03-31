const education = [
  {
    school: "New York University",
    degree: "MS in Computer Science",
    period: "2023 – 2025",
    gpa: "3.76 / 4.0",
    notes: "Machine Learning, Deep Learning, Computer Vision, NLP, Big Data, Cloud Computing",
  },
  {
    school: "VIT University, Vellore",
    degree: "BTech in Computer Science and Engineering",
    period: "2019 – 2023",
    gpa: "8.4 / 10",
    notes: "AI/ML/DL, Statistics, Finance, Business Management",
  },
  {
    school: "Delhi Public School, R.K. Puram",
    degree: "High School — Science and Math",
    period: "2017 – 2019",
    gpa: "92.8%",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-4 py-8 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[color:var(--accent)] mb-4">
          Education
        </h2>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i}>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="font-medium text-sm text-[color:var(--text)]">{edu.school}</span>
                <span className="text-xs text-[color:var(--text-secondary)] opacity-70">{edu.period}</span>
              </div>
              <p className="text-sm text-[color:var(--text-secondary)]">{edu.degree} &middot; GPA: {edu.gpa}</p>
              {edu.notes && (
                <p className="text-xs text-[color:var(--text-secondary)] opacity-70 mt-0.5">{edu.notes}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
