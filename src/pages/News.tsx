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
];
export default function NewsPage() {
  return (
    <section className="p-2 my-24">
      <div className="text-center my-8">
        <h1 className="font-bold text-xl text-primary">LATEST NEWS</h1>
        <span className="text-lg md:text-2xl text-gray-600">
          Get Every Single Updates Here
        </span>
      </div>
      <div className="mt-24">
        <News />
      </div>
    </section>
  );
}

export function News() {
  return (
    <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[90%] mx-auto p-4">
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
