type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const BENEFITS: Benefit[] = [
  {
    title: "Architecture Built for Your Use Case",
    description:
      "Every system is designed around your scale, data model, and business constraints—no generic templates or over-engineering.",
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
    title: "Engineering-Led Collaboration",
    description:
      "You stay involved through technical discussions, architecture reviews, and clear documentation at every stage.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M7 14c1.3 0 2.4-1.1 2.4-2.4S8.3 9.2 7 9.2 4.6 10.3 4.6 11.6 5.7 14 7 14Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M17 14c1.3 0 2.4-1.1 2.4-2.4S18.3 9.2 17 9.2s-2.4 1.1-2.4 2.4S15.7 14 17 14Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M9.2 12h5.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Performance You Can Measure",
    description:
      "Systems are built with observability, monitoring, and optimization in mind—so results are visible, not assumed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M4 18h16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 18V10M12 18V6M17 18v-4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Scalable & Maintainable by Default",
    description:
      "Clean codebases, clear boundaries, and long-term maintainability are baked in from day one—not added later.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M12 3v18M3 12h18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];
export function BenefitsSection() {
  return (
    <section className="relative overflow-x-clip bg-[#f7f7f7] py-16 text-zinc-950 dark:bg-black dark:text-zinc-50 sm:py-24">
      {/* dotted background behind the stack */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[90px] h-[520px] w-[760px] -translate-x-1/2 bg-dot-grid opacity-45 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />

      <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <span aria-hidden="true" className="text-zinc-500 dark:text-zinc-400">
              *
            </span>
            <span>Why work with me</span>
          </div>

          <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-[1.18] tracking-tight sm:text-5xl">
            Share your requirements,
            <br />
            I’ll handle the complexity
          </h2>
        </div>

        <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-5 sm:mt-16">
          {BENEFITS.map((b) => (
            <BenefitCard key={b.title} benefit={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
function BenefitCard({ benefit }: { benefit: Benefit }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-100">
          {benefit.icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
            {benefit.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {benefit.description}
          </p>
        </div>
      </div>
    </article>
  );
}
