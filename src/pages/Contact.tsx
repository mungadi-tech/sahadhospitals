import { ContactUsForm } from "@/components/forms/ContactUsForm";
import { BookAnAppointment } from "@/components/layout/BookAnAppointment";
import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { Cable, MailPlus, MapPin, Phone } from "lucide-react";

const info = [
  {
    title: "Our Address",
    desc: "Plot 1756 Cadastral zone E27 Apo, Abuja",
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

export const Contact = () => {
  return (
    <>
      <NavbarWithBreadcrums />
      <BookAnAppointment
        heading="SPECIALIST MEDICAL RECRUITMENT FOR DOCTORS"
        content1="Discover exceptional healthcare at Sahad Hospitals – a trusted name
            in medical excellence. Our state-of-the-art facilities and dedicated
            healthcare professionals ensure top-notch care."
        content2="Experience personalized service with just a click! Book an
            appointment now for your well-being. Your health, our priority.
        "
      />

      <section className="grid md:grid-cols-2 gap-4 my-14 p-4 w-[90%] mx-auto">
        <div className="flex flex-col gap-2">
          <span className="text-primary text-2xl uppercase">Get in Touch</span>
          <span className="text-5xl font-bold text-gray-800">Contact Us</span>
          <span className="text-gray-600 text-xl">
            We have a dedicated support center for all of your support needs. We
            usually get back to you within 12-24 hours.
          </span>
          {info.map((i) => (
            <div className="flex gap-2 mt-10 items-center">
              {<i.icon className="text-info" />}
              <div>
                <span className="text-2xl font-bold text-gray-800">
                  {i.title}
                </span>
                <p className="text-xl text-gray-600 mt-2">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          <ContactUsForm />
        </div>
      </section>
    </>
  );
};
