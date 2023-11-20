import "./home.css";
import Welcome from "../../components/home-sections/welcome/Welcome";
import Parallax from "../../components/home-sections/parallax/Parallax";
import LatestWork from "../../components/home-sections/latest-work/LatestWork";

function Home() {
  return (
    <div className="home">
      <Welcome />
      <Parallax />
      <LatestWork />
    </div>
  );
}

export default Home;
