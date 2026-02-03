type Project = {
  title: string;
  year: string;
  description: string;
  stack: string[];
  highlights?: string;
};

const PROJECTS: Project[] = [
  {
    title: "NexusGPT Platform Backend",
    year: "2024",
    description:
      "Scalable backend powering AI-driven workflows, authentication, and real-time data processing.",
    stack: ["Node.js", "PostgreSQL", "Redis", "AWS"],
    highlights: "Handles 1M+ requests/month",
  },
  {
    title: "Time Tracking API",
    year: "2024",
    description:
      "RESTful API for time logging, reporting, and team-based analytics with role-based access.",
    stack: ["NestJS", "PostgreSQL", "JWT", "Docker"],
    highlights: "Sub-200ms average response time",
  },
  {
    title: "AI Research Data Pipeline",
    year: "2024",
    description:
      "Event-driven data ingestion and processing pipeline for large-scale AI experiments.",
    stack: ["Python", "Kafka", "ClickHouse", "AWS"],
    highlights: "Processes millions of events daily",
  },
  {
    title: "E-commerce Core Services",
    year: "2024",
    description:
      "Order, payment, and inventory services designed for high availability and consistency.",
    stack: ["Node.js", "MongoDB", "Stripe", "Kubernetes"],
    highlights: "Zero-downtime deployments",
  },
];
export function ProjectsSection() {
  return (
    <section
      id="discover"
      className="relative overflow-x-clip bg-[#f7f7f7] py-16 text-zinc-950 dark:bg-black dark:text-zinc-50 sm:py-24"
    >
      {/* dotted grid behind the header */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-60px] h-[320px] w-[760px] -translate-x-1/2 bg-dot-grid opacity-50 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />

      <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
        {/* header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <span className="text-zinc-500 dark:text-zinc-400">*</span>
            <span>Featured Projects</span>
          </div>

          <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-[1.18] tracking-tight sm:text-5xl">
            Systems I&apos;ve designed
            <br />
            and built in production
          </h2>
        </div>

        {/* projects grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={`${p.title}-${p.year}`} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950">
      {/* architecture preview */}
      <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-100 to-zinc-50 text-xs text-zinc-500 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 dark:text-zinc-400">
        <span className="font-mono opacity-70">
          Client → API → Service → DB
        </span>
      </div>

      {/* title + year */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <h3 className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
          {project.title}
        </h3>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          {project.year}
        </div>
      </div>

      {/* description */}
      <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      {/* highlights */}
      {project.highlights && (
        <p className="mt-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {project.highlights}
        </p>
      )}

      {/* stack */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[11px] font-mono text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-4">
        <span className="inline-flex items-center gap-1 text-xs font-medium text-zinc-900 opacity-0 transition group-hover:opacity-100 dark:text-zinc-50">
          View architecture <span aria-hidden="true">→</span>
        </span>
      </div>
    </article>
  );
}
