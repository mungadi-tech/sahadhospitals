import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  Cog,
  Cuboid,
  DropletsIcon,
  FlaskConical,
  Heart,
  HeartPulse,
  Hospital,
  Microscope,
  RadiationIcon,
} from "lucide-react";
import { buttonVariants } from "../ui/button";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import NumberTicker from "../ui/number-ticker";
import { MagicCard, MagicContainer } from "../ui/magic-card";
import ShimmerButton from "../ui/simmer-button";
import Reveal from "../Reveal";

const counter = [
  {
    title: "Bed Spaces",
    count: 200,
  },
  {
    title: "Specialties",
    count: 20,
  },
  {
    title: "Caregivers",
    count: 200,
  },
  {
    title: "Operating Theartres",
    count: 7,
  },
  {
    title: "Critical Care Beds",
    count: 10,
  },
  {
    title: "Dialysis Beds",
    count: 13,
  },
];
export function About() {
  const aboutRef = useRef(null);

  useScroll({
    target: aboutRef,
  });

  return (
    <div className="mx-auto p-4 md:my-14 md:w-[90%]">
      <div className="flex flex-col items-center justify-center gap-4">
        <motion.h1 className="text-center font-mono font-bold uppercase text-info">
          Your health is our priority
        </motion.h1>
        <motion.p
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center font-serif text-sm font-normal text-gray-700 md:w-1/2 md:text-lg"
        >
          Sahad Hospitals offer cutting-edge technology, expert care, and
          personalized service for superior healthcare. Trust our commitment to
          excellence and comprehensive services for your well-being. Your
          health, our priority.
        </motion.p>
        <div className="flex justify-center">
          <Link
            to={"about/"}
            className={buttonVariants({
              variant: "ghost",
              className: "gap-2 font-serif text-info",
            })}
          >
            Learn More <ArrowRight />
          </Link>
        </div>

        <Reveal className="md:text-md mt-2 grid grid-cols-3 justify-between gap-2 rounded-md bg-gradient-to-l from-info to-tertiary py-10 font-mono text-xs text-white md:px-10 lg:w-1/2">
          {counter.map((c) => (
            <div
              key={c.title}
              className="flex flex-col items-center justify-center p-2"
            >
              <span className="text-xl font-bold">
                <NumberTicker value={c.count} className="text-4xl text-white" />
                +
              </span>
              <span className="text-center md:text-2xl">{c.title}</span>
            </div>
          ))}
        </Reveal>
      </div>

      <MiniServices />
    </div>
  );
}

function MiniServices() {
  const surgeries = [
    {
      title: "Cardiac Sciences",
      icon: HeartPulse,
    },
    {
      title: "Critical Care",
      icon: FlaskConical,
    },

    {
      title: "Surgery and Chemotherapy",
      icon: Microscope,
    },

    {
      title: "Nuclear Medicine",
      icon: RadiationIcon,
    },
  ];

  return (
    <motion.div
      className="mt-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeIn" }}
      viewport={{ once: true }}
    >
      <Reveal>
        <div className="flex flex-col justify-center">
          <h1 className="text-center text-sm font-bold uppercase text-blue-500">
            The Best Medics, Doctors & Physicians
          </h1>
          <h1 className="mb-4 text-center font-mono text-4xl font-bold text-tertiary">
            Our Services
          </h1>
          <div className="flex justify-between gap-4">
            <div className="flex flex-col gap-2 font-mono">
              {surgeries.map((s) => (
                <MagicContainer key={s.title}>
                  <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl">
                    <s.icon className="stroke-info group-hover:stroke-white md:h-10 md:w-10" />
                    <span className="md:text-md text-center text-xs text-gray-700 group-hover:text-white">
                      {s.title}
                    </span>
                  </MagicCard>
                </MagicContainer>
              ))}
              <Link to={"services/"} className="flex w-full">
                <ShimmerButton
                  className="h-8 w-full"
                  background="rgb(30 58 138)"
                >
                  View All
                </ShimmerButton>
              </Link>
            </div>
            <WhyChooseUs />
          </div>
        </div>
      </Reveal>
    </motion.div>
  );
}

const chooseUs = [
  {
    icon: Cog,
    title: "Multidiciplinary Expertise",
  },
  {
    icon: CalendarCheck,
    title: "State-of-the-Art Facilities",
  },
  {
    icon: Heart,
    title: "Collaborative Approach",
  },

  {
    icon: DropletsIcon,
    title: "Blood Bank",
  },
  {
    icon: Cuboid,
    title: "3D & 4D Ultrasound Laboratory",
  },
  {
    icon: Hospital,
    title: "Emergency & Trauma Unit",
  },
];
const WhyChooseUs = () => {
  return (
    <MagicContainer>
      <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl md:p-20">
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 md:p-4 lg:grid-cols-3">
          {chooseUs.map((a) => (
            <div key={a.title} className="md:mx-10 lg:mt-8">
              <div className="flex flex-col items-center gap-4 text-center font-mono">
                <a.icon className="stroke-info md:h-14 md:w-14" />
                <span className="text-xs">{a.title}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="md:text-md mx-auto hidden font-serif text-sm md:mt-2 md:block lg:mt-10 lg:w-[50rem]">
          The team at Sahad Hospital consists of highly skilled and experienced
          medical professionals who are dedicated to delivering exceptional
          care. From surgeons and physicians to nurses and support staff, every
          member of the team is committed to providing personalized treatment
          plans and ensuring patient comfort throughout their stay. In addition
          to its impressive infrastructure and medical expertise, Sahad Hospital
          also places great importance on patient satisfaction.
        </p>
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </MagicCard>
    </MagicContainer>
  );
};
