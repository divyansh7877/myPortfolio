export default function Skills() {
  return (
    <section id="skills" className="px-4 py-8 sm:px-6">
      <div className="max-w-2xl">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-[color:var(--accent)] mb-3">
          Skills
        </h2>
        <p className="text-[color:var(--text-secondary)] leading-relaxed text-sm">
          <span className="font-medium text-[color:var(--text)]">Core:</span>{" "}
          Python, PyTorch, SQL, React / Next.js, AWS, Docker, Git
        </p>
        <p className="text-[color:var(--text-secondary)] leading-relaxed text-sm mt-1">
          <span className="font-medium text-[color:var(--text)]">Also:</span>{" "}
          HuggingFace, LlamaIndex, RAG, LangGraph, FastAPI, TensorFlow, Pandas, NumPy, Solidity, ROS, MATLAB
        </p>
      </div>
    </section>
  );
}
