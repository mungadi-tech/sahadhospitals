import { Button } from "@/components/ui/button";
import doctor from "../assets/images/doctors.jpg";
import {
  ArrowUp,
  CalendarCheck,
  Cog,
  Heart,
  PersonStanding,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";

export default function Service() {
  return (
    <>
      <NavbarWithBreadcrums />
      <div className="bg-info text-center p-8 text-white">
        <div className="md:w-2/3 mx-auto">
          <span className=" font-extrabold text-3xl">
            SPECIALIST MEDICAL RECRUITMENT FOR DOCTORS
          </span>
          <p className=" mt-10 font-bold text-xl">
            At MedeVolt Healthcare, our experts go the extra mile to find
            doctors all over the country their next opportunity from medical
            officer to consultant level
          </p>
          <p className=" font-bold mt-10 text-xl">
            Our team understand that you're a unique specialist in your field
            and as such, we believe your career deserves specialist attention
            with service uniquely tailored for you
          </p>
          <Button className="mt-10">Book An Appointment</Button>
        </div>
      </div>
      <div className="md:p-20 p-6">
        <div className="grid w-[90%] mx-auto gap-4 place-content-center place-items-center  md:grid-cols-2">
          <div className="">
            <p className="text-3xl md:my-10 text-center md:text-left">
              WHY REGISTER WITH MEDEVOLT HEALTHCARE?
            </p>
            <div className="place-items-center gap-4 grid md:grid-cols-2 mt-4">
              <div className="flex items-center gap-4">
                <Cog className=" h-24 w-24 text-info" />
                Consultants of all specialties are now able to register for
                remote working at the "Virtual Hospital"
              </div>
              <div className=" flex items-center gap-4">
                <CalendarCheck className=" h-24 w-24 text-info" />
                We have a variety of opportunities for flexible working, from
                ad-hoc shifts to long term contracts.
              </div>
              <div className=" flex items-center gap-4">
                <Heart className="h-24 w-24 text-info" />
                The Beyond Expectations means not only competitive pay but
                supporting you as person throughout your role
              </div>
              <div className=" flex items-center gap-4">
                <ArrowUp className="h-24 w-24 text-info" />
                Take the next step in your career with the help of our
                dedicated, experienced, specialist teams.
              </div>
            </div>
          </div>
          <div className="">
            <img className="rounded-xl" src={doctor} alt="" />
          </div>
        </div>
      </div>
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

interface TestimonialsTypes {
  name: string;
  content: string;
  title: string;
}
const Testimonials = ({ content, name, title }: TestimonialsTypes) => {
  return (
    <div className="p-4 text-white">
      <div className="flex gap-2">
        <PersonStanding className="h-24 w-96 bg-primary hidden md:block rounded-full" />

        <div className="">
          <span className="uppercase font-bold text-xl">{name}</span>
          <br />
          <span className="font-bold">{title}</span>
          <br />
          <p className="mt-4">{content}</p>
        </div>
      </div>
    </div>
  );
};
