import { Badge } from "../ui/badge";

interface TeamTypes {
  name: string;
  title: string;
  image: string;
}

export const Team = ({ name, title, image }: TeamTypes) => {
  return (
    <div className="border rounded-md p-4 bg-slate-200">
      <img src={image} className="h-[10rem] w-[10rem] mx-auto rounded-full" />
      <div className="flex gap-2 justify-between p-2">
        <span className="font-bold text-[14px]">{name}</span>
        <Badge className="text-[10px] bg-gradient-to-l from-info to-tertiary">
          {title}
        </Badge>
      </div>
    </div>
  );
};
