import { introStudy } from '@/data/intro';
import React from 'react';
import { FaMedal, FaUserGraduate } from 'react-icons/fa';

const iconStyle = 'opacity-50 mr-2';

export default function IntroStudy() {
  return (
    <div className="p-1">
      {introStudy.map((study) => {
        return (
          <div
            key={`intro-study-${study.id}`}
            className={`${
              study.type === 'degree' ? 'bg-blue-50' : 'bg-blue-100'
            } p-2 rounded-md my-2`}
          >
            <p className="flex items-center font-extrabold">
              {study.type === 'degree' ? (
                <FaUserGraduate className={iconStyle} />
              ) : (
                <FaMedal className={iconStyle} />
              )}
              {study.main}
            </p>
            <p className="text-gray-400 my-2">{study.sub}</p>
            <p className="text-gray-400 my-2">{study.desc}</p>
            <p className="text-sm">{study.period}</p>
          </div>
        );
      })}
    </div>
  );
}
