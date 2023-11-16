import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// Layout
import RootLayout from "../layouts/root-layout/RootLayout";
// Pages
import Home from "../pages/home/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </>
  )
);
