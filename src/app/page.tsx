import Hero      from '../components/Hero';
import Features  from '../components/Features';
import CallToAct from '../components/CallToAct';
import Footer    from '../components/Footer';

export default function Landing() {
  return (
    <main className="font-body text-gray-800 bg-white">
      <Hero />
      <Features />
      <CallToAct />
      <Footer />
    </main>
  );
}
