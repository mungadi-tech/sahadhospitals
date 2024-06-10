import { ArrowBigRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { ImagesSlider } from "../ui/images-slider";
import { motion } from "framer-motion";

import img1 from "../../assets/images/dialysis.jpg";
import img2 from "../../assets/images/nicu.jpg";
import img3 from "../../assets/images/privateicu.jpg";
import { useScrollDetect } from "@/lib/utils";
import { DialogAppointmentShimmerForm } from "../forms/BookAppointmentForm";

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
        <div className="z-50 flex flex-col items-center justify-center">
          <div className="my-4 flex flex-col items-center justify-center pl-4 text-white">
            <h1 className="text-3xl font-bold capitalize">{bread}</h1>{" "}
            <div className="flex justify-center gap-2 capitalize">
              Home <ArrowBigRight /> {bread}
            </div>
            <div className="my-4">
              <DialogAppointmentShimmerForm label="Book an Appointment" />
            </div>
          </div>
        </div>
      </ImagesSlider>
    </motion.div>
  );
};
