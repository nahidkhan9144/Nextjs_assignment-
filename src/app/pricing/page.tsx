export const metadata = { title: 'Pricing — Acme Inc' };

const tiers = [
  { name: 'Starter', price: '$0', perks: ['1 project', 'Community support'] },
  { name: 'Pro',     price: '$29', perks: ['Unlimited projects', 'Priority e-mail'] },
  { name: 'Enterprise', price: 'Contact us', perks: ['SLA', 'Dedicated CSM'] },
];

export default function Pricing() {
  return (
    <section className="container py-20 text-center">
      <h1 className="font-display text-4xl font-bold">Choose your plan</h1>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map(({ name, price, perks }) => (
          <div key={name} className="rounded-xl border p-8 shadow-sm">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="mt-4 text-3xl font-bold">{price}</p>
            <ul className="mt-6 space-y-2 text-left text-sm">
              {perks.map(p => <li key={p}>• {p}</li>)}
            </ul>
            <button className="mt-8 w-full rounded-md bg-brand-500 py-3 font-medium text-white transition hover:bg-brand-600">
              {name === 'Starter' ? 'Get started' : 'Buy now'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
