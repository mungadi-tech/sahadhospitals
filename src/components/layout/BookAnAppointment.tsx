import { AppointmentForm } from "../forms/BookAppointmentForm";

export const BookAnAppointment = () => {
  return (
    <div className="my-10 bg-book bg-cover bg-no-repeat">
      <div className="flex flex-col justify-between gap-4 p-2 md:flex-row md:p-10">
        <div className="p-4 md:w-[28rem] lg:w-full">
          <p className="mt-10 text-center font-mono text-2xl font-bold md:text-start">
            Book an Appointment
          </p>
          <p className="mt-4 text-center font-serif text-xs md:text-start md:text-sm lg:text-lg">
            Easily schedule your appointment at Sahad Hospital online. Fill out
            our form with your details and preferences. Our team will promptly
            confirm your booking, ensuring a smooth healthcare experience.
            <br /> We usually get back to you within 12-24 hours.
          </p>
        </div>
        <div className="w-full bg-slate-200/30 p-4">
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};
