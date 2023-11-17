import "./project.css";
import OurProjects from "../../components/projects-sections/ourProjects/OurProjects";
import MoreProjects from "../../components/projects-sections/more-projects/MoreProjects";

function Project() {
  return (
    <div className="project">
      <OurProjects />
      <MoreProjects />
    </div>
  );
}
export default Project;
