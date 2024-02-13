import "./home.css";
import Welcome from "../../components/home-sections/welcome/Welcome";
import Parallax from "../../components/home-sections/parallax/Parallax";
import LatestWork from "../../components/home-sections/latest-work/LatestWork";
import ProcessApproach from "../../components/home-sections/process-approach/ProcessApproach";
import Insights from "../../components/home-sections/insights/Insights";

function Home() {
  return (
    <div className="home">
      <Welcome />
      <Parallax />
      <LatestWork />
      <ProcessApproach />
      <Insights />
    </div>
  );
}

export default Home;
