import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Loader from "./components/loader/Loader";

function App() {
  const [loader, setLoader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoader(false), 5500);
    setTimeout(() => setFadeOut(true), 5000);
  }, []);

  // Smooth Page Scrolling
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  if (loader) return <Loader fadeOut={fadeOut} />;
  return <RouterProvider router={router} />;
}

export default App;
