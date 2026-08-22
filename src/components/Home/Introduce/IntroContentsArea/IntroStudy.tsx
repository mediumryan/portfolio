import { introStudy } from '@/data/intro';
import React from 'react';
import { FaMedal, FaUserGraduate } from 'react-icons/fa';

export default function IntroStudy() {
  return (
    <div className="flex flex-col gap-4 p-1">
      {introStudy.map((study) => {
        return (
          <div
            key={`intro-study-${study.id}`}
            className={`${
              study.type === 'degree' ? 'bg-blue-50/30 border-blue-50' : 'bg-gray-50/50 border-gray-100'
            } border p-5 md:p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300`}
          >
            <p className="flex items-center text-lg font-bold text-gray-800 mb-3">
              {study.type === 'degree' ? (
                <FaUserGraduate className="text-blue-500 mr-3 text-xl" />
              ) : (
                <FaMedal className="text-amber-500 mr-3 text-xl" />
              )}
              {study.main}
            </p>
            <p className="text-gray-700 font-medium mb-1">{study.sub}</p>
            <p className="text-sm text-gray-500 mb-4">{study.desc}</p>
            <div className="flex justify-end text-sm text-gray-400 mt-2 pt-3 border-t border-gray-200/50">
              <span className="font-medium">{study.period}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
