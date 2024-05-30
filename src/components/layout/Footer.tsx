import { ArrowBigRight, Locate, Phone } from "lucide-react";
import logo from "../../assets/images/logoWhite.png";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

const department = [
  { name: "Surgery" },
  { name: "Radiology" },
  { name: "Gynaecology" },
  { name: "Cardiolology" },
  { name: "Pharmacy" },
  { name: "Accident & Emergency" },
  { name: "Internal Medicine" },
];
const flinks = [
  { name: "About Us", url: "about/" },
  { name: "Department", url: "department/" },
  { name: "News", url: "news/" },
  { name: "Services", url: "services/" },
  { name: "Contact Us", url: "contact/" },
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
    <footer className="text-white text-sm bg-tertiary">
      <div className="p-4">
        <div className="grid md:grid-cols-5 gap-4 p-4">
          <img src={logo} className="w-[70%]" alt="" />
          <div>
            <h1 className="text-2xl mb-4 font-mono">Departments</h1>
            <ul className="flex flex-col gap-4 font-serif">
              {department.map((d) => (
                <li key={d.name} className="flex gap-2 ">
                  <ArrowBigRight className="text-secondary" />
                  <span>{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mb-4 font-mono">Links</h1>
            <ul className="flex flex-col gap-4 font-serif">
              {flinks.map((d) => (
                <li key={d.name} className="">
                  <Link to={d.url} className="flex gap-2">
                    <ArrowBigRight className="text-secondary" />
                    <span>{d.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mb-4 font-mono">Services</h1>
            <ul className="flex flex-col gap-4 font-serif">
              {fservices.map((d) => (
                <li key={d.name} className="flex gap-2 ">
                  <ArrowBigRight className="text-secondary" />
                  <span>{d.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="text-2xl mb-4 font-mono">Have a question?</h1>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 font-serif">
                <Locate className="text-secondary h-6 w-6" />
                <span>
                  Plot 1756 Cadastral zone E27 Apo Resettlement, Abuja
                </span>
              </li>
              <li className="flex gap-2 items-center font-serif">
                <Phone className="text-secondary h-6 w-6" />
                <div className="flex flex-col">
                  <span>+234(0)7070111111</span>
                  <span>+234(0)7070222222</span>
                </div>
              </li>
              <li className="flex items-center gap-2 font-serif">
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
            <span className="font-bold">Brightedge Technology Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
