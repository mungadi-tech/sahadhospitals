import { BookAnAppointment } from "@/components/layout/BookAnAppointment";
import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { Team as T } from "@/components/layout/Team";
import cmd from "../assets/images/cmd.jpg";
import gmb from "../assets/images/gmb.jpg";
import gmf from "../assets/images/gmf.jpg";
import vc from "../assets/images/vc.jpg";
import new_image from "../assets/images/2150896634.jpg";

export default function Team() {
  return (
    <div>
      <NavbarWithBreadcrums />
      <BookAnAppointment
        content1="Meet our dedicated team at Sahad Hospitals, where compassionate care meets expertise. Our skilled doctors and efficient administrative staff work collaboratively to ensure your well-being."
        content2="Get to know the faces behind our commitment to excellence. Your health is in capable hands with the professionals at Sahad Hospitals."
        heading="MEET OUR EXCEPTIONAL TEAM"
      />

      <section>
        <div className="text-center my-8">
          <h1 className="font-bold text-xl text-primary">LEADING TEAM</h1>
          <span className="font-bold text-3xl md:text-4xl text-gray-600">
            Meet Our Administrators
          </span>
        </div>
        <div className="grid md:grid-cols-4 gap-4 p-4">
          <T
            image={cmd}
            linkedln=""
            name="Alh Ibrahim Mijinyawa"
            title="Chairman "
            twitter=""
          />
          <T
            image={vc}
            linkedln=""
            name="Dr Shamsudeen Aliyu"
            title="Vice Chairman"
            twitter=""
          />
          <T
            image={cmd}
            linkedln=""
            name="Dr Mohammed Abdullahi"
            title="CMD"
            twitter=""
          />
          <T
            image={new_image}
            linkedln=""
            name="John Doe"
            title="CMAC"
            twitter=""
          />
          <T
            image={new_image}
            linkedln=""
            name="John Doe"
            title="GM ADMIN"
            twitter=""
          />
          <T
            image={gmb}
            linkedln=""
            name="Mr Kelvin Ojonugwa Akpala"
            title="GM BUSSINESS DEVELOPMENT"
            twitter=""
          />
          <T
            image={gmf}
            linkedln=""
            name="Adebisi Adebayo Lukman (SABA)"
            title="GM FINANCE"
            twitter=""
          />
          <T
            image={gmf}
            linkedln=""
            name="Abbas Bello Nagwari"
            title="Asst. Manager BDCC"
            twitter=""
          />
        </div>

        <div className="text-center my-8">
          <h1 className="font-bold text-xl text-primary">LEADING TEAM</h1>
          <span className="font-bold text-3xl md:text-4xl text-gray-600">
            Meet Our Medical Staffs
          </span>
        </div>
        <div className="grid md:grid-cols-4 gap-4 p-4">
          <T
            image={new_image}
            linkedln=""
            name="John Doe"
            title="MD"
            twitter=""
          />
          <T
            image={new_image}
            linkedln=""
            name="John Doe"
            title="MD"
            twitter=""
          />
          <T
            image={new_image}
            linkedln=""
            name="John Doe"
            title="MD"
            twitter=""
          />
          <T
            image={new_image}
            linkedln=""
            name="John Doe"
            title="MD"
            twitter=""
          />
          <T
            image={new_image}
            linkedln=""
            name="John Doe"
            title="MD"
            twitter=""
          />
          <T
            image={new_image}
            linkedln=""
            name="John Doe"
            title="MD"
            twitter=""
          />
          <T
            image={new_image}
            linkedln=""
            name="John Doe"
            title="MD"
            twitter=""
          />
          <T
            image={new_image}
            linkedln=""
            name="John Doe"
            title="MD"
            twitter=""
          />
        </div>
      </section>
    </div>
  );
}
