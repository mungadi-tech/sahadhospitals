import { ContactForm } from "@/components/forms/ContactForm";
import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { MagicCard } from "@/components/ui/magic-card";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Clock10Icon, MapPin, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <>
      <NavbarWithBreadcrums />

      <div className="my-14 grid p-4 lg:grid-cols-2">
        <div className="mx-20 my-4 hidden items-center gap-4 md:grid md:grid-cols-2">
          <MagicCard className="my-4 shadow-2xl">
            <div className="my-4 mt-4 flex flex-col items-start p-2">
              <PhoneCall className="text-blue-500 md:h-14 md:w-14" />
              <h1 className="mt-4 font-mono text-lg font-bold">Emergency</h1>
              <span className="my-1 font-serif">+23407070111111</span>
              <span className="font-serif">+23407070222222</span>
            </div>
          </MagicCard>
          <MagicCard className="shadow-2xl">
            <div className="my-4 mt-4 flex flex-col items-start p-2">
              <MapPin className="text-blue-500 md:h-14 md:w-14" />
              <h1 className="mt-4 font-mono text-lg font-bold">Location</h1>
              <span className="my-1 font-serif">
                +Plot 1756 Cadastral zone E27 Apo Resettlement, Abuja
              </span>
            </div>
          </MagicCard>
          <MagicCard className="shadow-2xl">
            <div className="my-4 mt-4 flex flex-col items-start p-2">
              <EnvelopeClosedIcon className="text-blue-500 md:h-14 md:w-14" />
              <h1 className="mt-4 font-mono text-lg font-bold">Email</h1>
              <span className="my-1 font-serif">info@sahadhospitals.com</span>
            </div>
          </MagicCard>
          <MagicCard className="shadow-2xl">
            <div className="my-4 mt-4 flex flex-col items-start p-2">
              <Clock10Icon className="text-blue-500 md:h-14 md:w-14" />
              <h1 className="mt-4 font-mono text-lg font-bold">
                Working Hours
              </h1>
              <span className="my-1 font-serif">Mondays - Sundays</span>
              <span className="font-serif">00:00 am - 11:59 pm</span>
            </div>
          </MagicCard>
        </div>
        <div className="mx-auto w-full md:mt-24 md:w-1/2 lg:mt-0 lg:w-full">
          <h1 className="mb-10 text-2xl">Send us a message</h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
