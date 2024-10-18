import React from 'react';
import { ProjectsType } from '@/data/projects';
import Image from 'next/image';
import { FaGithub, FaLocationArrow } from 'react-icons/fa';

const projectOuterLinkStyle =
  'w-4 h-4 hover:scale-105 hover:rotate-12 duration-300';

export default function Projects({
  projectData,
}: {
  projectData: ProjectsType[];
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {projectData.map((project) => {
        return (
          <div key={`project-${project.id}`} className="my-2 border-b-4 pb-4">
            <div className="relative w-[100%] h-[250px] mx-auto rounded-md overflow-hidden">
              <Image
                src={project.image_path}
                alt={project.title}
                fill={true}
                sizes="100%"
              />
            </div>
            <div className="grid grid-row-8 p-4 bg-blue-50 space-y-2 rounded-md h-[200px]">
              <p className="row-span-1 text-lg font-bold text-blue-400">
                {project.title}
              </p>
              <p className="row-span-3 text-sm">{project.description}</p>
              <p className="row-span-4 flex items-center gap-1">
                {project.tag.map((tagItem, tagIndex) => {
                  return (
                    <span
                      key={`project-tag-${tagIndex}`}
                      className="text-xs px-2 py-1 bg-blue-300 text-white rounded-md text-center"
                    >
                      #{tagItem}
                    </span>
                  );
                })}
              </p>
              <div className="flex items-center justify-end gap-2">
                <a href={project.github_link} target="blank">
                  <FaGithub className={projectOuterLinkStyle} />
                </a>
                <a href={project.url_link} target="blank">
                  <FaLocationArrow className={projectOuterLinkStyle} />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
