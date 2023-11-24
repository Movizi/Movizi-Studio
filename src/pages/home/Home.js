import "./home.css";
import Welcome from "../../components/home-sections/welcome/Welcome";
import Parallax from "../../components/home-sections/parallax/Parallax";
import LatestWork from "../../components/home-sections/latest-work/LatestWork";
import ProcessApproach from "../../components/home-sections/process-approach/ProcessApproach";

function Home() {
  return (
    <div className="home">
      <Welcome />
      <Parallax />
      <LatestWork />
      <ProcessApproach />
    </div>
  );
}

export default Home;
