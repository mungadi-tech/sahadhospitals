import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="mt-24">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
