import { skills, others, css } from '@/data/skills';
import React from 'react';
import Skill from './Skill';

const skillsTitleStyle = 'font-bold py-2 mb-2 border-b';

export default function SkillList() {
  return (
    <div className="space-y-2">
      <Skill title="Skills" skillsTitleStyle={skillsTitleStyle} data={skills} />
      <Skill title="CSS" skillsTitleStyle={skillsTitleStyle} data={css} />
      <Skill title="Others" skillsTitleStyle={skillsTitleStyle} data={others} />
    </div>
  );
}
