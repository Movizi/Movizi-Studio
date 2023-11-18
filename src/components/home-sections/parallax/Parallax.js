import "./parallax.css";
import { useEffect } from "react";
import Rellax from "rellax";

function Parallax() {
  useEffect(() => {
    const rellax = new Rellax(".parallax-column");

    return () => rellax.destroy();
  }, []);

  return (
    <section className="parallax">
      <div className="parallax-images-container d-flex justify-content-center align-items-center">
        <div className="parallax-column-container d-flex">
          <div
            className="parallax-column d-flex flex-column"
            data-rellax-speed="4"
          >
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-6.png"
              alt="parallax-img"
            />
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-1.png"
              alt="parallax-img"
            />
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-2.png"
              alt="parallax-img"
            />
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-3.png"
              alt="parallax-img"
            />
          </div>
          <div
            className="parallax-column d-flex flex-column"
            data-rellax-speed="10"
          >
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-6.png"
              alt="parallax-img"
            />
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-4.png"
              alt="parallax-img"
            />
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-5.png"
              alt="parallax-img"
            />
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-6.png"
              alt="parallax-img"
            />
          </div>
          <div
            className="parallax-column d-flex flex-column"
            data-rellax-speed="4"
          >
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-6.png"
              alt="parallax-img"
            />
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-7.png"
              alt="parallax-img"
            />
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-8.png"
              alt="parallax-img"
            />
            <img
              className="parallax-image animate__animated animate__fadeIn"
              src="/assets/images/parallax-9.png"
              alt="parallax-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parallax;
