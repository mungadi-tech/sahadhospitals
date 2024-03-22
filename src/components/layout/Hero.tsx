import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";
import c1 from "../../assets/images/c1.jpg";
import c2 from "../../assets/images/c2.jpg";
import c3 from "../../assets/images/c3.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="bg-info p-4 flex justify-center items-center">
      <HeroCarousel />
    </div>
  );
};

function HeroCarousel() {
  const c_images = [
    {
      headline: "WELCOME TO SAHAD HOSPITALS",
      slogan: "Affordable Healthcare for All",
      link: "",
      image: c1,
    },
    {
      headline: "WELCOME TO SAHAD HOSPITALS",
      slogan: "Affordable Healthcare for All",
      link: "",
      image: c2,
    },
    {
      headline: "WELCOME TO SAHAD HOSPITALS",
      slogan: "Affordable Healthcare for All",
      link: "",
      image: c3,
    },
  ];

  return (
    <Carousel
      className="md:w-[90%] w-[100%]"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {c_images.map((i) => (
          <CarouselItem className="mx-1">
            <div className="flex md:h-[35rem] h-96  text-white">
              <img
                src={i.image}
                alt=""
                className="absolute w-full h-full rounded-3xl"
              />
              <div className="relative h-fit my-auto mx-4 md:mx-auto backdrop-blur-sm bg-slate-800/30 font-bold flex flex-col justify-center md:gap-4 p-4 items-center">
                <span className="text-4xl md:text-[3rem] text-center">
                  {i.headline}
                </span>
                <span className="md:text-3xl text-md">{i.slogan}</span>
                <Link to={"about/"}>
                  <Button className="mt-4 h-16 p-8 md:w-60 text-2xl rounded-full opacity-80">
                    READ MORE...
                  </Button>
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
