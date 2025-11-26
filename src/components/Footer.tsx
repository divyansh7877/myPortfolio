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
    <footer id="contact" className="py-12 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <a
            href="https://github.com/divyansh7877"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-indigo-500 hover:text-indigo-400 transition-all"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/div2201/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-indigo-500 hover:text-indigo-400 transition-all"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="mailto:da3245@nyu.edu"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-indigo-500 hover:text-indigo-400 transition-all"
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
              className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-900 hover:shadow-[0_0_20px_-5px_rgba(99,102,241,0.2)] transition-all duration-300"
            >
              <FileText className="w-5 h-5 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
              <span className="text-lg font-medium text-zinc-300 group-hover:text-indigo-300 transition-colors">
                {doc.name}
              </span>
              <Download className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400/70 transition-colors opacity-0 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        <p className="text-zinc-600 text-sm">
          © {new Date().getFullYear()} Divyansh Agarwal. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
