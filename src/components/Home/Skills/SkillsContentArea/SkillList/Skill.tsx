import React from 'react';

interface ISkillProps {
  title: string;
  skillsTitleStyle: string;
  data: {
    id: number;
    name: string;
    icon: any;
  }[];
}

export default function Skill({ title, skillsTitleStyle, data }: ISkillProps) {
  return (
    <div className="bg-white border border-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <h4 className={skillsTitleStyle}>{title}</h4>
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 mt-6">
        {data.map((item) => {
          return (
            <div
              key={`skill-${item.id}`}
              className="flex flex-col justify-center items-center group w-20 cursor-default"
            >
              <div className="text-4xl text-gray-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300 mb-3">
                {item.icon}
              </div>
              <p className="text-xs font-semibold text-gray-500 group-hover:text-blue-600 transition-colors duration-300 text-center">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
