import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { Team as T } from "@/components/layout/Team";
import cmd from "../assets/images/cmd.png";
import gmb from "../assets/images/gm.png";
import hr from "../assets/images/cor.png";
import chairman from "../assets/images/chairman.png";
import vc from "../assets/images/vc.png";
import cmac from "../assets/images/cmac.png";
import finance from "../assets/images/finance.jpg";
import Reveal from "@/components/Reveal";

export default function Team() {
  return (
    <div>
      <NavbarWithBreadcrums />

      <Reveal>
        <div className="my-8 text-center">
          <h1 className="text-center text-sm font-bold uppercase text-blue-500">
            LEADING TEAM
          </h1>
          <h1 className="mb-4 text-center font-mono text-4xl font-bold text-tertiary">
            Meet the Top Management Team
          </h1>
        </div>
        <div className="grid gap-4 p-4 md:container md:grid-cols-3">
          <T image={chairman} name="Alh Ibrahim Mijinyawa" title="Chairman " />
          <T image={vc} name="Dr Shamsudeen Aliyu" title="Vice Chairman" />
          <T image={cmd} name="Dr Mohammed Abdullahi" title="CMD" />
          <T image={cmac} name="Dr Mu'awiyya Zagga" title="CMAC" />
          <T image={gmb} name="Alh Nuraddeen H Mahe" title="GM Admin/HR" />
          <T
            image={finance}
            name="Mr Kelvin Ojonugwa Akpala"
            title="GM Finance"
          />
          <T
            image={hr}
            name="Mr Kelvin Ojonugwa Akpala"
            title="GM Business Dev./Corperate Comm."
          />
        </div>
      </Reveal>
    </div>
  );
}
