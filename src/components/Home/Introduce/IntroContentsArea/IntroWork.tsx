import { introWork } from '@/data/intro';
import React from 'react';
import { FaBuilding } from 'react-icons/fa';

export default function IntroWork() {
  return (
    <div className="flex flex-col gap-4 p-1">
      {introWork.map((work) => {
        return (
          <div
            key={`intro-work-${work.id}`}
            className="bg-white border border-gray-100 p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <p className="flex items-center text-lg font-bold text-gray-800 mb-3">
              <FaBuilding className="text-blue-500 mr-3 text-xl" />
              {work.company}
            </p>
            <p className="text-gray-700 font-medium mb-1">{work.work}</p>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 mt-4 pt-4 border-t border-gray-50">
              <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold mb-2 sm:mb-0 inline-block w-max">
                {work.position}
              </span>
              <span className="font-medium text-gray-400">{work.period}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
