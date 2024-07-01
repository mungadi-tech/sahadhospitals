import Reveal from "@/components/Reveal";
import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { Services as S } from "@/components/layout/Services";
import { MagicCard, MagicContainer } from "@/components/ui/magic-card";
import { Mission } from "./About";
import site from "../assets/images/serv.jpg";

export default function Services() {
  return (
    <>
      <NavbarWithBreadcrums />
      <div className="container grid w-full justify-center gap-4 p-4 md:grid-cols-1 lg:grid-cols-2">
        <Reveal>
          <MagicContainer className={"hidden h-[30rem] md:flex"}>
            <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl">
              <img
                className="absolute hidden h-full w-full rounded-md md:block"
                src={site}
                alt=""
              />
            </MagicCard>
          </MagicContainer>
        </Reveal>
        <Reveal>
          <MagicContainer>
            <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl md:p-20">
              <h1 className="text-sm font-bold uppercase text-blue-500">
                WELCOME TO SAHAD HOSPITALS
              </h1>
              <h1 className="text-center font-mono text-xl font-bold text-tertiary md:text-4xl">
                Best Care for Your Good Health
              </h1>
              <div className="mt-4">
                <Mission />
              </div>
            </MagicCard>
          </MagicContainer>
        </Reveal>
      </div>
      <div className="mt-10">
        <S />
      </div>
    </>
  );
}
