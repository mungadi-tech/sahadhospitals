import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import doctor from "../assets/images/doctors.jpg";
import { Building, Check, Pill, School } from "lucide-react";

export default function About() {
  return (
    <div>
      <NavbarWithBreadcrums />
      <div className="my-14 p-4 w-[90%] mx-auto">
        <div className="flex justify-center flex-col">
          <h1 className="uppercase text-4xl  inline-flex font-bold justify-center text-gray-700">
            About Us
          </h1>
          <span className="border-b-4 border-info w-14 mx-auto my-4"></span>
          <p className="text-center text-gray-700 font-normal text-xl">
            Your health is our priority
          </p>
        </div>
        <div>
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            <div>
              <img className="w-full h-full" src={doctor} alt="" />
            </div>
            <div>
              <h1 className="text-3xl my-8 md:my-0 font-bold text-gray-600 mb-4">
                The Best Medics, Doctors & Physicians
              </h1>
              <article className="mt-4 text-xl text-gray-600">
                <i>
                  Sahad Hospital is a reputable healthcare facility with a
                  capacity of 200 beds and 7 operating theaters. Known for its
                  commitment to providing high-quality healthcare services,
                  Sahad Hospital has become a trusted name in the industry. The
                  hospital boasts state-of-the-art facilities and equipment,
                  ensuring that patients receive the best possible care. The
                  200-bed capacity allows for the accommodation of a wide range
                  of medical conditions and ensures that patients can be treated
                  promptly. With 7 operating theaters, Sahad Hospital is
                  well-equipped to handle complex surgical procedures across
                  various specialties. This enables the hospital to offer a
                  comprehensive range of surgical services and meet the diverse
                  needs of patients.
                </i>
                <i>
                  <br />
                  The team at Sahad Hospital consists of highly skilled and
                  experienced medical professionals who are dedicated to
                  delivering exceptional care. From surgeons and physicians to
                  nurses and support staff, every member of the team is
                  committed to providing personalized treatment plans and
                  ensuring patient comfort throughout their stay. In addition to
                  its impressive infrastructure and medical expertise, Sahad
                  Hospital also places great importance on patient satisfaction.
                  The hospital strives to create a warm and welcoming
                  environment for patients, emphasizing compassionate care
                  alongside professional excellence. Overall, Sahad Hospital's
                  commitment to delivering high-quality healthcare services
                  combined with its advanced facilities make it an esteemed
                  institution in the healthcare industry. Patients can trust
                  Sahad Hospital for their medical needs knowing they will
                  receive top-notch care from a dedicated team of experts.
                </i>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gradient-to-tr from-primary to-secondary">
        <div className="text-center my-8">
          <h1 className="font-bold text-xl text-white">MOTIVATON IS EASY</h1>
          <span className="font-bold text-3xl md:text-4xl text-gray-900">
            Our Core Values
          </span>
        </div>
        <CoreValues />
      </div>
      <div className="grid md:grid-cols-2 gap-4 my-8 p-4 w-[90%] mx-auto">
        <div className="my-8">
          <h1 className="font-bold text-xl text-primary">WHAT WE OFFER</h1>
          <span className="font-bold text-4xl text-gray-800">
            Our Advantages
          </span>
          <div className="mt-6">
            <p className="text-xl text-gray-600">
              Sahad Hospitals offer cutting-edge technology, expert care, and
              personalized service for superior healthcare. Trust our commitment
              to excellence and comprehensive services for your well-being. Your
              health, our priority.
            </p>
            <ul className="text-xl text-gray-600 mt-10 space-y-2">
              <li className="flex gap-2 items-center">
                <Check className="text-info" />
                Specialists and Dentists as One Team
              </li>
              <li className="flex gap-2 items-center">
                <Check className="text-info" />
                Complimentary Consultations
              </li>
              <li className="flex gap-2 items-center">
                <Check className="text-info" />
                All Types of Dental Services
              </li>
              <li className="flex gap-2 items-center">
                <Check className="text-info" />
                On-site Laboratory
              </li>
            </ul>
          </div>
        </div>
        <img className="w-full h-full rounded-2xl" src={doctor} alt="" />
      </div>
    </div>
  );
}

const core_values = [
  {
    title: "Training",
    icon: School,
    content:
      "Workshops and short courses, Residency training(NWPGC),Pre part one training for Surgeons, Gynaecologist and physicians(Nephrology)...",
  },
  {
    title: "Clinical Service (Urology)",
    icon: Pill,
    content:
      "Retrograde Ureteric and Intrarenal Surgery using Laser,Transurethral Prostate Surgery; Vaporization, Resection and Enucleation, Endourethral surgery, Laparoscopic Surgery, Complex Urethral and Ureteric Reconstruction, Prostate, Bladder and Kidney cancer Treatment...",
  },
  {
    title: "Clinical Service (Nephrology)",
    icon: Building,
    content:
      "General Nephrology, Haemodialysis, Transplant evaluation for recipient and donor,Interdepartmental consultation,Out patient clinic runs on Tuesday...",
  },
];

export function CoreValues() {
  return (
    <div className="md:my-14 text-white">
      <div>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {core_values.map((s) => (
            <div className="flex flex-col gap-4 text-center justify-center items-center">
              <s.icon className="w-24 h-24 p-4 text-info rounded-full shadow-[0px_0px_10px_10px] shadow-slate-300" />
              <span className="text-2xl font-bold">{s.title}</span>
              <span className="border-b-4 border-cyan-600 w-14 mx-auto my-2"></span>
              <p>{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
