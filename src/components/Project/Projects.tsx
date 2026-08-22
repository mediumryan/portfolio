import React from 'react';
import { ProjectsType } from '@/data/projects';
import Image from 'next/image';
import { FaGithub, FaLocationArrow } from 'react-icons/fa';

const projectOuterLinkStyle =
  'w-5 h-5 text-gray-500 hover:text-blue-500 hover:scale-110 transition-all duration-300';

export default function Projects({
  projectData,
}: {
  projectData: ProjectsType[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projectData.map((project) => {
        return (
          <div
            key={`project-${project.id}`}
            className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
          >
            <div className="relative w-full pt-[60%] sm:pt-[70%] lg:pt-[60%] overflow-hidden bg-gray-50">
              <Image
                src={project.image_path}
                alt={project.title}
                fill={true}
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col flex-grow p-5 md:p-6 bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tag.map((tagItem, tagIndex) => {
                  return (
                    <span
                      key={`project-tag-${tagIndex}`}
                      className="text-xs font-medium px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full"
                    >
                      #{tagItem}
                    </span>
                  );
                })}
              </div>

              <div className="flex items-center justify-end gap-3 mt-auto pt-4 border-t border-gray-100">
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Repository"
                >
                  <FaGithub className={projectOuterLinkStyle} />
                </a>
                <a
                  href={project.url_link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Live Demo"
                >
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
