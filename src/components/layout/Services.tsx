import { Book, Building, Dna, Pill, School } from "lucide-react";

const services = [
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
  {
    title: "Clinical Service (Urogynaecology)",
    icon: Dna,
    content:
      "Vesicovaginal Fistula and Rectovaginal Fistula repair, Cystocele,rectocele,Female urethral reconstruction, Sphincters plasty, Pelvic floor repair/ perrineorrhaphy, Vaginoplasty...",
  },
  {
    title: "Research",
    icon: Book,
    content: "Coming Soon...",
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
