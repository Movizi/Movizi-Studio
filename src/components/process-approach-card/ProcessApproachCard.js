import "./process-approach-card.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Cursor from "../cursor/Cursor";

function ProcessApproachCard({ data }) {
  const cursor = useRef(null);

  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };

  return (
    <div className="process-approach-card" onMouseMove={changePosition}>
      <Link
        to="/"
        className="d-flex justify-content-between align-items-center"
      >
        <div className="d-flex align-items-center">
          <h2 className="process-approach-id">{data.id}.</h2>
          <h3 className="process-approach-name">{data.name}</h3>
        </div>
        <p className="process-approach-description">{data.smallDescription}</p>
      </Link>
      <Cursor cursor={cursor} />
    </div>
  );
}

export default ProcessApproachCard;
