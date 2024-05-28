import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ShimmerButton from "../ui/simmer-button";
import { CaretDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Clock, MapPinIcon, PhoneCall } from "lucide-react";
import { useScrollDetect } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    href: "/",
  },
  {
    title: "Gallery",
    href: "gallery/",
  },
  {
    title: "Departments",
    href: "/",
  },
  {
    title: "Team",
    href: "team/",
  },
  {
    title: "News",
    href: "news/",
  },
];

export const Header = () => {
  const { isScrolling } = useScrollDetect();

  return (
    <header className="fixed z-50 w-full top-0 inset-x-0 bg-blue-900">
      <AnimatePresence>
        {!isScrolling && (
          <motion.div
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 0.03, ease: "easeInOut", type: "tween" }}
            exit={{ opacity: 0 }}
            className={`bg-white justify-between p-4 flex`}
          >
            <Link to={""}>
              <img src={logo} alt="" className="w-48" />
            </Link>
            <div className="flex md:gap-10 gap-2">
              <div className="text-xs flex md:flex-row flex-col items-center gap-1 font-serif">
                <PhoneCall />
                +2347049227730
              </div>
              <div className="text-xs flex flex-col md:flex-row items-center gap-1 font-serif">
                <Clock /> 24/7
              </div>
              <div className="text-xs md:flex md:flex-row items-center hidden gap-1 font-serif">
                <MapPinIcon /> Plot 1756 Cadastral zone E27 Apo Resettlement,
                Abuja
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="md:container flex items-center justify-between h-24">
        <div className="flex justify-between w-full py-4 px-8 items-center">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <HamburgerMenuIcon className="stroke-white h-8 w-8 cursor-pointer" />
              </SheetTrigger>
              <SheetContent side={"top"}>
                <div className="mt-10">
                  <ul className="flex flex-col gap-4">
                    {nav_links.map((l) =>
                      l.title == "Services" ? (
                        <li>
                          <ServicesList />
                        </li>
                      ) : l.title == "Departments" ? (
                        <DepartmentList />
                      ) : (
                        <li key={l.href} className="hover:underline">
                          <Link to={l.href}>{l.title}</Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <div className="hidden md:flex gap-10 justify-between items-center text-white">
            <ul className="flex gap-4">
              {nav_links.map((l) =>
                l.title == "Services" ? (
                  <li>
                    <ServicesList />
                  </li>
                ) : l.title == "Departments" ? (
                  <DepartmentList />
                ) : (
                  <li key={l.href} className="hover:underline">
                    <Link to={l.href}>{l.title}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <ShimmerButton className="shadow-2xl" background="none">
            <span className="whitespace-pre-wrap text-center font-medium leading-none md:text-lg tracking-tight text-white dark:from-white dark:to-slate-900/10">
              Appointment
            </span>
          </ShimmerButton>
        </div>
      </div>
    </header>
  );
};

function ServicesList() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NavLink
          className="hover:underline flex items-center gap-1 group"
          to={"services/"}
        >
          <CaretDownIcon className="hidden md:block" />
          Services <CaretDownIcon className="md:hidden" />
        </NavLink>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Services</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Surgery & Minimally Access Surgery</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Cardiac Sciences</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Critical Care</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Emergency Medicine & Critical Care</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Neurosciences & Neurosurgery</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Surgery and Chemotherapy</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Orthopedics & Trauma</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Pediatrics and Pediatric Surgery Nuclear Medicine</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function DepartmentList() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NavLink
          className="hover:underline flex items-center gap-1 group"
          to={"services/"}
        >
          <CaretDownIcon className="hidden md:block" />
          Departments <CaretDownIcon className="md:hidden" />
        </NavLink>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Departments</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Surgery</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Radiology</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Gynaecology</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Cardiolology</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Pharmacy </span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Accident & Emergency Internal Medicine</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
