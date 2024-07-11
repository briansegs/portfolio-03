import { About, CTA, Hero, Projects, Services } from "@/components/homepage";

export default function Home() {
  return (
    <>
      <section className="relative mb-12 sm:mb-24">
        <Hero />
      </section>
      <section className="padding-x py-8 sm:py-12">
        <Services />
      </section>
      <section className="padding">
        <About />
      </section>
      <section className="padding bg-black">
        <Projects />
      </section>
      <section className="padding">
        <CTA />
      </section>
    </>
  );
}
