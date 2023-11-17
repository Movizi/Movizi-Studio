import "./our-projects.css";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const words = ["Designs", "Projects"];

function OurProjects() {
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
    <section className="our-projects" ref={ref}>
      <div className="our-projects-title-container d-flex justify-content-start align-items-center">
        <h1 className="our-projects-title">
          <span>Our</span>
          <div
            className={`highlighted-text-blue message ${
              shrink ? "shrink-text" : ""
            }`}
          >
            <span>{chosenWord}</span>
          </div>
        </h1>
      </div>
      <div className="our-projects-text-container d-flex justify-content-end align-items-center">
        <p className="our-projects-text">
          Check out some of the exciting projects we’ve completed below, and get
          inspired for your own!
        </p>
      </div>
    </section>
  );
}

export default OurProjects;
