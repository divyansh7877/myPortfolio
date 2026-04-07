'use client';

import Script from 'next/script';
import { ArrowRight } from 'lucide-react';

const SUBSTACK_URL = 'https://diivviii.substack.com';

interface SubstackPost {
  title: string;
  subtitle: string;
  url: string;
}

// Add posts here. Get the embed snippet from your Substack post's share menu.
const POSTS: SubstackPost[] = [
  {
    title: 'Project Idea - 1',
    subtitle: 'project ideas I would love to collaborate on',
    url: 'https://diivviii.substack.com/p/project-idea-1',
  },
];

export default function SubstackPosts() {
  return (
    <section className="space-y-6">
      {/* Section header */}
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div className="space-y-1">
          <p className="section-kicker">From Substack</p>
          <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--foreground)]">
            Latest posts
          </h2>
          <p className="text-sm text-[color:var(--muted)] leading-relaxed max-w-xl">
            Writing published on Substack — essays, notes, and experiments.
          </p>
        </div>
        <a
          href={SUBSTACK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-2 text-sm font-medium text-[color:var(--accent)] transition-all duration-300 hover:border-[color:var(--accent)] hover:-translate-y-0.5 shrink-0"
        >
          View all on Substack
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Embed cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <div
            key={post.url}
            className="substack-post-embed rounded-[1.5rem] overflow-hidden"
          >
            <p lang="en">{post.title} by Grow Together</p>
            <p>{post.subtitle}</p>
            <a data-post-link href={post.url}>
              Read on Substack
            </a>
          </div>
        ))}
      </div>

      {/* Substack embed SDK — loaded once, enhances all .substack-post-embed divs on the page */}
      <Script
        src="https://substack.com/embedjs/embed.js"
        strategy="lazyOnload"
        charSet="utf-8"
      />

      {/* Subscribe nudge */}
      <div className="rounded-[1.5rem] border border-[color:var(--border)] bg-[var(--panel-bg)] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[color:var(--muted)] text-center sm:text-left">
          Enjoying the writing? Subscribe to get new posts in your inbox.
        </p>
        <a
          href={`${SUBSTACK_URL}/#/portal/signup`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[color:var(--accent-soft)] bg-[var(--code-bg)] px-5 py-2.5 text-sm font-medium text-[color:var(--accent)] transition-all duration-300 hover:border-[color:var(--accent)] hover:-translate-y-0.5 shrink-0"
        >
          Subscribe free
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
