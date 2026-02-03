type Experience = {
  range: string;
  title: string;
  company: string;
  description: string;
};

const EXPERIENCE: Experience[] = [
  {
    range: "2023 – Present",
    title: "Senior Backend / Full-Stack Engineer",
    company: "Freelance / Consulting",
    description:
      "Designed and built scalable backend systems for startups and growing products. Led architecture decisions, implemented APIs, authentication, and data pipelines, and ensured production readiness through monitoring and performance optimization.",
  },
  {
    range: "2021 – 2023",
    title: "Backend Engineer",
    company: "Product-Based Startup",
    description:
      "Worked on core backend services handling business logic, data modeling, and third-party integrations. Focused on reliability, clean service boundaries, and improving system performance as usage scaled.",
  },
];


export function ExperienceSection() {
  return (
    <section className="bg-[#f7f7f7] py-16 text-zinc-950 dark:bg-black dark:text-zinc-50 sm:py-24">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <span className="text-zinc-500 dark:text-zinc-400">*</span>
            <span>Experience</span>
          </div>

          <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-[1.18] tracking-tight sm:text-5xl">
            Experience building and
            <br />
            scaling real-world systems
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-zinc-200 bg-white px-6 py-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:mt-16 sm:px-8">
          <div className="relative">
            {/* timeline line */}
            <div
              aria-hidden="true"
              className="absolute left-[92px] top-2 hidden h-[calc(100%-8px)] w-px bg-zinc-200 dark:bg-zinc-800 sm:block"
            />

            <div className="space-y-10">
              {EXPERIENCE.map((e) => (
                <ExperienceRow key={e.range + e.company} exp={e} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceRow({ exp }: { exp: Experience }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-[170px_1fr] sm:gap-8">
      <div className="relative">
        <div className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-medium text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-100">
          {exp.range}
        </div>
        {/* small tick to the timeline */}
        <div
          aria-hidden="true"
          className="absolute right-[-14px] top-1/2 hidden h-2 w-2 -translate-y-1/2 rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 sm:block"
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
          {exp.title} <span className="font-normal text-zinc-500">at</span>{" "}
          {exp.company}
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {exp.description}
        </p>
      </div>
    </div>
  );
}


