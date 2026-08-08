"use client";

import { useRef } from "react";
import { Binary, Database, SearchCode, TerminalSquare } from "lucide-react";

const stages = [
  { label: "Input vectors", detail: "Q_32 / V_08", icon: Binary, className: "pipeline-stage-one" },
  { label: "Embedding field", detail: "DIM / 1536", icon: Database, className: "pipeline-stage-two" },
  { label: "Retrieval nodes", detail: "TOP_K / 12", icon: SearchCode, className: "pipeline-stage-three" },
  { label: "Grounded out", detail: "CITE / TRUE", icon: TerminalSquare, className: "pipeline-stage-four" },
];

export default function ComputationalPipeline() {
  const objectRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    objectRef.current?.style.setProperty("--pipeline-rx", `${(-y * 8).toFixed(2)}deg`);
    objectRef.current?.style.setProperty("--pipeline-ry", `${(x * 8).toFixed(2)}deg`);
  };

  const resetPointer = () => {
    objectRef.current?.style.setProperty("--pipeline-rx", "0deg");
    objectRef.current?.style.setProperty("--pipeline-ry", "0deg");
  };

  return (
    <div className="pipeline-shell" onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <div className="pipeline-object" ref={objectRef}>
        <svg className="pipeline-connections" viewBox="0 0 440 440" aria-hidden="true">
          <path d="M78 112 L166 216 L294 126 L352 294" />
          <circle cx="78" cy="112" r="4" />
          <circle cx="166" cy="216" r="4" />
          <circle cx="294" cy="126" r="4" />
          <circle cx="352" cy="294" r="4" />
        </svg>

        {stages.map(({ label, detail, icon: Icon, className }, index) => (
          <div className={`pipeline-stage ${className}`} key={label}>
            <span className="pipeline-step">0{index + 1}</span>
            <Icon className="pipeline-icon" strokeWidth={1.5} aria-hidden="true" />
            <span className="pipeline-label">{label}</span>
            <span className="pipeline-detail">{detail}</span>
          </div>
        ))}
      </div>
      <div className="pipeline-status">
        <span><i /> Pipeline active</span>
        <span>Coords [32, 114, 09]</span>
      </div>
    </div>
  );
}
