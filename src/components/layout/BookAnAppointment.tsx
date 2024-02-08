import { BookAppointmentModalForm } from "../forms/BookAppointmentForm";
import { Button } from "../ui/button";

interface BookAnAppointmentprops {
  heading: string;
  content1: string;
  content2?: string;
}

export const BookAnAppointment = ({
  heading,
  content1,
  content2,
}: BookAnAppointmentprops) => {
  return (
    <div className="bg-info text-center p-8 text-white">
      <div className="md:w-2/3 mx-auto">
        <span className=" font-extrabold text-3xl">{heading}</span>
        <p className=" mt-10 font-bold text-xl">{content1}</p>
        <p className=" font-bold mt-10 text-xl">{content2}</p>
        <BookAppointmentModalForm />
      </div>
    </div>
  );
};
