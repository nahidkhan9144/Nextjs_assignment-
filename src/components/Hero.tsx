import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-50 blur-3xl" />
      </div>

      <div className="container flex flex-col items-center gap-6 py-24 md:py-32 lg:flex-row lg:gap-12">
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
            Build products your users&nbsp;love
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-lg text-gray-600 lg:mx-0">
            Our toolkit helps startups ship twice as fast with no vendor lock-in.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#get-started"
              className="rounded-md bg-brand-500 px-6 py-3 text-white shadow-md shadow-brand-500/20 transition hover:bg-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-500/30"
            >
              Get started
            </a>
            <a
              href="#learn-more"
              className="rounded-md border border-brand-500 px-6 py-3 text-brand-500 transition hover:bg-brand-50 focus:outline-none focus:ring-4 focus:ring-brand-500/30"
            >
              How it works
            </a>
          </div>
        </div>

        <div className="relative mt-10 w-full max-w-md lg:mt-0 lg:w-1/2">
          {/* Replace `/dashboard.png` with your own optimized graphic */}
          <Image
            src="/dashboard.png"
            alt="App screenshot"
            width={800}
            height={600}
            priority
            className="w-full rounded-xl border border-gray-100 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
