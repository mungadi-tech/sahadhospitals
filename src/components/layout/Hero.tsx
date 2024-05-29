import physician from "../../assets/images/physician.png";
// import building from "../../assets/images/front.jpg";
import ShimmerButton from "../ui/simmer-button";
import { Calendar, Hospital, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollDetect } from "@/lib/utils";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

export const Hero = () => {
  const { isScrolling } = useScrollDetect();
  return (
    <motion.div
      animate={{ marginTop: isScrolling ? 0 : "3rem" }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="flex">
        <img
          className="w-full lg:h-[45rem] md:h-[30rem] h-56"
          src={physician}
          alt=""
        />
        <Reveal className="absolute mt-6 flex flex-col md:gap-4 md:mt-28  w-[17rem] md:w-[42rem] lg:w-[60rem] md:p-10 lg:p-20 p-4">
          <motion.span
            initial={{ x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.03, ease: "easeIn" }}
            className="text-blue-500 font-bold rounded-full text-xs md:text-sm w-fit"
          >
            AFFORDABLE HEALTHCARE FOR ALL
          </motion.span>
          <motion.span
            initial={{ x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.03, ease: "easeIn" }}
            className="text-2xl md:text-6xl font-bold font-mono text-blue-900"
          >
            Welcome to Sahad hospitals
          </motion.span>
          <div className="md:mt-6">
            <Link to={"services/"}>
              <ShimmerButton
                className="shadow-2xl"
                background="rgb(145, 195, 253)"
              >
                <span className="whitespace-pre-wrap text-center font-medium leading-none md:text-lg tracking-tight text-white dark:from-white dark:to-slate-900/10">
                  Our Services
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="relative font-mono p-4 flex gap-2 md:gap-10 justify-center items-center -mt-10 md:-mt-20">
        <div className="bg-tertiary p-2 md:p-7 w-32 md:w-72 rounded-md text-white text-xs flex gap-2 items-center justify-between">
          Appointment
          <Calendar className="md:h-14 md:w-14" />
        </div>
        <div className="bg-info p-2 md:p-7 w-32 md:w-72 rounded-md text-tertiary flex text-xs gap-2 items-center justify-between">
          Contact <PhoneCall className="md:h-14 md:w-14" />
        </div>
        <div className="bg-blue-500 p-2 w-32 md:w-72 md:p-7 rounded-md text-white flex text-xs gap-2 items-center justify-between">
          Feedback <Hospital className="md:h-14 md:w-14" />
        </div>
      </div>
    </motion.div>
  );
};
