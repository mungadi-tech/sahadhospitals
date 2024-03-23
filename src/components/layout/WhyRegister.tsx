import { ArrowUp, CalendarCheck, Cog, Heart } from "lucide-react";
import doctor from "../../assets/images/s4.jpg";
import { Card } from "../ui/card";
import { Testimonials } from "./Testimonials";

const whyRegister = [
  {
    content:
      "Consultants of all specialties are now able to register for remote working at the Virtual Hospital",
    icon: Cog,
  },
  {
    content:
      "We have a variety of opportunities for flexible working, from ad-hoc shifts to long term contracts.",
    icon: CalendarCheck,
  },
  {
    content:
      "The Beyond Expectations means not only competitive pay but supporting you as person throughout your role",
    icon: Heart,
  },
  {
    content:
      "Take the next step in your career with the help of our dedicated, experienced, specialist teams.",
    icon: ArrowUp,
  },
];
export const WhyRegister = () => {
  return (
    <>
      <div className="md:p-20 p-6">
        <div className="grid w-[90%] mx-auto gap-4 place-content-center place-items-center  md:grid-cols-2">
          <div className="">
            <p className="text-3xl md:my-10 text-center md:text-left">
              WHY CHOOSE SAHAD HOSPITAL?
            </p>
            <div className="place-items-center gap-4 grid md:grid-cols-2 mt-4">
              {whyRegister.map((a) => (
                <div className="flex items-center gap-4">
                  <a.icon className=" h-24 w-24 text-info" />
                  {a.content}
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <img className="rounded-xl" src={doctor} alt="" />
          </div>
        </div>
      </div>
      <div className="bg-primary my-10 p-10">
        <p className="text-2xl text-center p-10 font-bold text-white">
          THANK YOU FOR CHOOSING SAHAD HOSPITAL
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
};
