import React from 'react';
import Title from '../Title';
import ProjectsContentArea from './ProjectsContentArea/ProjectsContentArea';

export default function Projects() {
  return (
    <div id="projects" className="py-24">
      <Title text="Projects" />
      <div className="mt-12">
        <ProjectsContentArea />
      </div>
    </div>
  );
}
