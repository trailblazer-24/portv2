type Step = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  span?: "wide";
};

const STEPS: Step[] = [
  {
    number: "1",
    title: "Problem Definition",
    description:
      "Clarifying business goals, constraints, scale expectations, and failure scenarios before writing a single line of code.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M7 7h10M7 12h7M7 17h9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "2",
    title: "System Design",
    description:
      "Designing data models, service boundaries, and architecture with scalability, reliability, and cost in mind.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "3",
    title: "Implementation",
    description:
      "Building clean, testable services with clear contracts, following best practices for security and performance.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M8 8l-4 4 4 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M16 8l4 4-4 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "4",
    title: "Testing & Validation",
    description:
      "Verifying correctness through automated tests, edge cases, and real-world scenarios before production rollout.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M5 12l4 4 10-10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "5",
    title: "Deployment & Monitoring",
    description:
      "Shipping to production with CI/CD, observability, logging, and metrics to ensure long-term system health.",
    span: "wide",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M12 3v18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 8l5-5 5 5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.55"
        />
      </svg>
    ),
  },
];


export function ProcessSection() {
  return (
    <section className="relative overflow-x-clip bg-[#f7f7f7] py-16 text-zinc-950 dark:bg-black dark:text-zinc-50 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <span className="text-zinc-500 dark:text-zinc-400">*</span>
            <span>How I Work</span>
          </div>

          <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-[1.18] tracking-tight sm:text-5xl">
            A structured approach to
            <br />
            building reliable systems
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2">
          {STEPS.map((s) => (
            <ProcessCard key={s.number} step={s} />
          ))}
        </div>
      </div>
    </section>
  );
}


function ProcessCard({ step }: { step: Step }) {
  const isWide = step.span === "wide";

  return (
    <article
      className={[
        "relative overflow-hidden rounded-3xl border border-zinc-200 bg-white px-6 py-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950",
        isWide ? "sm:col-span-2" : "",
      ].join(" ")}
    >
      {/* subtle bubble pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-40px] top-[-40px] h-[220px] w-[220px] opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage: "radial-gradient(closest-side, black, transparent)",
        }}
      />

      <div className="flex items-start justify-between gap-6">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
          {step.number}
        </div>

        <div className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-100">
          {step.icon}
        </div>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-zinc-950 dark:text-zinc-50">
        {step.title}
      </h3>
      <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {step.description}
      </p>
    </article>
  );
}


