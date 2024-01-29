import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

interface TeamTypes {
  name: string;
  title: string;
  twitter: string;
  facebook: string;
  linkedln: string;
  image: string;
}

export const Team = ({
  facebook,
  linkedln,
  twitter,
  name,
  title,
  image,
}: TeamTypes) => {
  return (
    <div className="">
      <div>
        <img src={image} className="h-[20rem] rounded-lg w-full" />
      </div>
      <div className="p-4">
        <div className="flex gap-4 justify-between">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-destructive text-2xl">{name}</span>
            <span className="uppercase text-destructive font-bold text-xl">
              - {title}
            </span>
          </div>
          <div className="flex gap-2">
            <Link to={facebook}>
              <Facebook className="text-primary hover:text-secondary" />
            </Link>
            <Link to={twitter}>
              <Twitter className="text-primary hover:text-secondary" />
            </Link>
            <Link to={linkedln}>
              <Linkedin className="text-primary hover:text-secondary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
