import "./home.css";
import Welcome from "../../components/home-sections/welcome/Welcome";
import Parallax from "../../components/home-sections/parallax/Parallax";

function Home() {
  return (
    <div className="home">
      <Welcome />
      <Parallax />
    </div>
  );
}

export default Home;
