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
];

export function News() {
  return (
    <BentoGrid className="grid-cols-1 lg-w-1/2 md:w-[90%] mx-auto p-4">
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
