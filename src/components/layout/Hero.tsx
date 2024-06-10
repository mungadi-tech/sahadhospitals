import physician from "../../assets/images/physician.png";
import ShimmerButton from "../ui/simmer-button";
import { motion } from "framer-motion";
import { useScrollDetect } from "@/lib/utils";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";
import { DialogContactForm } from "../forms/ContactForm";
import { DialogAppointmentForm } from "../forms/BookAppointmentForm";
import { DialogFeedbackForm } from "../forms/FeedbackForm";

export const Hero = () => {
  const { isScrolling } = useScrollDetect();
  return (
    <motion.div
      animate={{ marginTop: isScrolling ? 0 : "3rem" }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="flex">
        <img
          className="h-56 w-full md:h-[30rem] lg:h-[45rem]"
          src={physician}
          alt=""
        />
        <Reveal className="absolute mt-6 flex w-[17rem] flex-col p-4 md:mt-28 md:w-[42rem] md:gap-4 md:p-10 lg:w-[60rem] lg:p-20">
          <motion.span
            initial={{ x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.03, ease: "easeIn" }}
            className="w-fit rounded-full text-xs font-bold text-blue-500 md:text-sm"
          >
            AFFORDABLE HEALTHCARE FOR ALL
          </motion.span>
          <motion.span
            initial={{ x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.03, ease: "easeIn" }}
            className="font-mono text-2xl font-bold text-blue-900 md:text-6xl"
          >
            Welcome to Sahad hospitals
          </motion.span>
          <div className="md:mt-6">
            <Link to={"services/"}>
              <ShimmerButton
                className="shadow-2xl"
                background="rgb(145, 195, 253)"
              >
                <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 md:text-lg">
                  Our Services
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </Reveal>
      </div>
      <div className="relative -mt-10 flex items-center justify-center gap-2 p-4 font-mono md:-mt-20 md:gap-10">
        <DialogAppointmentForm />
        <DialogContactForm />

        <DialogFeedbackForm />
      </div>
    </motion.div>
  );
};
