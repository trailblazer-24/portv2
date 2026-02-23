import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-[#F5F2EE] text-[#111111]">
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-12 gap-4 px-6 py-6 sm:px-8">
        <header className="col-span-12 flex items-center justify-between border-b border-[#111111]/10 pb-4">
          <span className="font-mono text-xs uppercase tracking-widest">
            Biswajit Rath
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/50">
            Error
          </span>
        </header>

        <section className="col-span-12 flex flex-col justify-center py-16 sm:col-span-10 lg:col-span-8">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[#111111]/50">
            404
          </p>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            Page not found.
          </h1>
          <p className="mt-10 max-w-md text-base leading-relaxed text-[#111111]/70 sm:text-lg">
            The page you are looking for does not exist or may have been moved.
          </p>

          <div className="mt-12 flex items-center gap-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest"
            >
              <span className="h-px w-12 bg-[#111111] transition-all duration-300 group-hover:w-20" />
              Back to home
            </Link>

            <Link
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-[#111111]/60 transition-colors hover:text-[#111111]"
            >
              Go to writings
            </Link>
          </div>
        </section>

        <footer className="col-span-12 mt-auto flex items-end justify-between border-t border-[#111111]/10 pt-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/40">
            Based in India
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#111111]/40">
            © 2026
          </span>
        </footer>
      </div>
    </main>
  );
}
