import Title from '@/components/Home/Title';
import ProjectContent from '@/components/Project/ProjectContent';
import React from 'react';

export default function ProjectPage() {
  return (
    <div className="flex flex-col items-center p-4 md:w-2/3 md:mx-auto">
      <Title text="Ryan's Projects" />
      <ProjectContent />
    </div>
  );
}
