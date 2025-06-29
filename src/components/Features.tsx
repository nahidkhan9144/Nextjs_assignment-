const items = [
  { icon: '⚡', title: 'Fast', copy: 'Turbopack dev server boots in 250 ms.' },
  { icon: '🧩', title: 'Modular', copy: 'Drop-in components, zero config.' },
  { icon: '🔒', title: 'Secure', copy: 'OWASP-grade auth and rate-limiting.' },
];

export default function Features() {
  return (
    <section id="learn-more" className="bg-gray-50 py-20 md:py-28">
      <div className="container">
        <h2 className="font-display text-3xl font-semibold text-center">
          Everything you need
        </h2>
        <div data-aos="fade-right">
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(({ icon, title, copy }) => (
              <article
                key={title}
                className="rounded-xl bg-white p-8 shadow-md shadow-gray-200/50"
              >
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-gray-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
