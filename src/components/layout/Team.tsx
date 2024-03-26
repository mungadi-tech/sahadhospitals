import { Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../ui/badge";

interface TeamTypes {
  name: string;
  title: string;
  twitter: string;
  image: string;
}

export const Team = ({ twitter, name, title, image }: TeamTypes) => {
  return (
    <div className="p-4 md:p-0">
      <img src={image} className="h-[20rem] rounded-lg w-full md:w-[20rem]" />

      <div className="py-2">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-4 items-center">
            <span className="font-bold text-primary text-sm ">{name}</span>
            <Badge variant={"destructive"}>{title}</Badge>
          </div>
          <div className="flex gap-2">
            <Link to={twitter}>
              <Twitter className="text-primary hover:text-secondary text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
