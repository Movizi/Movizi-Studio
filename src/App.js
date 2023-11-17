import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  // Smooth Page Scrolling
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
