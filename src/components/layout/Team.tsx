import { Badge } from "../ui/badge";
import { MagicCard } from "../ui/magic-card";

interface TeamTypes {
  name: string;
  title: string;
  image: string;
}

export const Team = ({ name, title, image }: TeamTypes) => {
  return (
    <MagicCard>
      <img src={image} className="h-[10rem] w-[10rem] mx-auto rounded-full" />
      <div className="flex gap-2 justify-between p-2">
        <span className="font-bold text-[14px]">{name}</span>
        <Badge className="text-[10px] bg-gradient-to-l from-info to-tertiary">
          {title}
        </Badge>
      </div>
    </MagicCard>
  );
};
