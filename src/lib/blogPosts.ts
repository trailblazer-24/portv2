export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  icon: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "build-your-own-database",
    title: "Build Your Own Database",
    date: "October 22, 2025",
    description:
      "How would you reinvent the database? In this post, we'll build a key-value database from the ground up.",
    icon: "database",
  },
  {
    slug: "svg-path-commands",
    title: "A Deep Dive Into SVG Path Commands",
    date: "July 4, 2023",
    description:
      "The mystical d attribute in SVG paths is actually a series of small commands. In this guide, we'll take a look at each path command and how we can use them to draw icons.",
    icon: "path",
  },
  {
    slug: "distributed-systems-patterns",
    title: "Distributed Systems Patterns",
    date: "March 15, 2025",
    description:
      "A practical guide to building reliable distributed systems. We'll explore patterns like circuit breakers, bulkheads, and saga orchestration.",
    icon: "network",
  },
  {
    slug: "api-design-principles",
    title: "API Design Principles",
    date: "January 8, 2025",
    description:
      "How to design APIs that developers actually enjoy using. We'll cover versioning, pagination, error handling, and more.",
    icon: "code",
  },
];
