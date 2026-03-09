export type BlogPostIconName =
  | "terminal"
  | "database"
  | "cloud"
  | "system"
  | "api";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  description: string;
  icon: BlogPostIconName;
};

const formatDate = (isoDate: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(isoDate));

export const blogPosts: BlogPost[] = [
  {
    slug: "rest-api-design-mistakes",
    title: "Stop Designing REST APIs Wrong: 10 Mistakes Developers Keep Making",
    date: formatDate("2026-03-09"),
    isoDate: "2026-03-09",
    description:
      "A practical guide to the 10 REST API design mistakes that create confusion, break clients, and add technical debt, with clear fixes for each.",
    icon: "api",
  },
  {
    slug: "toon-for-llm-tokenization",
    title: "Cut Your LLM Token Bill in Half - How TOON Rewrites the Rules of JSON",
    date: formatDate("2025-11-02"),
    isoDate: "2025-11-02",
    description:
      "Discover how TOON (Token-Oriented Object Notation) can reduce your LLM API costs by 30-60% through smarter data formatting designed specifically for AI applications.",
    icon: "terminal",
  },
  {
    slug: "how-big-tech-checks-username-availibility",
    title: "How Big Tech Checks Username Availability in a Fraction of a Second",
    date: formatDate("2025-08-10"),
    isoDate: "2025-08-10",
    description:
      "A deep technical yet approachable breakdown of how massive platforms check username availability instantly while ensuring accuracy at scale.",
    icon: "database",
  },
  {
    slug: "encoding-encrypting-hashing",
    title: "Encoding, Hashing, Encrypting: The Ultimate Guide to Securing Your Data",
    date: formatDate("2025-08-07"),
    isoDate: "2025-08-07",
    description:
      "Understand the key differences between encoding, hashing, and encryption - including how they work, their use cases, and real-world examples.",
    icon: "cloud",
  },
  {
    slug: "smart-india-hackathon-journey",
    title: "Winning Against the Odds: My Unforgettable Smart India Hackathon Journey",
    date: formatDate("2024-11-26"),
    isoDate: "2024-11-26",
    description:
      "A thrilling journey through the Smart India Hackathon—intense challenges, last-minute changes, and an unexpected yet unforgettable win!",
    icon: "system",
  },
];