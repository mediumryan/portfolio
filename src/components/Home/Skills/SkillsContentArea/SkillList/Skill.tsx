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
    <div className="mt-2">
      <h4 className={skillsTitleStyle}>{title}</h4>
      <div className="flex items-center justify-center flex-wrap mt-4 gap-8">
        {data.map((item) => {
          return (
            <div
              key={`skill-${item.id}`}
              className="flex flex-col justify-center items-center"
            >
              {item.icon}
              <p className="font-xs mt-2">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
