import Link from 'next/link';
import { getBlogPosts } from '@/lib/mdx';
import { ArrowLeft } from 'lucide-react';

export default function BlogPage() {
    const posts = getBlogPosts();

    return (
        <section className="min-h-screen bg-black text-zinc-100 p-8 pt-24">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-4"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        Blog
                    </h1>
                    <p className="text-xl text-zinc-400">
                        Thoughts, tutorials, and updates.
                    </p>
                </div>

                <div className="grid gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
                        >
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-semibold group-hover:text-indigo-400 transition-colors">
                                        {post.metadata.title}
                                    </h2>
                                    <span className="text-sm text-zinc-500 font-mono">
                                        {post.metadata.publishedAt}
                                    </span>
                                </div>
                                <p className="text-zinc-400">{post.metadata.summary}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
