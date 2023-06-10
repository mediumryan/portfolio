import React, { useState } from "react";
import ProjectCards from "./ProjectCards";
import { projects } from "./../datas/projects";

export default function Project() {
  const [project, setProject] = useState(projects);
  const filtered1 = projects.filter((a) => a.tag !== "React");
  const filtered2 = projects.filter((a) => a.tag === "React");

  return (
    <div id="projects">
      <h3>
        My Projects.
        <hr />
      </h3>
      <p>Here are some of my projects, you may like.</p>
      <div className="projects-btn-box">
        <button
          className="projects-btn"
          onClick={() => {
            let copy = [...project];
            copy = projects;
            setProject(copy);
          }}
        >
          All <span>{projects.length}</span>
        </button>
        <button
          className="projects-btn"
          onClick={() => {
            let copy = [...project];
            copy = filtered1;
            setProject(copy);
          }}
        >
          HTML, CSS, JS <span>{filtered1.length}</span>
        </button>
        <button
          className="projects-btn"
          onClick={() => {
            let copy = [...project];
            copy = filtered2;
            setProject(copy);
          }}
        >
          React <span>{filtered2.length}</span>
        </button>
      </div>
      <div className="work-box">
        <div className="work">
          {project.map((item) => {
            return <ProjectCards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
