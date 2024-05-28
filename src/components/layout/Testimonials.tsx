import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

const reviews = [
  {
    name: "Ngozi Adewale",
    body: "My experience at Sahad Hospitals was exceptional. The staff was incredibly caring and attentive, and the facilities were top-notch. I felt like I was in good hands every step of the way.",
  },
  {
    name: "Olamide Adeyemi",
    body: "I cannot thank the doctors and nurses at Sahad Hospitals enough for the excellent care they provided during my stay. Their expertise and compassion made a difficult time much more manageable",
  },
  {
    name: "Aisha Mohammed",
    body: "From the moment I arrived at Sahad Hospitals, I was impressed by the professionalism and warmth of the staff. They made me feel comfortable and supported throughout my treatment journey.",
  },
  {
    name: "Funke Ajayi",
    body: "Sahad Hospitals truly goes above and beyond for their patients. The personalized care I received exceeded my expectations, and I am grateful for the positive impact it had on my recovery.",
  },

  {
    name: "Chinedu Okoro",
    body: "Thanks to the skilled surgeons at Sahad Hospitals, I underwent a successful procedure with minimal complications. I am thankful for their expertise and the peace of mind they provided me.",
  },

  {
    name: "Fatima Musa",
    body: "Sahad Hospitals is not just a healthcare facility; it's a place where patients are treated like family. I felt supported and cared for throughout my entire stay, and I cannot thank them enough for their kindness.",
  },
  {
    name: "Musa Garba",
    body: "The level of care I received at Sahad Hospitals was unparalleled. Every member of the team, from the doctors to the support staff, played a vital role in my recovery journey.",
  },
  {
    name: "Usman Bello",
    body: "Choosing Sahad Hospitals for my medical needs was one of the best decisions I've ever made. Their commitment to excellence and patient-centered care made all the difference in my healing process.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export const Testimonials = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl mb-4 text-center text-tertiary font-bold font-mono">
        Testimonials
      </h1>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background py-20 md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <TestimonialCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <TestimonialCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ name, body }: { name: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium font-mono dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm font-serif ">{body}</blockquote>
    </figure>
  );
};
