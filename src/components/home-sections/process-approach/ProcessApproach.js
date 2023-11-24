import "./process-approach.css";
import { ProcessApproachData } from "../../../data/ProcessApproachData";
import ProcessApproachCard from "../../process-approach-card/ProcessApproachCard";

function ProcessApproach() {
  return (
    <section className="process-approach">
      <h1>Process & approach</h1>
      <div className="d-flex flex-column align-items-center">
        <div className="process-approach-description d-flex flex-column justify-content-center align-items-center">
          {ProcessApproachData.map((processApproach) => (
            <ProcessApproachCard
              data={processApproach}
              key={processApproach.id}
            />
          ))}
        </div>
        <h1>
          We are a creative and <br />
          passionate team based <br />
          <span className="highlighted-text-blue">in Georgia</span>
        </h1>
      </div>
    </section>
  );
}

export default ProcessApproach;
