import {
  About,
  CTA,
  Hero,
  Projects,
  Reviews,
  Services,
} from "@/components/homepage";

export default function Home() {
  return (
    <>
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
    </>
  );
}
