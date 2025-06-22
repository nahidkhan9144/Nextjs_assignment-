export const metadata = { title: 'About — Test Inc' };

export default function About() {
  return (
    <section className="container py-20 space-y-8">
      <h1 className="font-display text-4xl font-bold">About us</h1>
      <p>
        Test started in 2022 with one mission: help makers ship great products
        without vendor lock-in. Today we serve 3 000+ teams in 52 countries.
      </p>
      <p>
        We’re a fully-remote crew of 25 engineers, designers, writers, and one
        extremely spoiled office dog.
      </p>
    </section>
  );
}
