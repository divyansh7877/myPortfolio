import { getBlogPosts } from '@/lib/mdx';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <section className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-4 sm:px-6 lg:px-8 py-16 pt-24 md:pt-28">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <a
                        href="/myPortfolio/"
                        className="inline-flex items-center gap-2 text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </a>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-[color:var(--foreground)] via-[color:var(--foreground)] to-[color:var(--accent)] bg-clip-text text-transparent">
                        Blog
                    </h1>
                    <p className="text-xl text-[color:var(--muted)]">
                        Thoughts, tutorials, and updates.
                    </p>
                </div>

                <div className="grid gap-8">
                    {posts.map((post) => (
                        <a
                            key={post.slug}
                            href={`/myPortfolio/blog/${post.slug}`}
                            className="group block p-6 bg-[var(--card-bg)] border-2 border-[color:var(--border)] rounded-lg hover:border-[color:var(--accent)] transition-all hover:shadow-lg"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold group-hover:text-[color:var(--accent)] transition-colors">
                                        {post.metadata.title}
                                    </h2>
                                    <span className="text-sm text-[color:var(--muted)] font-mono">
                                        {post.metadata.publishedAt}
                                    </span>
                                </div>
                                <p className="text-[color:var(--muted)]">{post.metadata.summary}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
