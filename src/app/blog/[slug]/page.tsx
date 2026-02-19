import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A]">
      <article className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/45">
          {post.date}
        </p>
        <h1 className="text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-[-0.02em]">
          {post.title}
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-[#0A0A0A]/70">
          {post.content}
        </p>
        <div className="mt-14 border-t border-[#0A0A0A]/10 pt-6">
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/65 transition-colors hover:text-[#0A0A0A]"
          >
            ← Back to writings
          </Link>
        </div>
      </article>
    </main>
  );
}