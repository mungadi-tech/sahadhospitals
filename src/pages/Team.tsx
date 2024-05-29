import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { Team as T } from "@/components/layout/Team";
import cmd from "../assets/images/cmd.png";
import gmb from "../assets/images/gm.png";
import gmf from "../assets/images/gm.png";
import hr from "../assets/images/cor.png";
import chairman from "../assets/images/chairman.png";
import vc from "../assets/images/vc.png";
import cmac from "../assets/images/cmac.png";
import Reveal from "@/components/Reveal";

export default function Team() {
  return (
    <div>
      <NavbarWithBreadcrums />

      <Reveal>
        <div className="text-center my-8">
          <h1 className="text-sm text-center text-blue-500 uppercase font-bold">
            LEADING TEAM
          </h1>
          <h1 className="text-4xl mb-4 text-center text-tertiary font-bold font-mono">
            Meet the Top Management Team
          </h1>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-4 p-4">
          <T image={chairman} name="Alh Ibrahim Mijinyawa" title="Chairman " />
          <T image={vc} name="Dr Shamsudeen Aliyu" title="Vice Chairman" />
          <T image={cmd} name="Dr Mohammed Abdullahi" title="CMD" />
          <T image={cmac} name="Dr Muawiyya Zagga" title="CMAC" />
          <T image={hr} name="Alh Nuraddeen H Mahe" title="GM Admin/HR" />
          <T
            image={gmb}
            name="Mr Kelvin Ojonugwa Akpala"
            title="GM Business Dev./Corperate Comm."
          />
          <T
            image={gmf}
            name="Adebisi Adebayo Lukman (SABA)"
            title="GM Finance/Account"
          />
        </div>
      </Reveal>
    </div>
  );
}
