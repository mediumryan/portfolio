import { introWork } from '@/data/intro';
import React from 'react';
import { FaBuilding } from 'react-icons/fa';

export default function IntroWork() {
  return (
    <div className="p-1">
      {introWork.map((work) => {
        return (
          <div
            key={`intro-work-${work.id}`}
            className="bg-blue-50 p-2 rounded-md space-y-2 my-2"
          >
            <p className=" flex items-center">
              <FaBuilding className="opacity-50 mr-2" />
              <span className="font-extrabold">{work.company}</span>
            </p>
            <p className="text-sm text-gray-400">{work.work}</p>
            <p className="text-sm text-gray-400">{work.position}</p>
            <p className="text-sm">{work.period}</p>
          </div>
        );
      })}
    </div>
  );
}
