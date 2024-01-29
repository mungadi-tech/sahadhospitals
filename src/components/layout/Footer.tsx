import { ArrowBigRight, Locate, Phone } from "lucide-react";
import logo from "../../assets/images/logoWhite.png";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";

const department = [
  { name: "Neurology" },
  { name: "Opthalmology" },
  { name: "Gynaecology" },
  { name: "Cardiolology" },
  { name: "Dental" },
  { name: "Otorhinolaryngology" },
];
const flinks = [
  { name: "About Us" },
  { name: "Our Team" },
  { name: "News" },
  { name: "Services" },
  { name: "Appointment" },
];
const fservices = [
  { name: "Clinical" },
  { name: "Surgeries" },
  { name: "Ambulance Service" },
  { name: "24/7 Appointments" },
  { name: "Labs" },
];
export const Footer = () => {
  return (
    <footer className="__footer text-white">
      {/* <div className="flex justify-around bg-primary p-8 my-8">
        <div className=" flex flex-col justify-center text-center text-white font-extrabold">
          <span className="text-3xl">Partner 1</span>
        </div>
        <div className=" flex flex-col justify-center text-center text-white font-extrabold">
          <span className="text-3xl">Partner 2</span>
        </div>
        <div className=" flex flex-col justify-center text-center text-white font-extrabold">
          <span className="text-3xl">Partner 3</span>
        </div>
      </div> */}
      <div className="p-4">
        <div className="grid md:grid-cols-5 gap-4 p-4">
          <div className="flex flex-col gap-4">
            <img src={logo} className="w-[70%]" alt="" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-8">Departments</h1>
            <ul className="flex flex-col gap-4">
              {department.map((d) => (
                <li className="flex gap-2 hover:text-secondary">
                  <ArrowBigRight className="text-secondary" />
                  <span>{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-8">Links</h1>
            <ul className="flex flex-col gap-4">
              {flinks.map((d) => (
                <li className="flex gap-2 hover:text-secondary">
                  <ArrowBigRight className="text-secondary" />
                  <span>{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-8">Services</h1>
            <ul className="flex flex-col gap-4">
              {fservices.map((d) => (
                <li className="flex gap-2 hover:text-secondary">
                  <ArrowBigRight className="text-secondary" />
                  <span>{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-8">Have a question?</h1>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 hover:text-secondary">
                <Locate className="text-secondary h-6 w-6" />
                <span>Plot 1756 Cadastral zone E27 Apo, Abuja</span>
              </li>
              <li className="flex gap-2 hover:text-secondary">
                <Phone className="text-secondary h-6 w-6" />
                <span>+234(0)7049227730, +234(0)8039591800</span>
              </li>
              <li className="flex items-center gap-2 hover:text-secondary">
                <EnvelopeClosedIcon className="text-secondary h-6 w-6" />
                <span>info@sahadhospitals.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center my-14">
          &copy; Copyright{" "}
          <span className="font-bold text-secondary"> Sahad Hospitals. </span>
          All Rights Reserved
          <p>
            Designed by{" "}
            <span className="font-bold text-red-800">
              Brightedge Technology Solutions
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
