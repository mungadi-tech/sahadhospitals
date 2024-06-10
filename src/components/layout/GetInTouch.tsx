import { Clock10Icon, MapPin, PhoneCall } from "lucide-react";
import { MagicCard } from "../ui/magic-card";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

export default function GetInTouch() {
  return (
    <div className="my-14 flex flex-col justify-center">
      <h1 className="text-center text-sm font-bold uppercase text-blue-500">
        Get in Touch
      </h1>
      <h1 className="mb-4 text-center font-mono text-4xl font-bold text-tertiary">
        Contact Us
      </h1>
      <div className="mx-20 my-4 grid items-center gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            <h1 className="mt-4 font-mono text-lg font-bold">Working Hours</h1>
            <span className="my-1 font-serif">Mondays - Sundays</span>
            <span className="font-serif">00:00 am - 11:59 pm</span>
          </div>
        </MagicCard>
      </div>
    </div>
  );
}
