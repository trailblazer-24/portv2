import { blogPosts } from "@/lib/blogPosts";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.biswajitrath.com").replace(/\/+$/, "");
const blogPostsDirectory = path.join(process.cwd(), "src", "content", "blog");

type BlogPostFrontmatter = {
  tags?: string[];
  image?: string;
};

type BlogPostMeta = {
  tags: string[];
  image?: string;
};

const toAbsoluteUrl = (value: string) => {
  if (/^https?:\/\//i.test(value)) {
    return value;
  }

  return `${siteUrl}/${value.replace(/^\/+/, "")}`;
};

const getFrontmatterBySlug = async (): Promise<Record<string, BlogPostMeta>> => {
  const entries = await Promise.all(
    blogPosts.map(async (post) => {
      const filePath = path.join(blogPostsDirectory, `${post.slug}.mdx`);

      try {
        const fileContents = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContents);
        const frontmatter = data as BlogPostFrontmatter;

        return [
          post.slug,
          {
            tags: Array.isArray(frontmatter.tags) ? frontmatter.tags.filter((tag): tag is string => typeof tag === "string") : [],
            image: typeof frontmatter.image === "string" ? frontmatter.image : undefined,
          },
        ] as const;
      } catch {
        return [post.slug, { tags: [], image: undefined }] as const;
      }
    })
  );

  return Object.fromEntries(entries) as Record<string, BlogPostMeta>;
};

export async function GET() {
  const frontmatterBySlug = await getFrontmatterBySlug();

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Beyond your API - Biswajit Rath</title>
    <link>${toAbsoluteUrl("blog")}</link>
    <description>Interactive blog posts on computer science and web development by Biswajit Rath</description>
    <language>en-us</language>
    <ttl>60</ttl>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${toAbsoluteUrl("rss.xml")}" rel="self" type="application/rss+xml" />
    <image>
      <url>${toAbsoluteUrl("globe.svg")}</url>
      <title>Beyond your API - Biswajit Rath</title>
      <link>${toAbsoluteUrl("blog")}</link>
    </image>
    ${blogPosts
      .map((post) => {
        const meta = frontmatterBySlug[post.slug];
        const categories = (meta?.tags.length ? meta.tags : ["Technology"]).map(
          (category: string) => `      <category><![CDATA[${category}]]></category>`
        );
        const imageTag = meta?.image
          ? `\n      <enclosure url="${toAbsoluteUrl(meta.image)}" type="image/webp" />`
          : "";

        return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${toAbsoluteUrl(`blog/${post.slug}`)}</link>
      <guid isPermaLink="false">${post.slug}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.isoDate).toUTCString()}</pubDate>
      <author>hello@biswajitrath.com (Biswajit Rath)</author>
${categories.join("\n")}${imageTag}
    </item>`;
      })
      .join("")}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
    },
  });
}
