import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blogPosts";
import { getBlogPostHtml } from "@/lib/blogContent";
import { BlogPostContent } from "@/components/BlogPostContent";

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

  const postHtml = await getBlogPostHtml(slug);

  if (!postHtml) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F2EE] text-[#0A0A0A]">
      <article className="mx-auto max-w-3xl px-6 py-20 sm:px-8 sm:py-24">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/45">
          {post.date}
        </p>
        <h1 className="text-[clamp(2rem,5vw,3.2rem)] leading-[1.1] tracking-[-0.02em]">
          {post.title}
        </h1>
        <BlogPostContent
          html={postHtml}
          className="mt-10 space-y-6 text-[16px] leading-[1.9] text-[#0A0A0A]/75 [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-2 [&_a]:transition-colors [&_a:hover]:text-[#0A0A0A] [&_blockquote]:border-l [&_blockquote]:border-[#0A0A0A]/20 [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:rounded [&_code]:bg-[#0A0A0A]/[0.05] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:text-[0.92em] [&_h1]:mt-10 [&_h1]:text-[2rem] [&_h1]:leading-[1.2] [&_h1]:tracking-[-0.02em] [&_h2]:mt-10 [&_h2]:text-[1.55rem] [&_h2]:leading-[1.25] [&_h2]:tracking-[-0.015em] [&_h3]:mt-8 [&_h3]:text-[1.2rem] [&_h3]:font-medium [&_h3]:leading-[1.35] [&_hr]:my-10 [&_hr]:border-[#0A0A0A]/10 [&_li]:mb-1.5 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-5 [&_pre]:overflow-x-auto [&_pre]:rounded-md [&_pre]:bg-[#0A0A0A] [&_pre]:p-4 [&_pre]:text-[#FAFAFA] [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_strong]:text-[#0A0A0A] [&_table]:my-8 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm [&_td]:border [&_td]:border-[#0A0A0A]/15 [&_td]:px-3 [&_td]:py-2 [&_th]:border [&_th]:border-[#0A0A0A]/15 [&_th]:bg-[#0A0A0A]/[0.04] [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_ul]:list-disc [&_ul]:pl-6"
        />
        <div className="mt-14 border-t border-[#0A0A0A]/10 pt-6">
          <Link
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-[#0A0A0A]/65 transition-colors hover:text-[#0A0A0A]"
          >
            ← Back to writings
          </Link>
        </div>
      </article>
    </main>
  );
}