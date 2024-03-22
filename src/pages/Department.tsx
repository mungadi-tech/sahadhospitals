import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { Card } from "@/components/ui/card";
import { Testimonials } from "@/components/layout/Testimonials";
import { WhyRegister } from "@/components/layout/WhyRegister";
import { Stethoscope } from "lucide-react";
import dep from "../assets/images/dartments.jpg";
import { BookAnAppointment } from "@/components/layout/BookAnAppointment";

const departments = [
  {
    title: "General Medicine",
    content:
      "From routine check-ups to complex medical conditions, our expert physicians provide personalized care to address all your healthcare needs.",
    icon: Stethoscope,
  },
  {
    title: "Accident & Emergency",
    content:
      " Our experienced gynecologists offer comprehensive women's health services, including preventive care, reproductive health management",
    icon: Stethoscope,
  },
  {
    title: "Internal Medicine",
    content:
      " Our experienced gynecologists offer comprehensive women's health services, including preventive care, reproductive health management",
    icon: Stethoscope,
  },
  {
    title: "Surgery",
    content:
      "Our highly skilled surgeons utilize advanced techniques and cutting-edge technology to perform a wide range of surgical procedures with precision and safety",
    icon: Stethoscope,
  },
  {
    title: "Cardiology",
    content:
      "We offer comprehensive cardiac care, including diagnostics, intervention, and rehabilitation programs to help you maintain a healthy heart.",
    icon: Stethoscope,
  },
  {
    title: "Orthopedics",
    content:
      "Our orthopedic specialists provide advanced treatments for musculoskeletal conditions, including joint replacements, sports injuries, and trauma management.",
    icon: Stethoscope,
  },
  {
    title: "Pharmacy",
    content: " ",
    icon: Stethoscope,
  },
  {
    title: "Radiology",
    content: " ",
    icon: Stethoscope,
  },
  {
    title: "Laboratory",
    content: " ",
    icon: Stethoscope,
  },
  {
    title: "Nephrology",
    content:
      "We have a dedicated team ofneurologists who specialize in diagnosing and treating neurological disorders using the latest advancements in the field.",
    icon: Stethoscope,
  },
  {
    title: "Obsetrics & Gynaecology",
    content:
      " Our experienced gynecologists offer comprehensive women's health services, including preventive care, reproductive health management",
    icon: Stethoscope,
  },
  {
    title: "Peadiatrics",
    content: " ",
    icon: Stethoscope,
  },
];
export default function Department() {
  return (
    <>
      <NavbarWithBreadcrums />
      <BookAnAppointment
        heading=""
        content2="Whether it's cardiology, oncology, or any other field, trust us for
            excellence. Your health, our commitment. Discover a healthier
            tomorrow with Sahad Hospitals."
        content1="Sahad Hospitals' specialized departments, where expertise meets
            compassion. From cutting-edge diagnostics to innovative treatments,
            our dedicated teams ensure comprehensive care."
      />

      <section className="md:flex mt-10">
        <img src={dep} className="w-[30%]" />
        <div className="grid md:grid-cols-3">
          {departments.map((d) => (
            <div className="p-4 group border flex flex-col gap-4 justify-center items-center hover:bg-gradient-to-t from-primary to-secondary hover:text-white">
              {<d.icon className="size-6 text-info group-hover:text-white" />}
              <span className="text-xl font-bold text-gray-800 group-hover:text-white">
                {d.title}
              </span>
              <p className="text-center text-xs text-gray-600 group-hover:text-white">
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
