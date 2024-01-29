import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { Button } from "@/components/ui/button";

export const Contact = () => {
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
    </>
  );
};
