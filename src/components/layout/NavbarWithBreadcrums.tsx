import { ArrowBigRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { ImagesSlider } from "../ui/images-slider";
import { motion } from "framer-motion";

import img1 from "../../assets/images/dialysis.jpg";
import img2 from "../../assets/images/nicu.jpg";
import img3 from "../../assets/images/privateicu.jpg";
import { useScrollDetect } from "@/lib/utils";
import ShimmerButton from "../ui/simmer-button";

const images = [img1, img2, img3];

export const NavbarWithBreadcrums = () => {
  const { isScrolling } = useScrollDetect();
  const loc = useLocation();

  const bread = loc.pathname.split("/").map((b) => b);

  return (
    <motion.div
      animate={{
        marginTop: isScrolling ? 0 : 50,
        opacity: 1,
        y: 0,
      }}
      transition={{ ease: "easeInOut", type: "tween" }}
      className=""
    >
      <ImagesSlider className="h-[20rem]" images={images}>
        <div className="z-50 flex flex-col justify-center items-center">
          <div className="text-white my-4 pl-4 flex flex-col items-center justify-center">
            <h1 className="capitalize font-bold text-3xl">{bread}</h1>{" "}
            <div className="flex gap-2 capitalize justify-center">
              Home <ArrowBigRight /> {bread}
            </div>
            <div className="my-4">
              <ShimmerButton className="shadow-2xl" background="none">
                <span className="whitespace-pre-wrap text-center font-medium leading-none md:text-lg tracking-tight text-white dark:from-white dark:to-slate-900/10">
                  Book an Appointment
                </span>
              </ShimmerButton>
            </div>
          </div>
        </div>
      </ImagesSlider>
    </motion.div>
  );
};
