import { PersonStanding } from "lucide-react";

interface TestimonialsTypes {
  name: string;
  content: string;
  title: string;
}
export const Testimonials = ({ content, name, title }: TestimonialsTypes) => {
  return (
    <div className="p-4 text-white">
      <div className="flex gap-2">
        <PersonStanding className="h-24 w-96 bg-primary hidden md:block rounded-full" />

        <div className="">
          <span className="uppercase font-bold text-xl">{name}</span>
          <br />
          <span className="font-bold">{title}</span>
          <br />
          <p className="mt-4">{content}</p>
        </div>
      </div>
    </div>
  );
};
