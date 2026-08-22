import React from 'react';
import Title from '../Title';
import SkillsContentArea from './SkillsContentArea/SkillsContentArea';

export default function Skills() {
  return (
    <div id="skills" className="py-24">
      <Title text="Skills" />
      <div className="mt-12 bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
        {/* tab */}
        <SkillsContentArea />
      </div>
    </div>
  );
}
