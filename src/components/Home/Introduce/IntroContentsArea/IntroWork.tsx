import { introWork } from '@/data/intro';
import React from 'react';

export default function IntroWork() {
  return (
    <div className="p-1">
      {introWork.map((work) => {
        return (
          <div
            key={`intro-work-${work.id}`}
            className="bg-blue-50 p-2 rounded-md my-2"
          >
            <p className="font-extrabold">{work.company}</p>
            <p className="text-gray-400 my-2">{work.work}</p>
            <p className="text-gray-400 my-2">{work.position}</p>
            <p className="text-sm">{work.period}</p>
          </div>
        );
      })}
    </div>
  );
}
