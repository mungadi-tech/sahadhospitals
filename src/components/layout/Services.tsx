import { Book, Building, Dna, Pill, School } from "lucide-react";
const services = [
  {
    title: "Blood Bank",
    icon: School,
    content: " ",
  },
  {
    title: "Dialysis",
    icon: Pill,
    content: " Hemodialysis and Peritoneal",
  },
  {
    title: "Emergency & Trauma Unit",
    icon: Building,
    content: "..",
  },
  {
    title: "Endoscopy",
    icon: Dna,
    content: "Gastroscopy, Colonoscopy, ERCP",
  },
  {
    title: "Imaging Unit",
    icon: Book,
    content:
      "MRI, CT-Scan, Spect CT-Scan, Digital X-Ray & Fluoroscopy, 3D & 4D Ultrasound",
  },
  {
    title: "Laboratory",
    icon: Book,
    content: "Hematology, Immuno-Chemistry, Pathology, Cytology, Microbiology",
  },
  {
    title: "LDRs & Delivery Suites",
    icon: Book,
    content: " ",
  },
  {
    title: "Physiotherapy",
    icon: Book,
    content: " ",
  },
];

export function Services() {
  return (
    <div className="md:my-14 text-gray-600">
      <div className="flex justify-center flex-col md:my-24">
        <h1 className="uppercase text-4xl border-cyan-600 inline-flex font-bold justify-center text-gray-700">
          Services
        </h1>
        <span className="border-b-4 border-cyan-600 w-14 mx-auto my-4"></span>
        <p className="text-center text-gray-700 font-normal text-xl">
          Explore a range of high quality urology/nephrology healthcare
          solutions, training and research.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {services.map((s) => (
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
