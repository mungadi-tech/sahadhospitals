import Reveal from "@/components/Reveal";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Newspaper } from "lucide-react";

const features = [
  {
    name: "HON. JOSHUA CHINEDU OBIKA RECEIVED ON COURTESY",
    description:
      "HON. JOSHUA CHINEDU OBIKA RECEIVED ON COURTESY, MGT STAFF OF SAHAD HOSPITAL ABUJA, LED BY THE DIRECTOR BUSINESS DEVELOPMENT AND CORPORATE COMMUNICATIONS, Mr. KELVIN OJONUGWA AKPALA.",
    href: "/news/1",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
  },
  {
    name: "SAHAD HOSPITAL WILL PROVIDE REVERSE MEDICAL TOURISM FOR NIGERIA / Bussiness Daily",
    description:
      "Dr. Shamshudeen Ahmed Aliyu, the executive vice chairman of SAHAD Hospitals in this exclusive interview with BusinessDay, Ruth Tene Natsa says rather than Nigerian elites seeking medical tourism abroad, SAHAD hospital is set to provide world standard services at less the rate……excerpts",
    href: "/news/2",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
  },
];
export default function NewsPage() {
  return (
    <Reveal className="my-24 p-2">
      <div className="my-8 text-center">
        <h1 className="text-xl font-bold text-primary">LATEST NEWS</h1>
        <span className="text-lg text-gray-600 md:text-2xl">
          Get Every Single Updates Here
        </span>
      </div>
      <div className="mt-24">
        <News />
      </div>
    </Reveal>
  );
}

export function News() {
  return (
    <BentoGrid className="mx-auto grid-cols-4 p-4 md:w-[90%] md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <BentoCard
          key={feature.name}
          {...feature}
          className=""
          Icon={Newspaper}
          cta="Read More"
        />
      ))}
    </BentoGrid>
  );
}
