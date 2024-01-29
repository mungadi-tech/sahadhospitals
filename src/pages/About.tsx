import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import doctor from "../assets/images/doctors.jpg";
import { Building, Pill, School } from "lucide-react";

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
                  The Centre was established by the University, through a
                  TetFund grant, as a Urology and Nephrology Complex of
                  international standard that will provide a forum for research
                  and invention, manpower development and treatment of common
                  Urologic, Uro-gynaecologic and Renal diseases prevalent in the
                  sub-region The Centre was established by the University,
                  through a TetFund grant, as a Urology and Nephrology Complex
                  of international standard that will provide a forum for
                  research and invention, manpower development and treatment of
                  common Urologic, Uro-gynaecologic and Renal diseases prevalent
                  in the sub-region The Centre was established by the
                  University, through a TetFund grant, as a Urology and
                  Nephrology Complex of international standard that will provide
                  a forum for research and invention, manpower development and
                  treatment of common Urologic, Uro-gynaecologic and Renal
                  diseases prevalent in the sub-region The Centre was
                  established by the University, through a TetFund grant, as a
                  Urology and Nephrology Complex of international standard that
                  will provide a forum for research and invention, manpower
                  development and treatment of common Urologic, Uro-gynaecologic
                  and Renal diseases prevalent in the sub-region
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
      <div className="grid md:grid-cols-2 gap-4 my-8 p-4">
        <div>
          <div className="my-8">
            <h1 className="font-bold text-xl text-primary">WHAT WE OFFER</h1>
            <span className="font-bold text-3xl md:text-4xl text-gray-600">
              Our Advantages
            </span>
          </div>
        </div>
        <div>
          <img className="w-full h-full" src={doctor} alt="" />
        </div>
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
