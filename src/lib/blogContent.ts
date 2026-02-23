import "server-only";

import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

const blogPostsDirectory = path.join(process.cwd(), "src", "content", "blog");

const encodingComparisonTableMarkdown = `
| Method | Primary Purpose | Reversible | Uses Secret Key | Typical Use Cases |
| --- | --- | --- | --- | --- |
| Encoding | Data format compatibility | Yes | No | URL encoding, Base64 transport, UTF-8 text handling |
| Hashing | Integrity verification | No | No | Password storage (with salt), checksums, content fingerprinting |
| Encryption | Data confidentiality | Yes (with correct key) | Yes | HTTPS/TLS, encrypted storage, secure messaging |
`;

const mapKnownMdxComponents = (mdxSource: string) =>
  mdxSource.replace(/<EncodingComparisonTable\s*\/?>(?:<\/EncodingComparisonTable>)?/g, encodingComparisonTableMarkdown);

const normalizeMdx = (mdxSource: string) =>
  mdxSource.replace(/<([A-Z][A-Za-z0-9]*)\s*\/?>(?:<\/\1>)?/g, "");

export async function getBlogPostHtml(slug: string) {
  const fullPath = path.join(blogPostsDirectory, `${slug}.mdx`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { content } = matter(fileContents);
    const withMappedComponents = mapKnownMdxComponents(content);
    const normalizedContent = normalizeMdx(withMappedComponents);

    const processed = await remark()
      .use(remarkGfm)
      .use(remarkHtml)
      .process(normalizedContent);

    return processed.toString();
  } catch {
    return null;
  }
}
