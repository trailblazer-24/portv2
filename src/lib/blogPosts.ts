export type BlogPostIconName = "terminal" | "database" | "cloud" | "system";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  icon: BlogPostIconName;
  content: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "designing-resilient-apis",
    title: "Designing resilient APIs in distributed systems",
    date: "Feb 12, 2026",
    description:
      "Practical patterns for retries, idempotency, and failure isolation when your services run at scale.",
    icon: "terminal",
    content:
      "Reliable APIs start with explicit contracts and predictable error handling. This post covers idempotency keys, timeouts, retries with jitter, circuit breakers, and observability baselines that keep systems healthy under load.",
  },
  {
    slug: "postgres-indexing-playbook",
    title: "A practical Postgres indexing playbook",
    date: "Jan 30, 2026",
    description:
      "How to pick the right indexes, measure wins with explain plans, and avoid common query anti-patterns.",
    icon: "database",
    content:
      "Indexing is workload-driven. We walk through B-tree vs GIN/GiST, composite index ordering, partial indexes, and how to validate every choice with EXPLAIN ANALYZE before shipping to production.",
  },
  {
    slug: "shipping-on-aws-with-confidence",
    title: "Shipping on AWS with confidence",
    date: "Jan 08, 2026",
    description:
      "A compact deployment checklist for CI/CD, rollback safety, and runtime monitoring.",
    icon: "cloud",
    content:
      "Shipping confidence comes from repeatability. This post outlines immutable builds, progressive rollouts, health probes, incident-ready dashboards, and release guardrails that reduce production risk.",
  },
  {
    slug: "event-driven-systems-without-chaos",
    title: "Event-driven systems without chaos",
    date: "Dec 18, 2025",
    description:
      "Structuring event contracts and consumers so asynchronous workflows stay observable and maintainable.",
    icon: "system",
    content:
      "Event-driven architecture scales teams and throughput, but only with clear schema ownership, dead-letter handling, consumer idempotency, and traceability across services. Here is a production-first approach.",
  },
];