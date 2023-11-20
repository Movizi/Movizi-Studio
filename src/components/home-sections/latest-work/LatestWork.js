import "./latest-work.css";
import { useEffect, useRef, useState } from "react";
import { Projects } from "../../../data/Projects";
import { Link } from "react-router-dom";
import Cursor from "../../cursor/Cursor";

const projectsData = Projects.slice(-3).reverse();

function LatestWork() {
  const [chooseProject, setChooseProject] = useState(
    projectsData[0].projectName.toString()
  );
  const [anim, setAnim] = useState(false);

  const changeProjectImg = useRef(null);

  useEffect(() => {
    if (anim === true) {
      changeProjectImg.current.classList.add("animate__fadeOut");
      setTimeout(() => {
        changeProjectImg.current.classList.remove("animate__fadeOut");
        changeProjectImg.current.classList.add("animate__fadeIn");
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
    <section className="latest-work">
      <div className="latest-work-header d-flex justify-content-between align-items-center">
        <h1>Latest Work</h1>
        <Link
          to="/projects"
          className="button button-blue see-all-projects-button"
        >
          See all projects
        </Link>
      </div>
      <div className="latest-work-content d-flex align-items-center">
        <div className="change-projects-container">
          <h6>About project</h6>
          <div className="change-projects">
            {projectsData.map((project) => (
              <div
                className={`change-project ${
                  project.projectName === chooseProject
                    ? "change-project-active"
                    : ""
                }`}
                key={project.projectId}
              >
                <h3
                  className="change-project-title"
                  onClick={() => {
                    setAnim(true);
                    setTimeout(
                      () => setChooseProject(project.projectName),
                      900
                    );
                  }}
                >
                  {project.projectName}
                </h3>
                <div className="change-project-info">
                  <p className="change-project-description">
                    {project.projectDescription}
                  </p>
                  <div className="change-project-services d-flex">
                    {project.projectServices.map((projectService, index) => (
                      <div
                        className="change-project-service"
                        key={projectService + index}
                      >
                        {projectService}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link
          //   to={`/projects/${chooseProject}`}
          className="change-project-img"
          ref={changeProjectImg}
          onMouseMove={changePosition}
        >
          <div className="change-project-img-background-overlay d-flex justify-content-center align-items-center">
            <h1>
              {
                Projects.find(
                  (project) => project.projectName === chooseProject
                ).projectName
              }
            </h1>
          </div>
          <img
            src={
              Projects.find((project) => project.projectName === chooseProject)
                .projectImg
            }
            alt="project-img"
          />
          <Cursor cursor={cursor} />
        </Link>
      </div>
    </section>
  );
}

export default LatestWork;
