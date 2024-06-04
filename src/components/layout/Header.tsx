import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import ShimmerButton from "../ui/simmer-button";
import {
  CaretDownIcon,
  HamburgerMenuIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Clock, MapPinIcon, PhoneCall } from "lucide-react";
import { useScrollDetect } from "@/lib/utils";
import { motion } from "framer-motion";
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
          className="fixed top-0 flex w-full items-center justify-between bg-blue-900"
        >
          <div className="flex w-full items-center justify-between px-8 py-4">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger>
                  <HamburgerMenuIcon className="h-8 w-8 cursor-pointer stroke-white" />
                </SheetTrigger>
                <SheetContent side={"top"}>
                  <div className="mt-10">
                    <ul className="flex flex-col gap-4">
                      {nav_links.map((l) =>
                        l.title == "Services" ? (
                          <li key={l.title}>
                            <ServicesList />
                          </li>
                        ) : l.title == "Departments" ? (
                          <li key={l.title}>
                            <DepartmentList />
                          </li>
                        ) : (
                          <li key={l.href} className="hover:underline">
                            <Link to={l.href}>{l.title}</Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden items-center justify-between gap-10 text-white md:flex">
              <ul className="flex gap-4">
                {nav_links.map((l) =>
                  l.title == "Services" ? (
                    <li key={l.title}>
                      <ServicesList />
                    </li>
                  ) : l.title == "Departments" ? (
                    <li key={l.title}>
                      <DepartmentList />
                    </li>
                  ) : (
                    <li key={l.href} className="hover:underline">
                      <Link to={l.href}>{l.title}</Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <ShimmerButton className="shadow-2xl" background="none">
              <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 md:text-lg">
                Appointment
              </span>
            </ShimmerButton>
          </div>
        </motion.div>
      ) : (
        <motion.div
          animate={{ opacity: 1, width: "100%" }}
          className="flex w-full items-center justify-between"
        >
          <div className="flex w-full items-center justify-between bg-blue-900 px-8 py-4">
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger>
                  <HamburgerMenuIcon className="h-8 w-8 cursor-pointer stroke-white" />
                </SheetTrigger>
                <SheetContent side={"top"}>
                  <div className="mt-10">
                    <ul className="flex flex-col gap-4">
                      {nav_links.map((l) =>
                        l.title == "Services" ? (
                          <li key={l.title}>
                            <ServicesList />
                          </li>
                        ) : l.title == "Departments" ? (
                          <li key={l.href}>
                            <DepartmentList />
                          </li>
                        ) : (
                          <li key={l.href} className="hover:underline">
                            <Link to={l.href}>{l.title}</Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden items-center justify-between gap-10 text-white md:flex">
              <ul className="flex gap-4">
                {nav_links.map((l) =>
                  l.title == "Services" ? (
                    <li key={l.title}>
                      <ServicesList />
                    </li>
                  ) : l.title == "Departments" ? (
                    <li key={l.title}>
                      <DepartmentList />
                    </li>
                  ) : (
                    <li key={l.href} className="hover:underline">
                      <Link to={l.href}>{l.title}</Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              <ShimmerButton
                className="hidden shadow-2xl md:flex"
                background="none"
              >
                <span className="whitespace-pre-wrap text-center font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 md:text-lg">
                  Appointment
                </span>
              </ShimmerButton>
              <div className="flex gap-2">
                <Link
                  to={
                    " https://www.instagram.com/sahadhospitals?igsh=MWp0b2txaHFzbGdqcA%3D%3D&utm_source=qr"
                  }
                >
                  <InstagramLogoIcon className="h-6 w-6 text-white" />
                </Link>
                <Link
                  to={
                    "https://www.linkedin.com/in/sahad-hospitals-80b618304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  }
                >
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

function ServicesList() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NavLink
          className="group flex items-center gap-1 hover:underline"
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
          className="group flex items-center gap-1 hover:underline"
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
