import React, { useState } from "react";
import ProjectCards from "./ProjectCards";
import { projects } from "./../datas/projects";

export default function Project() {
  const [project] = useState(projects);

  return (
    <div id="projects">
      <h3>
        My Projects.
        <hr />
      </h3>
      <p>Here are some of my projects, you may like.</p>
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
