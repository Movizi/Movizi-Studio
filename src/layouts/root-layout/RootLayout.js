import "./root-layout.css";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import BookCall from "../../components/book-call/BookCall";
import Footer from "../../components/footer/Footer";

function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <div className="last-content">
        <BookCall />
        <Footer />
      </div>
    </div>
  );
}

export default RootLayout;
