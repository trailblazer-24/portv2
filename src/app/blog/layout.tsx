import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond your API - Blog by Biswajit Rath",
  description: "Interactive blog posts on computer science and web development covering backend systems, APIs, databases, and software engineering.",
  openGraph: {
    title: "Beyond your API - Blog by Biswajit Rath",
    description: "Interactive blog posts on computer science and web development covering backend systems, APIs, databases, and software engineering.",
    type: "website",
    url: "https://www.biswajitrath.com/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond your API - Blog by Biswajit Rath",
    description: "Interactive blog posts on computer science and web development covering backend systems, APIs, databases, and software engineering.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
