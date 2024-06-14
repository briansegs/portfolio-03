import About from "@/components/homepage/About";
import CTA from "@/components/homepage/CTA";
import Hero from "@/components/homepage/Hero";
import Projects from "@/components/homepage/Projects";
import Reviews from "@/components/homepage/Reviews";
import Services from "@/components/homepage/Services";

export default function Home() {
  return (
    <main className="">
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <About />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <Projects />
      </section>
      <section className="padding">
        <Reviews />
      </section>
      <section className="padding">
        <CTA />
      </section>
    </main>
  );
}
