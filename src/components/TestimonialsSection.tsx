type Testimonial = {
  name: string;
  role: string;
  date: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mike Jackson",
    role: "CEO at XYZ Corp",
    date: "JAN 18, 2024",
    quote:
      "Biswajit played a critical role in stabilizing and scaling our backend. The system became more reliable, faster, and far easier to maintain after his involvement.",
  },
  {
    name: "John Smith",
    role: "Founder at GreenLeaf Digital",
    date: "JAN 18, 2024",
    quote:
      "Working with Biswajit felt like having a senior engineer on the team. He asked the right questions early and designed solutions that held up under real usage.",
  },
  {
    name: "Emily Chen",
    role: "E-Commerce Manager at Trendy",
    date: "JAN 18, 2024",
    quote:
      "Our backend performance improved significantly after launch. Checkout issues dropped, response times improved, and the system handled peak traffic without issues.",
  },
  {
    name: "Sarah Lopez",
    role: "Director at BrightTech Solutions",
    date: "JAN 18, 2024",
    quote:
      "Biswajit translated complex requirements into a clean, scalable backend architecture. The delivery was smooth, well-documented, and production-ready.",
  },
  {
    name: "David Patel",
    role: "COO at InnovateX Labs",
    date: "JAN 18, 2024",
    quote:
      "The backend systems Biswajit built were instrumental in supporting our growth. Monitoring, logging, and performance were thoughtfully implemented from day one.",
  },
  {
    name: "Jessica Lee",
    role: "Product Manager at DataSphere",
    date: "JAN 18, 2024",
    quote:
      "Biswajit made complex systems feel simple to work with. His focus on reliability and maintainability made collaboration across teams much easier.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative bg-[#f7f7f7] py-16 text-zinc-950 dark:bg-black dark:text-zinc-50 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <span className="text-zinc-500 dark:text-zinc-400">*</span>
            <span>Testimonials</span>
          </div>

          <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-[1.18] tracking-tight sm:text-5xl">
            Trusted by teams building
            <br />
            real-world systems
          </h2>
        </div>

        {/* testimonials wrapper */}
        <div className="relative mt-12 sm:mt-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name + t.role} testimonial={t} />
            ))}
          </div>

          {/* bottom fade overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f7f7f7] to-transparent dark:from-black"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* avatar placeholder */}
          <div className="h-10 w-10 rounded-full border border-zinc-200 bg-gradient-to-b from-zinc-200 to-zinc-100 dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-900" />
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {testimonial.name}
            </div>
            <div className="truncate text-xs text-zinc-500 dark:text-zinc-400">
              {testimonial.role}
            </div>
          </div>
        </div>

        <div className="shrink-0 text-[10px] font-medium tracking-wide text-zinc-400 dark:text-zinc-500">
          {testimonial.date}
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        {testimonial.quote}
      </p>
    </article>
  );
}


