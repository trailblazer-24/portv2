

export function Hero() {
  return (
    <section className="relative overflow-x-clip bg-[#f7f7f7] text-zinc-950 dark:bg-black dark:text-zinc-50">
      {/* dotted grid (offset to the top-right like the reference) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-120px] top-[-80px] h-[520px] w-[720px] bg-dot-grid opacity-50 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />

      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-6 py-10 sm:px-10">
        {/* top meta row */}
        <div className="flex items-start justify-between gap-6">
          <div className="text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            <span className="select-none text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
              br<span className="opacity-60">.</span>
            </span>
          </div>


          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Available for new projects</span>
          </div>
        </div>

        {/* hero content */}
        <div className="flex flex-1 flex-col items-center justify-center pb-24 pt-10 sm:pt-14">
          {/* avatar */}
          <div className="relative mb-7">
            <div className="h-16 w-16 overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-200 to-zinc-100 shadow-sm dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-900">
              <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-zinc-700 dark:text-zinc-200">
                BR
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.55)]"
            />
          </div>

          {/* headline */}
          <h1 className="text-center font-serif text-4xl leading-[1.18] tracking-tight sm:text-6xl">
            Building reliable systems
            <br />
            that scale effortlessly.
          </h1>

          {/* social row */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <SocialIcon href="#" label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.4 6.8 9.7.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.4.8 1 .8 2v3c0 .3.2.6.7.5A10.3 10.3 0 0 0 22 12.3C22 6.6 17.5 2 12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </SocialIcon>

            <SocialIcon href="#" label="X">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M6 18 18 6M8.7 6H18l-2.6 3.1M6 18h9.3l-2.6-3.1"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SocialIcon>

            <SocialIcon href="#" label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M6.5 10v8.5M6.5 6.5v.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <path
                  d="M10.2 18.5V10h3.3v1.3c.6-1 1.6-1.6 3-1.6 2.4 0 3.5 1.5 3.5 4v4.8"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
              </svg>
            </SocialIcon>
          </div>

          {/* bio + discover */}
          <div className="mt-10 grid w-full max-w-4xl grid-cols-1 gap-10 sm:mt-12 sm:grid-cols-2 sm:gap-12">
            <div className="hidden sm:block" />
            <div className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              <p>
                I&apos;m Biswajit Rath, a backend & full-stack engineer based in
                India. I design and build scalable APIs, reliable systems, and
                production-ready architectures that support real business
                growth.
              </p>
              <a
                href="#discover"
                className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-zinc-950 hover:opacity-80 dark:text-zinc-50"
              >
                Discover <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* floating email CTA */}
        <div className="pointer-events-none fixed bottom-6 left-1/2 z-10 -translate-x-1/2">
          <a
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-900 shadow-lg shadow-black/5 transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
            href="mailto:hello@example.com"
          >
            <span className="grid h-6 w-6 place-items-center overflow-hidden rounded-lg border border-zinc-200 bg-gradient-to-b from-zinc-200 to-zinc-100 text-[10px] font-semibold text-zinc-700 dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-900 dark:text-zinc-200">
              BR
            </span>
            <span className="grid h-6 w-6 place-items-center rounded-md bg-zinc-950 text-zinc-50 dark:bg-white dark:text-black">
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <path
                  d="M4.5 7.5h15v9h-15v-9Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="m5.3 8.1 6.7 5.2 6.7-5.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Reach out via email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
    >
      {children}
    </a>
  );
}
