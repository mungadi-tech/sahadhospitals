import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import { Layout } from "./components/layout/Layout";
import About from "./pages/About";
import { Contact } from "./pages/Contact";
import { Toaster } from "sonner";
import Services from "./pages/Services";
import Department from "./pages/Department";
import Team from "./pages/Team";
import Gallery from "./pages/Gallery";
import NewsPage from "./pages/News";

function App() {
  return (
    <>
      <Toaster richColors />
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Index />} path="/" />
          <Route element={<About />} path="about/" />
          <Route element={<Department />} path="department/" />
          <Route element={<Contact />} path="contact/" />
          <Route element={<Services />} path="services/" />
          <Route element={<NewsPage />} path="news/" />
          <Route element={<Gallery />} path="gallery/" />
          <Route element={<Team />} path="team/" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
