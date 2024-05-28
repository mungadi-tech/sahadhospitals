// import physician from "../../assets/images/physician.png";
import building from "../../assets/images/front.jpg";
import ShimmerButton from "../ui/simmer-button";
import { Calendar, Hospital, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollDetect } from "@/lib/utils";

export const Hero = () => {
  const { isScrolling } = useScrollDetect();
  return (
    <motion.div animate={{ marginTop: isScrolling ? 0 : "3rem" }}>
      <div className="flex">
        <img
          className="w-full lg:h-[45rem] md:h-[35rem] h-64"
          src={building}
          alt=""
        />
        <div className="absolute mt-14 flex flex-col md:gap-4 md:mt-28  w-[17rem] md:w-[42rem] lg:w-[60rem] md:p-10 lg:p-20 p-4">
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
            <ShimmerButton
              className="shadow-2xl"
              background="rgb(145, 195, 253)"
            >
              <span className="whitespace-pre-wrap text-center font-medium leading-none md:text-lg tracking-tight text-white dark:from-white dark:to-slate-900/10">
                Our Services
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
      <div className="relative p-4 flex gap-2 md:gap-10 justify-center items-center -mt-10 md:-mt-20">
        <div className="bg-tertiary p-2 md:p-7 w-32 md:w-72 rounded-md text-white text-xs flex gap-2 items-center justify-between">
          <p className="flex gap-1">
            <span className="font-mono">Appointment</span>
          </p>
          <Calendar className="md:h-14 md:w-14" />
        </div>
        <div className="bg-info font-mono p-2 md:p-7 w-32 md:w-72 rounded-md text-tertiary flex text-xs gap-2 items-center justify-between">
          Contact Us <PhoneCall className="md:h-14 md:w-14" />
        </div>
        <div className="bg-blue-500 font-mono p-2 w-32 md:w-72 md:p-7 rounded-md text-white flex text-xs gap-2 items-center justify-between">
          Feedback <Hospital className="md:h-14 md:w-14" />
        </div>
      </div>
    </motion.div>
  );
};
