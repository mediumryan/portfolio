import React from 'react';
import Title from '../Title';
import SkillsContentArea from './SkillsContentArea/SkillsContentArea';

export default function Skills() {
  return (
    <div id="skills" className="py-20 md:pb-16 md:w-1/2 md:mx-auto">
      <Title text="Skills" />
      {/* tab */}
      <SkillsContentArea />
    </div>
  );
}
