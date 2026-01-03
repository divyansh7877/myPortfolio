import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPosts } from '@/lib/mdx';
import { ArrowLeft } from 'lucide-react';

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
        <article className="min-h-screen bg-[var(--background)] text-[var(--foreground)] p-8 pt-24">
            <div className="max-w-3xl mx-auto space-y-8">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Blog
                </Link>

                <header className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[color:var(--foreground)]">
                        {post.metadata.title}
                    </h1>
                    <div className="flex items-center gap-4 text-[color:var(--muted)] font-mono text-sm">
                        <time dateTime={post.metadata.publishedAt}>
                            {post.metadata.publishedAt}
                        </time>
                    </div>
                </header>

                <div className="prose prose-lg dark:prose-invert prose-zinc max-w-none">
                    <MDXRemote source={post.content} />
                </div>
            </div>
        </article>
    );
}
