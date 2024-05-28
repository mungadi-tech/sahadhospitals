import { BookAppointmentForm } from "../forms/BookAppointmentForm";

export const BookAnAppointment = () => {
  return (
    <div className="bg-book bg-no-repeat my-10 md:h-[32rem] bg-cover">
      <div className="flex md:flex-row flex-col justify-between gap-4 md:p-10 p-2">
        <div className="md:w-[28rem] lg:w-full p-4">
          <p className=" mt-10 font-bold font-mono text-2xl md:text-start text-center">
            Book an Appointment
          </p>
          <p className="mt-4 font-serif md:text-start text-center text-xs lg:text-lg md:text-sm">
            Easily schedule your appointment at Sahad Hospital online. Fill out
            our form with your details and preferences. Our team will promptly
            confirm your booking, ensuring a smooth healthcare experience.
            <br /> We usually get back to you within 12-24 hours.
          </p>
        </div>
        <div className="p-4 w-full bg-slate-200/30">
          <BookAppointmentForm />
        </div>
      </div>
    </div>
  );
};
