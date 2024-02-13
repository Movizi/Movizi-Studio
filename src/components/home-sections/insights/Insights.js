import "./insights.css";
import { useEffect, useState, useRef } from "react";
import { InsightsData } from "../../../data/InsightsData";
import { Link } from "react-router-dom";
import Cursor from "../../cursor/Cursor";

const insightsData = InsightsData.slice(-3).reverse();

function Insights() {
  const [chooseInsight, setChooseInsight] = useState(
    insightsData[0].name.toString()
  );
  const [anim, setAnim] = useState(false);

  const changeInsightImg = useRef(null);

  useEffect(() => {
    if (anim === true) {
      changeInsightImg.current.classList.add("animate__fadeOut");
      setTimeout(() => {
        changeInsightImg.current.classList.remove("animate__fadeOut");
        changeInsightImg.current.classList.add("animate__fadeIn");
        setAnim(false);
      }, 1200);
    }
  }, [anim]);

  const cursor = useRef(null);

  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };

  return (
    <section className="insights">
      <div className="insights-header d-flex justify-content-between align-items-center">
        <h1>Other insights</h1>
        <Link
          to="/insights"
          className="button button-blue see-all-insights-button"
        >
          See all insights
        </Link>
      </div>
      <div className="insights-content d-flex align-items-center">
        <div className="change-insights-container">
          <div className="change-insights">
            {insightsData.map((insight) => (
              <div
                className={`change-insight ${
                  insight.name === chooseInsight ? "change-insight-active" : ""
                }`}
                key={insight.id}
              >
                <h3
                  className="change-insights-title"
                  onClick={() => {
                    setAnim(true);
                    setTimeout(() => setChooseInsight(insight.name), 900);
                  }}
                >
                  {insight.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
        <Link
          // to={`/projects/${chooseInsight}`}
          className="change-insight-img"
          ref={changeInsightImg}
          onMouseMove={changePosition}
        >
          <div className="change-insight-img-background-overlay d-flex justify-content-center align-items-center">
            <h1>
              {
                InsightsData.find((project) => project.name === chooseInsight)
                  .name
              }
            </h1>
          </div>
          <img
            src={
              InsightsData.find((project) => project.name === chooseInsight).img
            }
            alt="insight-img"
          />
          <Cursor cursor={cursor} />
        </Link>
      </div>
    </section>
  );
}

export default Insights;
