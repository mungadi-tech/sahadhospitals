import {
  AccessibilityIcon,
  BabyIcon,
  Bone,
  Brain,
  HeartPulse,
  MicroscopeIcon,
  Pill,
  RadiationIcon,
  Slice,
  Stethoscope,
  User,
  Webhook,
} from "lucide-react";
import dep from "../assets/images/dartments.jpg";
import Reveal from "@/components/Reveal";

const departments = [
  {
    title: "General Medicine",
    content:
      "From routine check-ups to complex medical conditions, our expert physicians provide personalized care to address all your healthcare needs.",
    icon: Stethoscope,
  },
  {
    title: "Accident & Emergency",
    content:
      " The Accident & Emergency Department at Shad Hospitals offers emergency care to people with life threatening conditionsthat need immediate medical attention",
    icon: AccessibilityIcon,
  },
  {
    title: "Internal Medicine",
    content: " ",
    icon: Webhook,
  },
  {
    title: "Surgery",
    content:
      "Our highly skilled surgeons utilize advanced techniques and cutting-edge technology to perform a wide range of surgical procedures with precision and safety",
    icon: Slice,
  },
  {
    title: "Cardiology",
    content:
      "We offer comprehensive cardiac care, including diagnostics, intervention, and rehabilitation programs to help you maintain a healthy heart.",
    icon: HeartPulse,
  },
  {
    title: "Orthopedics",
    content:
      "Our orthopedic specialists provide advanced treatments for musculoskeletal conditions, including joint replacements, sports injuries, and trauma management.",
    icon: Bone,
  },
  {
    title: "Pharmacy",
    content:
      " Our Pharmacy plays a vital role in ensuring that every individual receives the highest quality medications and personalized attention to support their well-being",
    icon: Pill,
  },
  {
    title: "Radiology",
    content:
      " The imaging and Radiology unit at sahad hospitals offers an extensive range of services using state-of-art equipment to deliver medical screenings effectively and in good time",
    icon: RadiationIcon,
  },
  {
    title: "Laboratory",
    content: " ",
    icon: MicroscopeIcon,
  },
  {
    title: "Nephrology",
    content:
      "We have a dedicated team of neurologists who specialize in diagnosing and treating neurological disorders using the latest advancements in the field.",
    icon: Brain,
  },
  {
    title: "Obsetrics & Gynaecology",
    content:
      " Our experienced gynecologists offer comprehensive women's health services, including preventive care, reproductive health management",
    icon: User,
  },
  {
    title: "Peadiatrics",
    content:
      " Sahad Hospitals has a well staffed and equipped peadiatric unit where quality care and services are given to all children who pass through our doors",
    icon: BabyIcon,
  },
];
export default function Department() {
  return (
    <>
      <Reveal className="mt-14 md:p-10">
        <h1 className="text-center text-sm font-bold uppercase text-blue-500">
          Always Caring
        </h1>
        <h1 className="mb-4 text-center font-mono text-4xl font-bold text-tertiary">
          Departments
        </h1>
        <div className="my-10 md:flex">
          <img src={dep} className="hidden w-[40%] md:hidden lg:block" />
          <div className="grid md:grid-cols-3">
            {departments.map((d) => (
              <div
                key={d.title}
                className="group flex flex-col items-center justify-center gap-4 border from-tertiary to-info p-4 hover:bg-gradient-to-t hover:text-white"
              >
                {<d.icon className="size-6 text-info group-hover:text-white" />}
                <span className="text-center font-mono text-xl font-bold text-gray-800 group-hover:text-white">
                  {d.title}
                </span>
                <p className="text-center font-serif text-sm text-gray-600 group-hover:text-white">
                  {d.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </>
  );
}
