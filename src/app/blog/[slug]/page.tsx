import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, CalendarDays, FileText } from 'lucide-react';
import { getBlogPosts } from '@/lib/mdx';

function formatDate(date: string) {
    return new Intl.DateTimeFormat('en', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    }).format(new Date(date));
}

export function generateStaticParams() {
    const posts = getBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const posts = getBlogPosts();
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="page-shell min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <article className="relative z-10 px-4 pb-16 pt-24 sm:px-6 md:pb-20 md:pt-28 lg:px-8">
                <div className="mx-auto max-w-5xl space-y-8">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--panel-bg)] px-4 py-2 text-sm font-medium text-[color:var(--muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--foreground)]"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Blog
                    </Link>

                    <header className="shell-panel-strong surface-grid rounded-[1.75rem] p-1">
                        <div className="rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)] p-6 md:p-8">
                            <div className="flex flex-col gap-6 border-b border-[color:var(--border)] pb-6 lg:flex-row lg:items-start lg:justify-between">
                                <div className="space-y-4">
                                    <div className="data-pill">
                                        <span className="status-dot" />
                                        Article / Technical note
                                    </div>

                                    <div className="space-y-3">
                                        <p className="section-kicker">Published insight</p>
                                        <h1 className="font-display text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl md:text-6xl">
                                            {post.metadata.title}
                                        </h1>
                                        <p className="max-w-3xl text-base leading-8 text-[color:var(--muted)] md:text-lg">
                                            {post.metadata.summary}
                                        </p>
                                    </div>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[17rem] lg:grid-cols-1">
                                    <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-3">
                                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                            Published
                                        </p>
                                        <div className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]">
                                            <CalendarDays className="h-4 w-4 text-[color:var(--accent)]" />
                                            <time dateTime={post.metadata.publishedAt}>{formatDate(post.metadata.publishedAt)}</time>
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-[color:var(--border)] bg-[var(--card-bg)] px-4 py-3">
                                        <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                                            Format
                                        </p>
                                        <div className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]">
                                            <FileText className="h-4 w-4 text-[color:var(--accent)]" />
                                            MDX article
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="shell-panel surface-grid rounded-[1.75rem] p-1">
                        <div className="rounded-[1.45rem] border border-[color:var(--border)] bg-[var(--background)] px-5 py-8 sm:px-6 md:px-8 md:py-10">
                            <div className="mdx-content prose prose-lg max-w-none dark:prose-invert prose-zinc">
                                <MDXRemote source={post.content} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[var(--code-bg)] px-4 py-2 text-sm font-medium text-[color:var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            Back to all writing
                        </Link>
                    </div>
                </div>
            </article>
        </main>
    );
}
