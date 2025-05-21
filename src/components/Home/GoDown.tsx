'use client';

import { isHeaderOpenA } from '@/data/atom';
import { useSetAtom } from 'jotai';
import React from 'react';
import { FaCaretDown } from 'react-icons/fa6';

interface GoDownProps {
  sectionName: string;
}

export default function GoDown({ sectionName }: GoDownProps) {
  const setIsOpen = useSetAtom(isHeaderOpenA);

  const commonStyle = 'w-6 h-6 text-blue-400 animate-bounce';

  const sectionMargin = {
    greeting: 'my-32 md:my-64',
    intro: 'my-16 md:my-4',
    skills: 'my-6',
    projects: 'my-16',
  };

  return (
    <div className="flex justify-center">
      <a
        href={`#${sectionName}`}
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <FaCaretDown
          className={`${commonStyle} ${
            sectionName === 'intro'
              ? sectionMargin.greeting
              : sectionName === 'skills'
              ? sectionMargin.intro
              : sectionName === 'projects'
              ? sectionMargin.skills
              : sectionMargin.projects
          }`}
        />
      </a>
    </div>
  );
}
