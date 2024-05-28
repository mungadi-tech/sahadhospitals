import { ArrowBigRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { ImagesSlider } from "../ui/images-slider";
import { motion } from "framer-motion";

import img1 from "../../assets/images/dialysis.jpg";
import img2 from "../../assets/images/nicu.jpg";
import img3 from "../../assets/images/privateicu.jpg";
import { Button } from "../ui/button";

const images = [img1, img2, img3];

export const NavbarWithBreadcrums = () => {
  const loc = useLocation();

  const bread = loc.pathname.split("/").map((b) => b);

  return (
    <div className="mt-[4rem]">
      <ImagesSlider className="h-[20rem]" images={images}>
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          <div className="text-white my-4 pl-4 flex flex-col items-center justify-center">
            <h1 className="capitalize font-bold text-3xl">{bread}</h1>{" "}
            <div className="flex gap-2 capitalize justify-center">
              Home <ArrowBigRight /> {bread}
            </div>
            <div className="my-4">
              <Button color="green">Book an Appointment</Button>
            </div>
          </div>
        </motion.div>
      </ImagesSlider>
    </div>
  );
};
