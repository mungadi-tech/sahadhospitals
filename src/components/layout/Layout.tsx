import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Reveal from "../Reveal";

export const Layout = () => {
  return (
    <main className="flex flex-col justify-between">
      <Header />
      <div className="flex flex-col mt-28">
        <Outlet />
      </div>
      <Reveal>
        <Footer />
      </Reveal>
    </main>
  );
};
