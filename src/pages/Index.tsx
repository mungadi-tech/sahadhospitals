import { About } from "@/components/layout/About";
import { Hero } from "@/components/layout/Hero";

import Department from "./Department";
import { BookAnAppointment } from "@/components/layout/BookAnAppointment";
import { Testimonials } from "@/components/layout/Testimonials";
import { News } from "@/components/layout/News";
import Reveal from "@/components/Reveal";
import GetInTouch from "@/components/layout/GetInTouch";

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Reveal>
        <Department />
      </Reveal>
      <Reveal>
        <BookAnAppointment />
      </Reveal>
      <Reveal className="my-10">
        <h1 className="mb-4 text-center font-mono text-4xl font-bold text-tertiary">
          Latest News
        </h1>
        <Reveal>
          <News />
        </Reveal>
      </Reveal>
      <Testimonials />
      <Reveal>
        <GetInTouch />
      </Reveal>
    </>
  );
}
