import "./welcome.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const words = ["user-friendly", "detail-oriented", "jaw-dropping"];

function Welcome() {
  const [chosenWord, setChosenWord] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [shrink, setShrink] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    let intervalId;
    if (inView) {
      intervalId = setInterval(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }, 5000);
    }

    return () => clearInterval(intervalId);
  }, [inView]);

  useEffect(() => {
    let intervalId;
    if (inView) {
      intervalId = setInterval(() => {
        setShrink((prevHighlighted) => !prevHighlighted);
      }, 2500);
    }

    return () => clearInterval(intervalId);
  }, [inView]);

  useEffect(() => {
    setChosenWord(words[wordIndex]);
  }, [wordIndex]);

  return (
    <section className="welcome" ref={ref}>
      <div className="welcome-title-container d-flex justify-content-start align-items-center">
        <h1 className="welcome-title">
          <span>We make</span>
          <div
            className={`highlighted-text-blue message ${
              shrink ? "shrink-text" : ""
            }`}
          >
            <span>{chosenWord}</span>
          </div>
          <span>digital Products.</span>
        </h1>
      </div>
      <div className="welcome-text-container d-flex justify-content-end align-items-center">
        <p className="welcome-text">
          We produce digital products that fulfill the unique needs of our
          partners through close collaboration and the use of cutting-edge
          technologies.
        </p>
      </div>
    </section>
  );
}

export default Welcome;
