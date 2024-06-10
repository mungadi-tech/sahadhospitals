import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {
  HamburgerMenuIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Clock, MapPinIcon, PhoneCall } from "lucide-react";
import { useScrollDetect } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { DialogAppointmentShimmerForm } from "../forms/BookAppointmentForm";
import { useState } from "react";

const nav_links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "about/",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Gallery",
    href: "gallery/",
  },
  {
    title: "Departments",
    href: "department/",
  },
  {
    title: "Team",
    href: "team/",
  },
  {
    title: "News",
    href: "news/",
  },
  {
    title: "Contact",
    href: "contact/",
  },
];

export const Header = () => {
  const { isScrolling } = useScrollDetect();

  const [open, setOpen] = useState(false);
  const onOpenChange = () => setOpen(!open);

  return (
    <header className="fixed inset-x-0 top-0 z-10 w-full bg-transparent">
      <motion.div
        animate={{ opacity: isScrolling ? 0 : 1 }}
        className={`flex justify-between bg-white p-4`}
      >
        <Link to={""}>
          <img src={logo} alt="" className="w-48" />
        </Link>
        <div className="flex gap-2 md:gap-10">
          <div className="flex flex-col items-center gap-1 font-serif text-xs md:flex-row">
            <PhoneCall />
            +2347070111111
          </div>
          <div className="flex flex-col items-center gap-1 font-serif text-xs md:flex-row">
            <Clock /> 24/7
          </div>
          <div className="hidden items-center gap-1 font-serif text-xs md:flex md:flex-row">
            <MapPinIcon /> Plot 1756 Cadastral zone E27 Apo Resettlement, Abuja
          </div>
        </div>
      </motion.div>

      {isScrolling ? (
        <motion.div
          animate={{
            opacity: 1,
            width: "100%",
          }}
          className="fixed top-0 flex w-full items-center justify-between bg-tertiary"
        >
          <div className="flex w-full items-center justify-between px-8 py-4">
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={onOpenChange}>
                <SheetTrigger>
                  <HamburgerMenuIcon className="h-8 w-8 cursor-pointer stroke-white" />
                </SheetTrigger>
                <SheetContent side={"top"}>
                  <div className="mt-10">
                    <ul className="flex flex-col gap-4">
                      {nav_links.map((l) => (
                        <li
                          onClick={onOpenChange}
                          key={l.href}
                          className="hover:underline"
                        >
                          <Link to={l.href}>{l.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden items-center justify-between gap-10 text-white md:flex">
              <ul className="flex gap-4">
                {nav_links.map((l) => (
                  <li key={l.href} className="hover:underline">
                    <Link to={l.href}>{l.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <DialogAppointmentShimmerForm label="Appointment" />
          </div>
        </motion.div>
      ) : (
        <motion.div
          animate={{ opacity: 1, width: "100%" }}
          className="flex w-full items-center justify-between"
        >
          <div className="flex w-full items-center justify-between bg-tertiary px-8 py-4">
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={onOpenChange}>
                <SheetTrigger>
                  <HamburgerMenuIcon className="h-8 w-8 cursor-pointer stroke-white" />
                </SheetTrigger>
                <SheetContent side={"top"}>
                  <div className="mt-10">
                    <ul className="flex flex-col gap-4">
                      {nav_links.map((l) => (
                        <li
                          key={l.href}
                          onClick={onOpenChange}
                          className="hover:underline"
                        >
                          <Link to={l.href}>{l.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden items-center justify-between gap-10 text-white md:flex">
              <ul className="flex gap-4">
                {nav_links.map((l) => (
                  <li key={l.href} className="hover:underline">
                    <Link to={l.href}>{l.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <DialogAppointmentShimmerForm label="Appointment" />

              <div className="flex gap-2">
                <Link
                  to={
                    "https://www.instagram.com/sahadhospitals?igsh=MWp0b2txaHFzbGdqcA%3D%3D&utm_source=qr"
                  }
                >
                  <InstagramLogoIcon className="h-6 w-6 text-white" />
                </Link>
                <Link to={"https://www.linkedin.com/in/sahad-hospitals"}>
                  <LinkedInLogoIcon className="h-6 w-6 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
