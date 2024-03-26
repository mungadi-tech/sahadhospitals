import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import logo from "../../assets/images/logoWhite.png";
import { AlignJustify, Facebook, Linkedin, Phone, Twitter } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const nav_links = [
  {
    title: "ABOUT US",
    href: "about/",
  },
  {
    title: "OUR TEAM",
    href: "team/",
  },
  {
    title: "SERVICES",
    href: "services/",
  },
  {
    title: "DEPARTMENT",
    href: "department/",
  },
  {
    title: "GALLERY",
    href: "gallery/",
  },
  {
    title: "NEWS",
    href: "news/",
  },
  {
    title: "CONTACT US",
    href: "contact/",
  },
];

export const Header = () => {
  return (
    <header className="fixed bg-white z-50 flex items-center justify-between inset-x-0 top-0">
      <div className="flex  justify-between w-full py-4 px-8 bg-info rounded-r-full">
        <Link to={""}>
          <img src={logo} alt="" className="w-48" />
        </Link>
        <div className="md:flex md:justify-end justify-between items-center">
          <div className="md:flex hidden text-white font-bold ">
            <ul className="flex gap-4 text-xs">
              <li className="hover:underline">
                <Link to={""}>HOME</Link>
              </li>
              {nav_links.map((l) => (
                <li className="hover:underline">
                  <Link to={l.href}>{l.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[35%] bg-white flex justify-end gap-4 items-center p-4">
        <ul className="hidden md:flex gap-2">
          <li>
            <div className="flex gap-2">
              <Phone className="text-info" />
              <span>+2347049227730</span>
            </div>
          </li>
          <li>
            <Link to={""}>
              <Facebook className="text-info" />
            </Link>
          </li>
          <li>
            <Link to={""}>
              <Linkedin className="text-info" />
            </Link>
          </li>
          <li>
            <Link to={""}>
              <Twitter className="text-info" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden mr-4">
        <MobileNavigationMenuBar />
      </div>
    </header>
  );
};

export function MobileNavigationMenuBar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <AlignJustify />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:hidden">
        <ul className="grid gap-2 p-4 grid-cols-2  ">
          {nav_links.map((component) => (
            <li>
              <Link
                to={component.href}
                className="block text-muted-foreground text-sm space-y-1 hover:text-white rounded-md p-3 hover:bg-primary"
              >
                {component.title}
              </Link>
            </li>
          ))}
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
