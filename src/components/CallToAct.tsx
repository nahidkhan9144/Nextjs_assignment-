export default function CallToAct() {
    return (
      <section
        id="get-started"
        className="relative isolate overflow-hidden bg-gray-500 text-white"
      >
        <div className="container py-20 text-center md:py-28">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Ready to launch?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-gray-50/90">
            Sign up today and deploy in less than 5&nbsp;minutes.
          </p>
          <a
            href="/signup"
            className="mt-8 inline-block rounded-md bg-white px-8 py-3 font-semibold text-gray-500 shadow-lg transition hover:scale-105"
          >
            Create your account
          </a>
        </div>
  
        {/* decorative shape */}
        <svg
          className="absolute bottom-0 left-1/2 -z-10 w-[150%] -translate-x-1/2 text-white/10"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,160L80,170.7C160,181,320,203,480,213.3C640,224,800,224,960,218.7C1120,213,1280,203,1360,197.3L1440,192V320H0Z"
          />
        </svg>
      </section>
    );
  }
  