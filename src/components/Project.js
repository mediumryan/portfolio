import React, { useState } from "react";
import ProjectCards from "./ProjectCards";
import { projects } from "./../datas/projects";
// import styled-components
import {
  ProjectContainer,
  ProjectsBtnContainer,
  CardsContainer,
} from "../styled/styled-project/StyledProjects";

export default function Project() {
  const [project, setProject] = useState(projects);
  const filtered1 = projects.filter((a) => a.tag !== "React");
  const filtered2 = projects.filter((a) => a.tag === "React");
  const [show, setShow] = useState(true);
  const handleActive = () => {
    setShow(false);
    const timer = setTimeout(() => {
      setShow(true);
      clearTimeout(timer);
    }, 500);
  };

  return (
    <ProjectContainer id="projects">
      <h3>
        My Projects.
        <hr />
      </h3>
      <p>Here are some of my projects, you may like.</p>
      <ProjectsBtnContainer>
        <button
          onClick={() => {
            let copy = [...project];
            copy = projects;
            setProject(copy);
            handleActive();
          }}
        >
          All <span>{projects.length}</span>
        </button>
        <button
          onClick={() => {
            let copy = [...project];
            copy = filtered1;
            setProject(copy);
            handleActive();
          }}
        >
          HTML, CSS, JS <span>{filtered1.length}</span>
        </button>
        <button
          onClick={() => {
            let copy = [...project];
            copy = filtered2;
            setProject(copy);
            handleActive();
          }}
        >
          React <span>{filtered2.length}</span>
        </button>
      </ProjectsBtnContainer>
      <div className="work-box">
        <CardsContainer>
          {project.map((item) => {
            return <ProjectCards key={item.id} item={item} show={show} />;
          })}
        </CardsContainer>
      </div>
    </ProjectContainer>
  );
}
