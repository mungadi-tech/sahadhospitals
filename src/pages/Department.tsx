import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Testimonials } from "@/components/layout/Testimonials";
import { WhyRegister } from "@/components/layout/WhyRegister";
import { Stethoscope } from "lucide-react";
import dep from "../assets/images/dartments.jpg";

const departments = [
  {
    title: "Surgical",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    icon: Stethoscope,
  },
  {
    title: "Cardiology",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    icon: Stethoscope,
  },
  {
    title: "X-Ray",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    icon: Stethoscope,
  },
  {
    title: "Surgical",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    icon: Stethoscope,
  },
  {
    title: "Cardiology",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    icon: Stethoscope,
  },
  {
    title: "X-Ray",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    icon: Stethoscope,
  },
  {
    title: "Dental",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    icon: Stethoscope,
  },
  {
    title: "Nephrology",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    icon: Stethoscope,
  },
  {
    title: "Gynaecology",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing.",
    icon: Stethoscope,
  },
];
export default function Department() {
  return (
    <>
      <NavbarWithBreadcrums />
      <div className="bg-info text-center p-8 text-white">
        <div className="md:w-2/3 mx-auto">
          <span className=" font-extrabold text-3xl">
            SPECIALIST MEDICAL RECRUITMENT FOR DOCTORS
          </span>
          <p className=" mt-10 font-bold text-xl">
            Sahad Hospitals' specialized departments, where expertise meets
            compassion. From cutting-edge diagnostics to innovative treatments,
            our dedicated teams ensure comprehensive care.
          </p>
          <p className=" font-bold mt-10 text-xl">
            Whether it's cardiology, oncology, or any other field, trust us for
            excellence. Your health, our commitment. Discover a healthier
            tomorrow with Sahad Hospitals.
          </p>
          <Button className="mt-10">Book An Appointment</Button>
        </div>
      </div>
      <section className="md:flex mt-10">
        <img src={dep} className="w-[30%]" />
        <div className="grid md:grid-cols-3">
          {departments.map((d) => (
            <div className="p-4 group border flex flex-col gap-4 justify-center items-center hover:bg-gradient-to-t from-primary to-secondary hover:text-white">
              {<d.icon className="size-10 text-info group-hover:text-white" />}
              <span className="text-3xl font-bold text-gray-800 group-hover:text-white">
                {d.title}
              </span>
              <p className="text-center text-xl text-gray-600 group-hover:text-white">
                {d.content}
              </p>
            </div>
          ))}
        </div>
      </section>
      <WhyRegister />
      <div className="bg-primary my-10 p-10">
        <p className="text-2xl text-center p-10 font-bold text-white">
          THANK YOU FOR CHOOSING MEDEVOLT HEALTHCARE
        </p>
        <div className="grid gap-4 md:grid-cols-2 p-2">
          <Card className="bg-slate-100/10 border-none">
            <Testimonials
              title="Managing Director"
              name="Aisha Muhammad Sani"
              content="As a healthcare business there is nothing more important than taking care of our people and its important that everyone who works with us feels The Beyond Expectations in everything we do. Welcome to the MedeVolt family!"
            />
          </Card>
          <Card className="bg-slate-100/10 border-none">
            <Testimonials
              title="Managing Director"
              name="Aisha Muhammad Sani"
              content="As a healthcare business there is nothing more important than taking care of our people and its important that everyone who works with us feels The Beyond Expectations in everything we do. Welcome to the MedeVolt family!"
            />
          </Card>
        </div>
      </div>
    </>
  );
}
