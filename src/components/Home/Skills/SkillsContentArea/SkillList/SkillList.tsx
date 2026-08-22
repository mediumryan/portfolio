import { skills, others, css } from '@/data/skills';
import React from 'react';
import Skill from './Skill';

const skillsTitleStyle =
  'text-lg md:text-xl font-bold text-gray-800 py-2 mb-4 border-b border-gray-100 flex items-center justify-between';

export default function SkillList() {
  return (
    <div className="space-y-6">
      <Skill
        title="Tech Stack"
        skillsTitleStyle={skillsTitleStyle}
        data={skills}
      />
      <Skill title="Styling" skillsTitleStyle={skillsTitleStyle} data={css} />
      <Skill
        title="Tools & Others"
        skillsTitleStyle={skillsTitleStyle}
        data={others}
      />
    </div>
  );
}
