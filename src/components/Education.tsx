const education = [
  { school: "New York University", degree: "MS · Computer Science", period: "2023 — 2025", gpa: "3.76 / 4.0", notes: "Machine learning, vision, NLP, big data, cloud computing" },
  { school: "VIT University", degree: "BTech · Computer Science", period: "2019 — 2023", gpa: "8.4 / 10", notes: "AI/ML, statistics, finance, business management" },
  { school: "Delhi Public School, R.K. Puram", degree: "Science + Mathematics", period: "2017 — 2019", gpa: "92.8%", notes: "New Delhi, India" },
];

export default function Education() {
  return (
    <section id="education" className="portfolio-section site-container">
      <div className="section-heading-row"><p className="section-index">04 / Education</p><p className="section-index">New York · Vellore · Delhi</p></div>
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.school}>
            <p className="education-period">{item.period}</p>
            <h3 className="education-school">{item.school}</h3>
            <p className="education-degree">{item.degree}</p>
            <p className="education-gpa">GPA · {item.gpa}</p>
            <p className="education-notes">{item.notes}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
