import Link from 'next/link';
import { ArrowLeft, ArrowRight, FileText, Layers3 } from 'lucide-react';
import { getBlogPosts } from '@/lib/mdx';

function formatDate(date: string) {
    return new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(date));
}

export default function BlogPage() {
    const posts = [...getBlogPosts()].sort(
        (left, right) => new Date(right.metadata.publishedAt).getTime() - new Date(left.metadata.publishedAt).getTime()
    );
    const [featuredPost, ...otherPosts] = posts;

    return (
        <main className="page-shell min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <section className="relative z-10 px-4 pb-16 pt-24 sm:px-6 md:pb-20 md:pt-28 lg:px-8">
                <div className="mx-auto max-w-6xl space-y-10">
                    <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end">
                        <div className="space-y-6">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--panel-bg)] px-4 py-2 text-sm font-medium text-[color:var(--muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)]"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </Link>

                            <div className="data-pill">
                                <span className="status-dot" />
                                Writing on systems, experiments, and technical curiosity
                            </div>

                            <div className="space-y-4">
                                <p className="section-kicker">Journal / Notes / Build logs</p>
                                <h1 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl md:text-6xl">
                                    Blog
                                </h1>
                                <p className="max-w-3xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                                    A running log of experiments, technical reflections, and working notes that sit behind the
                                    portfolio projects.
                                </p>
                            </div>
                        </div>

                        <div className="shell-panel surface-grid rounded-[1.75rem] p-1">
                            <div className="rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)] p-5 md:p-6">
                                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                    Blog signal
                                </p>

                                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                                    <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-3">
                                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                            Posts
                                        </p>
                                        <p className="mt-2 text-2xl font-semibold text-[color:var(--foreground)]">{posts.length}</p>
                                    </div>
                                    <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--card-bg)] px-4 py-3">
                                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                            Latest update
                                        </p>
                                        <p className="mt-2 text-sm font-medium text-[color:var(--foreground)]">
                                            {featuredPost ? formatDate(featuredPost.metadata.publishedAt) : 'No posts yet'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    {featuredPost ? (
                        <Link
                            href={`/blog/${featuredPost.slug}`}
                            className="group block rounded-[1.75rem] transition-transform duration-300 hover:-translate-y-1"
                        >
                            <article className="shell-panel-strong surface-grid rounded-[1.75rem] p-1">
                                <div className="rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)] p-6 md:p-8">
                                    <div className="flex flex-wrap items-center justify-between gap-3">
                                        <p className="section-kicker">Featured post</p>
                                        <span className="rounded-full border border-[color:var(--accent-soft)] bg-[var(--code-bg)] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--accent)]">
                                            {formatDate(featuredPost.metadata.publishedAt)}
                                        </span>
                                    </div>

                                    <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                                        <div className="space-y-4">
                                            <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)] md:text-4xl">
                                                {featuredPost.metadata.title}
                                            </h2>
                                            <p className="max-w-3xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                                                {featuredPost.metadata.summary}
                                            </p>
                                        </div>

                                        <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)] transition-all duration-300 group-hover:border-[color:var(--accent)] group-hover:text-[color:var(--accent)]">
                                            Read article
                                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ) : (
                        <div className="shell-panel surface-grid rounded-[1.75rem] p-1">
                            <div className="rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)] px-6 py-10 text-center">
                                <p className="section-kicker">No posts yet</p>
                                <p className="mt-4 text-base leading-8 text-[color:var(--muted)]">
                                    Publish an MDX post in `src/content/blogs` to populate the journal.
                                </p>
                            </div>
                        </div>
                    )}

                    {otherPosts.length > 0 && (
                        <section className="space-y-5">
                            <div className="space-y-2">
                                <p className="section-kicker">Archive</p>
                                <p className="text-sm leading-7 text-[color:var(--muted)] md:text-base">
                                    Additional notes, essays, and technical writeups from the same system.
                                </p>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {otherPosts.map((post) => (
                                    <Link
                                        key={post.slug}
                                        href={`/blog/${post.slug}`}
                                        className="group block rounded-[1.5rem] transition-transform duration-300 hover:-translate-y-1"
                                    >
                                        <article className="shell-panel surface-grid h-full rounded-[1.5rem] p-1">
                                            <div className="flex h-full flex-col rounded-[1.2rem] border border-[color:var(--border)] bg-[var(--background)] p-6">
                                                <div className="flex items-center justify-between gap-3">
                                                    <span className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--accent)]">
                                                        <FileText className="h-3.5 w-3.5" />
                                                        Entry
                                                    </span>
                                                    <span className="font-mono text-xs text-[color:var(--muted)]">
                                                        {formatDate(post.metadata.publishedAt)}
                                                    </span>
                                                </div>

                                                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)]">
                                                    {post.metadata.title}
                                                </h2>
                                                <p className="mt-3 flex-1 text-sm leading-7 text-[color:var(--muted)] md:text-base">
                                                    {post.metadata.summary}
                                                </p>

                                                <div className="mt-6 flex items-center justify-between border-t border-[color:var(--border)] pt-4 text-sm text-[color:var(--muted)]">
                                                    <span className="inline-flex items-center gap-2">
                                                        <Layers3 className="h-4 w-4" />
                                                        Blog entry
                                                    </span>
                                                    <span className="inline-flex items-center gap-2 font-medium text-[color:var(--foreground)] transition-colors group-hover:text-[color:var(--accent)]">
                                                        Open
                                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </section>
        </main>
    );
}
