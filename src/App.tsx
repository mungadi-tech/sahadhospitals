import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Index = lazy(() => import("./pages/Index"));
import { Layout } from "./components/layout/Layout";
import { Toaster } from "sonner";

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
          <Route
            element={
              <Suspense fallback={""}>
                <Index />
              </Suspense>
            }
            path="/"
          />
          <Route
            element={
              <Suspense fallback={""}>
                <About />
              </Suspense>
            }
            path="about/"
          />
          <Route
            element={
              <Suspense fallback={""}>
                <Department />
              </Suspense>
            }
            path="department/"
          />
          <Route
            element={
              <Suspense fallback={""}>
                <Contact />
              </Suspense>
            }
            path="contact/"
          />
          <Route
            element={
              <Suspense fallback={""}>
                <Services />
              </Suspense>
            }
            path="services/"
          />
          <Route
            element={
              <Suspense fallback={""}>
                <NewsPage />
              </Suspense>
            }
            path="news/"
          />
          <Route
            element={
              <Suspense fallback={""}>
                <PressRelease />
              </Suspense>
            }
            path="news/1"
          />
          <Route
            element={
              <Suspense fallback={""}>
                <PressRelease />
              </Suspense>
            }
            path="news/2"
          />
          <Route
            element={
              <Suspense fallback={""}>
                <Gallery />
              </Suspense>
            }
            path="gallery/"
          />
          <Route
            element={
              <Suspense fallback={""}>
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
