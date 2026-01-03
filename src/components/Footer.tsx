"use client";

import { Github, Linkedin, FileText, Mail, Download } from "lucide-react";
import { trackFileDownload } from "@/lib/supabase";

interface DocumentLink {
  name: string;
  href: string;
}

const documents: DocumentLink[] = [
  { name: "Resume", href: "/myPortfolio/Divyansh_Agarwal_Resume.pdf" },
  { name: "Transcripts", href: "/myPortfolio/Divyansh_Agarwal_Transcript_og.pdf" },
  { name: "PyMetrics", href: "/myPortfolio/Divyansh_Agarwal_PyMetrics.pdf" },
  { name: "Diploma", href: "/myPortfolio/Diploma Divyansh.pdf" },
];

export default function Footer() {
  const handleDownload = async (doc: DocumentLink) => {
    // Track the download in Supabase
    await trackFileDownload(doc.name, doc.href);
  };

  return (
    <footer id="contact" className="py-12 border-t border-[color:var(--border)] bg-[var(--surface)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="https://github.com/divyansh7877"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[color:var(--border)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-all"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/div2201/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[color:var(--border)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-all"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="mailto:da3245@nyu.edu"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--card-bg)] border border-[color:var(--border)] hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] transition-all"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {documents.map((doc) => (
            <a
              key={doc.name}
              href={doc.href}
              download
              onClick={() => handleDownload(doc)}
              className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-[var(--card-bg)] border border-[color:var(--border)] hover:border-[color:var(--accent)] hover:bg-[var(--surface)] hover:shadow-lg transition-all duration-300"
            >
              <FileText className="w-5 h-5 text-[color:var(--muted)] group-hover:text-[color:var(--accent)] transition-colors" />
              <span className="text-lg font-medium text-[color:var(--muted)] group-hover:text-[color:var(--accent)] transition-colors">
                {doc.name}
              </span>
              <Download className="w-4 h-4 text-[color:var(--muted)] group-hover:text-[color:var(--accent)] transition-colors opacity-0 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <p className="text-[color:var(--muted)] text-sm">
          © {new Date().getFullYear()} Div Agarwal. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
