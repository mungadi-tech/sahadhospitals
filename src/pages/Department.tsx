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
    <Reveal className="md:p-10 mt-14">
      <h1 className="text-sm text-center text-blue-500 uppercase font-bold">
        Always Caring
      </h1>
      <h1 className="text-4xl mb-4 text-center text-tertiary font-bold font-mono">
        Departments
      </h1>
      <div className="md:flex my-10">
        <img src={dep} className="w-[40%] hidden lg:block md:hidden" />
        <div className="grid md:grid-cols-3">
          {departments.map((d) => (
            <div
              key={d.title}
              className="p-4 group border flex flex-col gap-4 justify-center items-center hover:bg-gradient-to-t from-tertiary to-info hover:text-white"
            >
              {<d.icon className="size-6 text-info group-hover:text-white" />}
              <span className="text-xl text-center font-mono font-bold text-gray-800 group-hover:text-white">
                {d.title}
              </span>
              <p className="text-center text-sm font-serif text-gray-600 group-hover:text-white">
                {d.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
