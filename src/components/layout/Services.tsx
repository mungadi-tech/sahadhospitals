import { CheckCircle } from "lucide-react";

const services = [
  {
    service: [
      "Bariatric Surgery & Minimally Access Surgery",
      "Cardiac Sciences including Interventional Cardiology & Cardiac Surgery",
      "Critical Care – Adult, Pediatrics & Neonatal",
      "Emergency Medicine & Critical Care",
      "Family Medicine",
      "Gastroenterology",
      "Hematology",
      "Internal Medicine",
      "Neonatology",
      "Nephrology and Urology",
      "Neurosciences & Neurosurgery",
      "Nuclear Medicine",
      "Obstetrics & Gynecology",
      "Oncology",
      "Surgical and Chemotherapy",
      "Orthopedics & Trauma including Joint Replacement",
      "Pediatrics and Pediatric Surgery",
    ],

    title: "Our Focus Specialities",
  },
  {
    service: [
      "Blood Bank",
      "Bronchoscopy",
      "Cath Lab",
      "Chemotherapy",
      "Dialysis",
      "Hemodialysis and Peritoneal",
      "Emergency & Trauma Unit",
      "Endoscopy",
      "Gastroscopy, Colonoscopy",
      "ERCP",
      "Imaging Unit",
      "MRI",
      "CT-Scan",
      "Spect CT-Scan",
      "Digital X-Ray & Fluoroscopy",
      "3D & 4D Ultrasound Laboratory",
      "Hematology",
      "Immuno-Chemistry",
      "Pathology",
      "Cytology",
      "Microbiology LDRs & Delivery Suites Physiotherapy",
    ],

    title: "Services",
  },
  {
    service: [
      "Dentistry and Maxillo-Facial",
      "Dermatology",
      "ENT",
      "Ophthalmology",
      "Psychiatry",
      "Respiratory Medicine",
      "Rheumatology",
    ],

    title: "Other Clinical Specialties",
  },
];

export function Services() {
  return (
    <div className="text-gray-600 p-4">
      <div className="mt-10">
        <div className="flex flex-col md:flex-row justify-between p-4">
          {services.map((s) => (
            <div className="p-4">
              <span className="font-bold text-lg">{s.title}</span>
              <ul className="mt-2 flex flex-col gap-4">
                {s.service.map((serv) => (
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-primary" />
                    {serv}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
