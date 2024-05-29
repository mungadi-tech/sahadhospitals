import { ContactForm } from "@/components/forms/ContactForm";

import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Cable, MailPlus, MapPin, Phone } from "lucide-react";

const info = [
  {
    title: "Our Address",
    desc: "Plot 1756 Cadastral zone E27 Apo Resettlement, Abuja",
    icon: MapPin,
  },
  {
    title: "Call Us",
    desc: "+2327049225550",
    icon: Phone,
  },
  {
    title: "Email Us",
    desc: "info@sahadhospitals.com",
    icon: MailPlus,
  },
  {
    title: "Customer Support",
    desc: "info@sahadhospitals.com",
    icon: Cable,
  },
];

export default function Contact() {
  return (
    <>
      <NavbarWithBreadcrums />
      <section className="bg-gradient-to-l from-primary to-secondary grid md:grid-cols-2 gap-4 my-14 p-4 mx-auto text-white">
        <div className="flex flex-col gap-2">
          {info.map((i) => (
            <div className="flex gap-2 mt-4 items-center">
              {<i.icon />}
              <div>
                <span className="text-xl">{i.title}</span>
                <p className=" mt-2">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <ContactForm />
      </section>
      <section className="bg-gradient-to-l from-primary to-secondary grid md:grid-cols-2 gap-4 my-14 p-4 mx-auto text-white">
        <BackgroundBeams />
        <div className="grid md:grid-cols-3">
          <div className="p-4 border-r-4 flex flex-col gap-10 ">
            <span className="text-3xl font-bold text-gray-800">
              LEAVE A FEED BACK
            </span>
          </div>
          <div className="p-4 group border-r-4 flex flex-col gap-4 ">
            <p className="text-lg text-white">
              Your input is valuable in helping us better understand your needs
              and tailor our services accordingly
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
