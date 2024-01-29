import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Autoplay from "embla-carousel-autoplay";

export const Hero = () => {
  return (
    <div className="bg-info p-4 md:h-[45rem] flex justify-center items-center -mt-2 md:-mt-10">
      <div className="w-full md:-mt-[10rem] flex justify-center">
        <HeroCarousel />
      </div>
    </div>
  );
};

function HeroCarousel() {
  return (
    <Carousel
      className="w-[90%]"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="rounded-3xl">
          <div className="hero__image md:mt-[200px] filter brightness-90">
            <div className="absolute bg-slate-700/50 font-bold w-full rounded-3xl  h-full flex flex-col justify-center md:gap-4 p-4">
              <div>
                <span className="text-3xl md:text-[3rem] text-white">
                  WELCOME TO SAHAD HOSPITALS
                </span>
                <br />
                <span className="md:text-3xl text-md text-white">
                  Affordable Healthcare for All
                </span>
              </div>
              <div>
                <Button className="mt-4 h-16  md:w-60 text-2xl rounded-full opacity-80">
                  READ MORE...
                </Button>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-3xl">
          <div className="hero__image2 md:mt-[200px]">
            <div className="absolute bg-slate-700/50 font-bold w-full rounded-3xl  h-full flex flex-col justify-center md:gap-4 p-4">
              <div>
                <span className="text-3xl md:text-[3rem] text-white">
                  WELCOME TO SAHAD HOSPITALS
                </span>
                <br />
                <span className="md:text-3xl text-md text-white">
                  Affordable Healthcare for All
                </span>
              </div>
              <div>
                <Button className="mt-4 h-16  md:w-60 text-2xl rounded-full opacity-80">
                  READ MORE...
                </Button>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem className="rounded-3xl">
          <div className="hero__image3 md:mt-[200px]">
            <div className="absolute bg-slate-700/50 font-bold w-full rounded-3xl  h-full flex flex-col justify-center md:gap-4 p-4">
              <div>
                <span className="text-3xl md:text-[3rem] text-white">
                  WELCOME TO SAHAD HOSPITALS
                </span>
                <br />
                <span className="md:text-3xl text-md text-white">
                  Affordable Healthcare for All
                </span>
              </div>
              <div>
                <Button className="mt-4 h-16  md:w-60 text-2xl rounded-full opacity-80">
                  READ MORE...
                </Button>
              </div>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
