import { NavbarWithBreadcrums } from "@/components/layout/NavbarWithBreadcrums";
import { CheckCheck } from "lucide-react";
import g3 from "../assets/images/services.png";
import site from "../assets/images/front.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MagicCard, MagicContainer } from "@/components/ui/magic-card";
import Reveal from "@/components/Reveal";
import GetInTouch from "@/components/layout/GetInTouch";

export default function About() {
  return (
    <>
      <NavbarWithBreadcrums />
      <div className="container grid w-full justify-center gap-4 p-4 md:grid-cols-1 lg:grid-cols-2">
        <Reveal>
          <MagicContainer className={"hidden h-[30rem] md:flex"}>
            <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl">
              <img
                className="absolute hidden h-full w-full rounded-md md:block"
                src={site}
                alt=""
              />
            </MagicCard>
          </MagicContainer>
        </Reveal>
        <Reveal>
          <MagicContainer>
            <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl md:p-20">
              <h1 className="text-sm font-bold uppercase text-blue-500">
                WELCOME TO SAHAD HOSPITALS
              </h1>
              <h1 className="text-center font-mono text-xl font-bold text-tertiary md:text-4xl">
                Best Care for Your Good Health
              </h1>
              <div className="mt-4">
                <Mission />
              </div>
            </MagicCard>
          </MagicContainer>
        </Reveal>
      </div>
      <Reveal>
        <MagicContainer className={"container my-20 p-4"}>
          <MagicCard className="flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl md:p-20">
            <p className="md:text-md font-serif text-xl">
              Sahad Hospital is a reputable healthcare facility with a capacity
              of 200 beds and 7 operating theaters. Known for its commitment to
              providing high-quality healthcare services, Sahad Hospital has
              become a trusted name in the industry. The hospital boasts
              state-of-the-art facilities and equipment, ensuring that patients
              receive the best possible care. The 200-bed capacity allows for
              the accommodation of a wide range of medical conditions and
              ensures that patients can be treated promptly. With 7 operating
              theaters, Sahad Hospital is well-equipped to handle complex
              surgical procedures across various specialties. This enables the
              hospital to offer a comprehensive range of surgical services and
              meet the diverse needs of patients.
            </p>
            <p className="md:text-md mt-10 font-serif text-xl">
              The team at Sahad Hospital consists of highly skilled and
              experienced medical professionals who are dedicated to delivering
              exceptional care. From surgeons and physicians to nurses and
              support staff, every member of the team is committed to providing
              personalized treatment plans and ensuring patient comfort
              throughout their stay. In addition to its impressive
              infrastructure and medical expertise, Sahad Hospital also places
              great importance on patient satisfaction. The hospital strives to
              create a warm and welcoming environment for patients, emphasizing
              compassionate care alongside professional excellence. Overall,
              Sahad Hospital's commitment to delivering high-quality healthcare
              services combined with its advanced facilities make it an esteemed
              institution in the healthcare industry. Patients can trust Sahad
              Hospital for their medical needs knowing they will receive
              top-notch care from a dedicated team of experts.
            </p>
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          </MagicCard>
        </MagicContainer>
      </Reveal>

      <Reveal>
        <div className="bg-gradient-to-r from-tertiary to-info">
          <div className="container mx-auto my-8 grid gap-4 p-4 text-white md:grid-cols-2">
            <div className="my-4">
              <h1 className="font-mono text-2xl font-bold">WHAT WE OFFER</h1>
              <div className="mt-2 font-serif text-lg">
                <p>
                  Sahad Hospitals offer cutting-edge technology, expert care,
                  and personalized service for superior healthcare. Trust our
                  commitment to excellence and comprehensive services for your
                  well-being. Your health, our priority.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCheck />
                    Family Medicine & Urgent Care
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck />
                    Emergency Medicine & Critical Intensive Care
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck />
                    Specialist Services
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck />
                    Interventional Radiology & Imaging Services
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck />
                    Laboratory Services
                  </li>
                </ul>
              </div>
            </div>
            <img className="h-[25rem] w-[40rem] rounded-md" src={g3} alt="" />
          </div>
        </div>
      </Reveal>
      <Reveal>
        <GetInTouch />
      </Reveal>
    </>
  );
}

export function Mission() {
  return (
    <>
      <Tabs defaultValue="mission" className="">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mission">Mission</TabsTrigger>
          <TabsTrigger value="vision">Vision</TabsTrigger>
          <TabsTrigger value="core_values">Core Values</TabsTrigger>
        </TabsList>
        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-blue-500">Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 font-serif">
              Is to provide fast, efficient and affordable health care service
              to (contributing) citizens and non-citizens residing in our great
              country, Nigeria and ultimately to all nigerian citizens
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="vision">
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-blue-500">Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 font-serif">
              Is to be a world class Private Hospital providing pro-people
              healthcare support services to all NIgerians and the neighboring
              countries in Africa.
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="core_values">
          <Card>
            <CardHeader>
              <CardTitle className="font-mono text-blue-500">
                Core Values
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 font-serif">
              Good corporate governance, Financial prudence and accountability,
              Tansparency and integrity, Service delivery with passion,
              Relentless pursuit of excellence
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
}
