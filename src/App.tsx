import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout/Layout";
import { Toaster } from "sonner";
import Spinner from "./components/ui/spinner";
import Index from "./pages/Index";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Services = lazy(() => import("./pages/Services"));
const Department = lazy(() => import("./pages/Department"));
const Team = lazy(() => import("./pages/Team"));
const Gallery = lazy(() => import("./pages/Gallery"));
const NewsPage = lazy(() => import("./pages/News"));
const PressRelease = lazy(() => import("./pages/Press"));

function App() {
  return (
    <>
      <Toaster richColors />
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Index />} path="/" />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <About />
              </Suspense>
            }
            path="about/"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Department />
              </Suspense>
            }
            path="department/"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Contact />
              </Suspense>
            }
            path="contact/"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Services />
              </Suspense>
            }
            path="services/"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <NewsPage />
              </Suspense>
            }
            path="news/"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <PressRelease />
              </Suspense>
            }
            path="news/1"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <PressRelease />
              </Suspense>
            }
            path="news/2"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Gallery />
              </Suspense>
            }
            path="gallery/"
          />
          <Route
            element={
              <Suspense fallback={<Spinner />}>
                <Team />
              </Suspense>
            }
            path="team/"
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
