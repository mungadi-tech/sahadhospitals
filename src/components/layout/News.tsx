import { BentoCard, BentoGrid } from "../ui/bento-grid";
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

export function News() {
  return (
    <BentoGrid className="lg-w-1/2 mx-auto grid-cols-1 p-4 md:w-[90%]">
      {features.map((feature) => (
        <BentoCard
          key={feature.name}
          {...feature}
          className="text-xs md:text-sm"
          Icon={Newspaper}
          cta="Read More"
        />
      ))}
    </BentoGrid>
  );
}
