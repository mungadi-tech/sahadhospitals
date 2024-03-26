import {
  ArchiveRestoreIcon,
  FlaskConical,
  Hexagon,
  Microscope,
  Monitor,
} from "lucide-react";
import surge from "../../assets/images/g3.jpg";
import { CubeIcon } from "@radix-ui/react-icons";

const surgeries = [
  {
    title: "Surgery & Minimally Access Surgery",
    content: "",
    icon: ArchiveRestoreIcon,
  },
  {
    title: "Cardiac Sciences",
    content: "including Interventional Cardiology & Cardiac Surgery",
    icon: CubeIcon,
  },
  {
    title: "Critical Care",
    content: " Adult, Pediatrics & Neonatal",
    icon: FlaskConical,
  },
  {
    title: "Emergency Medicine & Critical Care",
    content: " ",
    icon: Monitor,
  },
  {
    title: "Neurosciences & Neurosurgery",
    content: " ",
    icon: Microscope,
  },
  {
    title: "Surgical and Chemotherapy",
    content: " ",
    icon: Hexagon,
  },
  {
    title: "Orthopedics & Trauma ",
    content: " including Joint Replacement",
    icon: Hexagon,
  },
  {
    title: "Pediatrics and Pediatric Surgery",
    content: " ",
    icon: Hexagon,
  },
  {
    title: "Nuclear Medicine",
    content: " ",
    icon: Hexagon,
  },
];

export const Surgeries = () => {
  return (
    <div className="p-4 md:w-[90%] mx-auto">
      <div className="my-10">
        <h1 className="text-2xl text-gray-600 text-center uppercase font-bold">
          Our Focus Specialities
        </h1>
        <div className="border-b-4 border-info w-14 mx-auto my-4"></div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-10">
          {surgeries.map((s) => (
            <div className="flex items-center">
              <span className="mr-2">
                <s.icon className="w-10 h-10 text-info" />
              </span>
              <div>
                <span className="text-gray-700 font-bold text-lg">
                  {s.title}
                </span>
                <p className="text-gray-700 text-xs">{s.content}</p>
              </div>
            </div>
          ))}
        </div>

        <img src={surge} alt="" className="h-full w-full md:block hidden" />
      </div>
    </div>
  );
};
