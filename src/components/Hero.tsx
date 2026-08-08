import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import ComputationalPipeline from "./ComputationalPipeline";

export default function Hero() {
  return (
    <section id="hero" className="hero-section editorial-grid site-container">
      <div className="col-span-12 lg:col-span-7">
        <div className="section-index-row">
          <span className="section-index text-[var(--orange)]">00 / Positioning</span>
          <span className="index-dash" />
        </div>

        <h1 className="hero-title">
          Div<br />Agarwal
        </h1>
        <p className="hero-lede">
          AI/ML engineer building intelligent systems across research and product. NYU CS. Full-stack execution.
        </p>
        <p className="hero-summary">
          I work in the gap between a model that performs in a notebook and a system that holds up when real users touch it—retrieval pipelines, ML workflows, agents, and the interfaces around them.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button-primary group">
            View systems <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a href="#contact" className="button-secondary">Get in touch</a>
        </div>

        <nav aria-label="Profile links" className="hero-profile-links">
          <a href="https://github.com/divyansh7877" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" aria-hidden="true" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/div2201/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
          </a>
          <Link href="/blog">Journal</Link>
        </nav>
      </div>

      <div className="col-span-12 mt-16 lg:col-span-5 lg:mt-0">
        <ComputationalPipeline />
      </div>
    </section>
  );
}
