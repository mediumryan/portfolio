import React from 'react';
import Title from '../Title';
import ProjectsContentArea from './ProjectsContentArea/ProjectsContentArea';

export default function Projects() {
  return (
    <div id="projects" className="py-32 md:pb-16 md:w-1/2 md:mx-auto">
      <Title text="Projects" />
      <ProjectsContentArea />
    </div>
  );
}
