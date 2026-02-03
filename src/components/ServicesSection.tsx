type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  position:
    | "top"
    | "topLeft"
    | "topRight"
    | "bottom"
    | "bottomLeft"
    | "bottomRight";
};


const SERVICES: Service[] = [
  {
    title: "Backend Architecture",
    description:
      "Designing scalable, fault-tolerant backend systems with clear service boundaries and long-term maintainability.",
    position: "top",
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
    title: "API Design & Development",
    description:
      "Building clean, well-documented REST and GraphQL APIs optimized for performance and developer experience.",
    position: "topLeft",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M4.5 12h15"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M9 7l-4 5 4 5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M15 7l4 5-4 5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Auth & Security",
    description:
      "Implementing secure authentication, authorization, and data protection using industry best practices.",
    position: "topRight",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M12 3l7 4v5c0 4.5-3 8.5-7 9-4-.5-7-4.5-7-9V7l7-4Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Performance Optimization",
    description:
      "Identifying bottlenecks and improving latency, throughput, and reliability across the stack.",
    position: "bottom",
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
    title: "Cloud & DevOps",
    description:
      "Deploying, scaling, and maintaining systems using modern cloud infrastructure and CI/CD pipelines.",
    position: "bottomLeft",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M7 17h10a4 4 0 0 0 0-8 5 5 0 0 0-9.7 1.5A3.5 3.5 0 0 0 7 17Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
  {
    title: "System Integration",
    description:
      "Connecting services, third-party APIs, and internal tools into a cohesive, reliable system.",
    position: "bottomRight",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
        <path
          d="M8 12h8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M12 8v8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M4 4h6v6H4V4ZM14 14h6v6h-6v-6Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];


export function ServicesSection() {
  return (
    <section className="relative overflow-x-clip bg-[#f7f7f7] py-16 text-zinc-950 dark:bg-black dark:text-zinc-50 sm:py-24">
      {/* dotted + circular backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-dot-grid opacity-45 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200/70 dark:border-zinc-800/70"
      />

      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <span className="text-zinc-500 dark:text-zinc-400">*</span>
            <span>Services</span>
          </div>

          <h2 className="mt-6 max-w-2xl font-serif text-3xl leading-[1.18] tracking-tight sm:text-5xl">
            Engineering services
            <br />
            built for production systems
          </h2>

          <a
            href="mailto:hello@example.com?subject=Backend%20Consultation"
            className="mt-5 inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-5 text-xs font-medium text-white shadow-sm transition hover:bg-zinc-800"
          >
            Discuss your system
          </a>
        </div>

        {/* Orbit layout (desktop) */}
        <div className="relative mx-auto mt-10 hidden h-[560px] max-w-5xl sm:block">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} variant="orbit" />
          ))}
        </div>

        {/* Simple grid (mobile) */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:hidden">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} variant="grid" />
          ))}
        </div>
      </div>
    </section>
  );
}


function orbitPosition(position: Service["position"]) {
  switch (position) {
    case "top":
      return "left-1/2 top-0 -translate-x-1/2";
    case "bottom":
      return "left-1/2 bottom-0 -translate-x-1/2";
    case "topLeft":
      return "left-0 top-[110px]";
    case "bottomLeft":
      return "left-0 bottom-[110px]";
    case "topRight":
      return "right-0 top-[110px]";
    case "bottomRight":
      return "right-0 bottom-[110px]";
  }
}

function ServiceCard({
  service,
  variant,
}: {
  service: Service;
  variant: "orbit" | "grid";
}) {
  const base =
    "rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950";

  const orbit =
    "absolute w-[320px] " +
    orbitPosition(service.position) +
    " shadow-[0_12px_30px_rgba(0,0,0,0.06)]";

  return (
    <article className={`${base} ${variant === "orbit" ? orbit : ""}`}>
      <div className="flex items-start gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-100">
          {service.icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
            {service.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {service.description}
          </p>
        </div>
      </div>
    </article>
  );
}

