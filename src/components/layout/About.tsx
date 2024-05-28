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

export function About() {
  const aboutRef = useRef(null);

  useScroll({
    target: aboutRef,
  });

  return (
    <div className="md:my-14 p-4 md:w-[90%] mx-auto">
      <div className="flex gap-4 flex-col justify-center items-center">
        <motion.h1 className="uppercase font-mono font-bold text-info text-center">
          Your health is our priority
        </motion.h1>
        <motion.p
          ref={aboutRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center font-serif text-gray-700 font-normal text-sm md:text-lg md:w-1/2"
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
              className: "text-info gap-2 font-serif",
            })}
          >
            Learn More <ArrowRight />
          </Link>
        </div>

        <div className="font-mono grid grid-cols-3 rounded-md md:w-1/2 gap-2 justify-between bg-gradient-to-l from-info to-tertiary text-white mt-2">
          <div className="flex flex-col items-center justify-center p-2">
            <span className="text-xl font-bold">
              <NumberTicker value={200} className="text-white" />
            </span>
            <span className="md:text-sm text-center">Bed Spaces</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <span className="text-xl font-bold">
              <NumberTicker value={20} className="text-white" />+
            </span>
            <span className="md:text-sm text-center">Specialties</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <span className="text-xl font-bold">
              <NumberTicker value={200} className="text-white" />+
            </span>
            <span className="md:text-sm text-center">Caregivers</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <span className="text-xl font-bold">
              <NumberTicker value={7} className="text-white" />+
            </span>
            <span className="md:text-sm text-center">Operating Theartres</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <span className="text-xl font-bold">
              <NumberTicker value={10} className="text-white " />+
            </span>
            <span className="md:text-sm text-center">Critical care beds</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2">
            <span className="text-xl font-bold">
              <NumberTicker value={13} className="text-white" />+
            </span>
            <span className="md:text-sm text-center">Dialysis Beds</span>
          </div>
        </div>
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
      <div className="flex flex-col justify-center">
        <h1 className="text-sm text-center text-blue-500 uppercase font-bold">
          The Best Medics, Doctors & Physicians
        </h1>
        <h1 className="text-4xl mb-4 text-center text-tertiary font-bold font-mono">
          Our Services
        </h1>
        <div className="flex gap-4 justify-between">
          <div className="flex flex-col gap-2 font-mono">
            {surgeries.map((s) => (
              <MagicContainer>
                <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden  shadow-2xl">
                  <s.icon className="md:w-10 md:h-10 stroke-info group-hover:stroke-white" />
                  <span className="text-gray-700 text-xs md:text-md text-center group-hover:text-white">
                    {s.title}
                  </span>
                </MagicCard>
              </MagicContainer>
            ))}

            <ShimmerButton background="rgb(30 58 138)">View All</ShimmerButton>
          </div>
          <WhyChooseUs />
        </div>
      </div>
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
      <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden md:p-20 shadow-2xl">
        <div className="gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 md:p-4">
          {chooseUs.map((a) => (
            <div className="md:mx-10 lg:mt-8">
              <div className="flex flex-col items-center gap-4 font-mono text-center">
                <a.icon className="md:h-14 md:w-14 stroke-info" />
                <span className="text-xs">{a.title}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="hidden md:block text-sm md:mt-2 lg:mt-10 lg:w-[50rem] mx-auto md:text-md  font-serif">
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
