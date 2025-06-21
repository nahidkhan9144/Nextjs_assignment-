export const metadata = { title: 'Contact — Acme Inc' };

export default function Contact() {
  return (
    <section className="container py-20 max-w-lg">
      <h1 className="font-display text-4xl font-bold">Get in touch</h1>

      <form className="mt-10 space-y-6">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            rows={4}
            className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-black py-3 font-medium text-white transition hover:bg-black-200"
        >
          Send
        </button>
      </form>
    </section>
  );
}
