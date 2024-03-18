import { Link } from "react-router-dom";
import { ArrowRight, Award, Building, TestTube, User } from "lucide-react";
import doctor from "../../assets/images/doctors.jpg";

export function About() {
  return (
    <div className="my-14 p-4 md:w-[90%] mx-auto">
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
        <div className="grid md:grid-cols-2 mt-8 gap-4">
          <img src={doctor} alt="" />
          <div>
            <h1 className="text-3xl mb-4 font-bold text-gray-600">
              The Best Medics, Doctors & Physicians
            </h1>
            <article className="mb-4 text-xl text-gray-600">
              <i>
                Sahad Hospital is a reputable healthcare facility with a
                capacity of 200 beds and 7 operating theaters. Known for its
                commitment to providing high-quality healthcare services, Sahad
                Hospital has become a trusted name in the industry. The hospital
                boasts state-of-the-art facilities and equipment, ensuring that
                patients receive the best possible care. <br />
                The 200-bed capacity allows for the accommodation of a wide
                range of medical conditions and ensures that patients can be
                treated promptly. With 7 operating theaters, Sahad Hospital is
                well-equipped to handle complex surgical procedures across
                various specialties....
              </i>
            </article>
            <div className="my-8 hover:text-info text-xl text-gray-600">
              <Link to={""}>Read More</Link>
            </div>
          </div>
        </div>
        <Services />
      </div>
    </div>
  );
}

const services = [
  {
    service:
      "The institute has over 10 professsionally trained consultants,resident doctors e.t.c.",
    link: "",
    icon: User,
    numbs: "10+",
  },
  {
    service:
      "The institute has 3 department namely urology, nephrology and urogynaecologic",
    link: "",
    icon: Building,
    numbs: "3",
  },
  {
    service: "The center has one state of the art research laboratory",
    link: "",
    icon: TestTube,
    numbs: "1",
  },
  {
    service: "The center has over 40 individual and general awards",
    link: "",
    icon: Award,
    numbs: "40+",
  },
];

function Services() {
  return (
    <>
      <div className="my-6 p-4">
        <div className="grid gap-4 md:grid-cols-4">
          {services.map((s) => (
            <div className="p-4 group hover:bg-info shadow-info hover:text-white rounded-md shadow-[0px_5px_20px_0px]">
              <div className="my-4 flex items-center gap-2">
                <s.icon className="text-info group-hover:text-white h-24 w-14" />
                <span className="text-3xl font-bold">{s.numbs}</span>
              </div>
              <p>{s.service}</p>
              <p className="my-4">
                <Link
                  to={s.link}
                  className="flex gap-2 group-hover:text-white text-gray-600"
                >
                  Find out more <ArrowRight />
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
