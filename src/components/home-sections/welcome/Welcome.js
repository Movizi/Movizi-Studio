import "./welcome.css";
import { useState, useEffect } from "react";

const words = ["user-friendly", "detail-oriented", "jaw-dropping"];

function Welcome() {
  const [chosenWord, setChosenWord] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShrink((prevHighlighted) => !prevHighlighted);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setChosenWord(words[wordIndex]);
  }, [wordIndex]);

  return (
    <section className="welcome">
      <div className="welcome-title-container d-flex justify-content-start align-items-center">
        <h1 className="welcome-title">
          <span>We make</span>
          <div className={`highlighted-text-blue message ${shrink ? "shrink-text" : ""}`}>
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
