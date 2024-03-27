//-- Imports

import BookNext from "./components/BookNext";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import Testimonial from "./components/Testimonial";
import TopDest from "./components/TopDest";

// Components

export default function Home() {
  return (
    <main className="">
      <nav>
        <Navbar />
      </nav>
      <section className=" ring-2 ">
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <TopDest />
      </section>
      <section>
        <BookNext />
      </section>
      <section>
        <Testimonial />
      </section>
      <section>
        <Subscribe />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
