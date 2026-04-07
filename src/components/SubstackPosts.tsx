'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Rss } from 'lucide-react';

const SUBSTACK_URL = 'https://diivviii.substack.com';
const FEED_URL = `${SUBSTACK_URL}/feed`;

interface SubstackPost {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail: string | null;
}

function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(dateStr));
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/gi, ' ').trim();
}

function extractThumbnail(item: Element): string | null {
  // Try <media:content> or <media:thumbnail>
  const mediaNs = 'http://search.yahoo.com/mrss/';
  const mediaContent = item.getElementsByTagNameNS(mediaNs, 'content')[0];
  const mediaThumbnail = item.getElementsByTagNameNS(mediaNs, 'thumbnail')[0];
  if (mediaContent?.getAttribute('url')) return mediaContent.getAttribute('url');
  if (mediaThumbnail?.getAttribute('url')) return mediaThumbnail.getAttribute('url');

  // Try extracting the first <img> src from the description HTML
  const desc = item.querySelector('description')?.textContent ?? '';
  const imgMatch = desc.match(/<img[^>]+src="([^"]+)"/i);
  if (imgMatch) return imgMatch[1];

  return null;
}

export default function SubstackPosts() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchFeed() {
      try {
        const res = await fetch(FEED_URL, { signal: controller.signal });
        if (!res.ok) throw new Error('Feed fetch failed');
        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');
        const items = Array.from(xml.querySelectorAll('item'));
        const parsed: SubstackPost[] = items.slice(0, 6).map((item) => ({
          title: item.querySelector('title')?.textContent?.trim() ?? 'Untitled',
          link: item.querySelector('link')?.textContent?.trim() ?? SUBSTACK_URL,
          pubDate: item.querySelector('pubDate')?.textContent?.trim() ?? '',
          description: stripHtml(item.querySelector('description')?.textContent ?? '').slice(0, 160),
          thumbnail: extractThumbnail(item),
        }));
        setPosts(parsed);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchFeed();
    return () => controller.abort();
  }, []);

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
          <Rss className="h-3.5 w-3.5" />
          View all on Substack
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Loading skeleton */}
      {loading && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-[1.5rem] border border-[color:var(--border)] bg-[var(--panel-bg)] p-6 space-y-4 animate-pulse"
            >
              <div className="h-3 w-24 rounded-full bg-[var(--border)]" />
              <div className="h-5 w-full rounded-full bg-[var(--border)]" />
              <div className="h-4 w-4/5 rounded-full bg-[var(--border)]" />
              <div className="h-4 w-3/5 rounded-full bg-[var(--border)]" />
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {!loading && error && (
        <div className="shell-panel surface-grid rounded-[1.75rem] p-1">
          <div className="rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)] px-6 py-10 text-center space-y-3">
            <p className="section-kicker">Could not load posts</p>
            <p className="text-sm text-[color:var(--muted)]">
              The Substack RSS feed could not be reached. You can{' '}
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--accent)] underline underline-offset-2"
              >
                read posts directly on Substack
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {/* Post grid */}
      {!loading && !error && posts.length === 0 && (
        <div className="shell-panel surface-grid rounded-[1.75rem] p-1">
          <div className="rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)] px-6 py-10 text-center">
            <p className="section-kicker">No posts found</p>
            <p className="mt-2 text-sm text-[color:var(--muted)]">
              Publish your first post on Substack to see it here.
            </p>
          </div>
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-[1.5rem] transition-transform duration-300 hover:-translate-y-1"
            >
              <article className="shell-panel surface-grid h-full rounded-[1.5rem] p-1">
                <div className="flex h-full flex-col rounded-[1.2rem] border border-[color:var(--border)] bg-[var(--background)] overflow-hidden">
                  {/* Thumbnail */}
                  {post.thumbnail && (
                    <div className="h-40 w-full overflow-hidden bg-[var(--panel-bg)]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.thumbnail}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-5 gap-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--accent)]">
                        Substack
                      </span>
                      {post.pubDate && (
                        <span className="font-mono text-xs text-[color:var(--muted)]">
                          {formatDate(post.pubDate)}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-semibold leading-snug text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)] text-balance">
                      {post.title}
                    </h3>

                    {post.description && (
                      <p className="flex-1 text-sm leading-6 text-[color:var(--muted)] line-clamp-3">
                        {post.description}
                      </p>
                    )}

                    <div className="flex items-center gap-1.5 pt-1 text-sm font-medium text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)]">
                      Read on Substack
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      )}

      {/* Subscribe nudge */}
      {!loading && !error && posts.length > 0 && (
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
      )}
    </section>
  );
}
