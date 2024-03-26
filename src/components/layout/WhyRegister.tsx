import { ArrowUp, CalendarCheck, Cog, Heart } from "lucide-react";
import doctor from "../../assets/images/s4.jpg";

const chooseUs = [
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
        <div className="grid w-[90%] mx-auto gap-4 md:grid-cols-2">
          <div>
            <p className="text-3xl text-center md:text-left">WHY CHOOSE US?</p>
            <div className="gap-4 grid md:grid-cols-2 mt-4">
              {chooseUs.map((a) => (
                <div className="flex items-center gap-4">
                  <a.icon className=" h-24 w-24 text-info" />
                  {a.content}
                </div>
              ))}
            </div>
          </div>
          <img className="rounded-xl hidden md:block" src={doctor} alt="" />
        </div>
      </div>
    </>
  );
};
