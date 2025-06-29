'use client';
import Image from 'next/image';
// import { Button } from './ui/button';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Hero() {
  useEffect(() => {
    // ③  init once on mount (SSR-safe because we're in a client component)
    AOS.init({
      duration: 800,      // milliseconds
      easing: 'ease-out-cubic',
      once: true,         // run only the first time the element enters
      offset: 120         // px before the element comes into view
    });
  }, []);
  return (
    <section className="relative overflow-hidden">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gray-50 blur-3xl" />
      </div>
     

      <div className="container flex flex-col items-center gap-6 py-24 md:py-12 lg:flex-row lg:gap-12">
        <div className="text-center lg:w-1/2 lg:text-left">
          <div data-aos="fade-up-right">
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Build products your users&nbsp;love
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-lg text-gray-600 lg:mx-0">
              Our toolkit helps startups ship twice as fast with no vendor lock-in.
            </p>
          </div>
          <div data-aos="fade-in">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea soluta earum molestiae distinctio qui, facere enim quos. Nobis explicabo labore placeat quam ducimus. Quasi illum distinctio ab architecto. Nemo vitae eaque libero eum. Animi cum tempore laudantium tenetur veniam deleniti vitae. Iure repudiandae, libero temporibus at velit aut quos! Aliquam quas quos modi debitis ad eos optio. Animi, corrupti illo tempora excepturi fuga totam magnam minima repellendus reprehenderit aperiam et culpa consequuntur odio sit ducimus, nemo aut laboriosam. Quia accusantium nihil quae magni perspiciatis impedit, dignissimos veniam iure earum distinctio, necessitatibus tenetur provident excepturi! Voluptatum, dignissimos porro? Nam, repellat illo!</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <input type='text' className='p-2 rounded ' placeholder='lorem xyz' />
            <a
              href="#get-started"
              className="rounded-md bg-gray-500 px-6 py-3 text-white shadow-md shadow-gray-500/20 transition hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500/30"
            >
              Get started
            </a>
            {/* <a
              href="#learn-more"
              className="rounded-md border border-gray-500 px-6 py-3 text-gray-500 transition hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-500/30"
            >
              How it works
            </a>
             <Button variant='primary'  className="rounded-md border border-gray-500 px-6 py-3">Click here</Button> */}
          </div>
        </div>


          <div className="relative mt-10 w-full max-w-md lg:mt-0 lg:w-1/2">
            {/* Replace `/dashboard.png` with your own optimized graphic */}
        <div data-aos="zoom-in">
            <Image
              src="/assets/third.jpg"
              alt="App screenshot"
              width={200}
              height={200}
              priority
              className="w-full rounded-xl border border-gray-100 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
