export function ClosingSection() {
  return (
    <section className="bg-[#f7f7f7] pb-16 text-zinc-950 dark:bg-black dark:text-zinc-50 sm:pb-24">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        {/* CTA panel */}
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white px-6 py-12 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:px-10">
          {/* dotted backdrop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-dot-grid opacity-45 [mask-image:radial-gradient(closest-side,black,transparent)]"
          />

          {/* corner dots */}
          <CornerDot className="left-5 top-5" />
          <CornerDot className="right-5 top-5" />
          <CornerDot className="left-5 bottom-5" />
          <CornerDot className="right-5 bottom-5" />

          <div className="relative flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
              <span>I&apos;m Biswajit Rath</span>
              <span aria-hidden="true">👋</span>
            </div>

            <h2 className="mt-6 max-w-3xl font-serif text-3xl leading-[1.15] tracking-tight sm:text-5xl">
              Let&apos;s design and build
              <br />
              a system that lasts.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Whether you&apos;re validating an idea or scaling an existing
              product, I help teams turn complexity into reliable,
              production-ready systems.
            </p>

            <a
              href="mailto:hello@biswajitrath.com?subject=System%20Consultation"
              className="mt-7 inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-6 text-xs font-medium text-white shadow-sm transition hover:bg-zinc-800"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>

        {/* footer row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row">
          <a
            href="mailto:hello@biswajitrath.com"
            className="font-medium text-zinc-800 hover:opacity-80 dark:text-zinc-200"
          >
            hello@biswajitrath.com
          </a>

          <div className="flex items-center gap-3">
            <SocialIcon href="#" label="GitHub">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.4 6.8 9.7.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.7.1-.7.1-.7 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.4.8 1 .8 2v3c0 .3.2.6.7.5A10.3 10.3 0 0 0 22 12.3C22 6.6 17.5 2 12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
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

          <div className="flex items-center gap-4">
            <div className="text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()}. All Rights Reserved
            </div>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-medium text-zinc-800 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900"
            >
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerDot({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={[
        "pointer-events-none absolute h-2 w-2 rounded-full border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950",
        className,
      ].join(" ")}
    />
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

