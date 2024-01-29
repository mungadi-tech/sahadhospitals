import {
  ArchiveRestoreIcon,
  FlaskConical,
  Hexagon,
  Microscope,
  Monitor,
} from "lucide-react";
import surge from "../../assets/images/2150896634.jpg";
import { CubeIcon } from "@radix-ui/react-icons";

const surgeries = [
  {
    title: "Kidney Transplant",
    content: "Ultrasound Guided transrectal Prostrate Biopsy and Kidney Biopsy",
    icon: ArchiveRestoreIcon,
  },
  {
    title: "Percutaneous Nephrolithotomy",
    content: "Ultrasound Guided Transrectal Prostate Biopsy and Kidney Biopsy",
    icon: CubeIcon,
  },
  {
    title: "Retrograde Ureteric And Intrarenal Surgery using Laser",
    content:
      "Transurethral Prostate Surgery; Vaporization, Resection and Enucleation",
    icon: FlaskConical,
  },
  {
    title: "Endourethral surgery",
    content:
      "Neobladder Reconstruction (bowel bladder) and continent catherizable stoma construction",
    icon: Monitor,
  },
  {
    title: "Laparoscopic Surgery",
    content: "Sex Reassignment and Intersex Surgeries",
    icon: Microscope,
  },
  {
    title: "Repair of Congenital Anomalies",
    content:
      "Many other general and specialized urological and uro-gynaecological procedures",
    icon: Hexagon,
  },
];

export const Surgeries = () => {
  return (
    <div className="p-4 md:w-[90%] mx-auto">
      <div className="my-10">
        <h1 className="text-4xl text-gray-600 text-center uppercase font-bold">
          Surgeries we offer
        </h1>
        <div className="border-b-4 border-info w-14 mx-auto my-4"></div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-10">
          {surgeries.map((s) => (
            <div className="flex items-center">
              <span className="mr-2">
                <s.icon className="w-16 h-16 text-info" />
              </span>
              <div>
                <span className="text-gray-700 font-bold text-2xl">
                  {s.title}
                </span>
                <p className="text-gray-700 text-lg">{s.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img src={surge} alt="" className="h-[90%] w-full md:block hidden" />
        </div>
      </div>
    </div>
  );
};
