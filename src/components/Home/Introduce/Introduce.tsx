import React from 'react';
import Title from '../Title';
import IntroAvatar from './IntroAvatar';
import IntroContentsArea from './IntroContentsArea/IntroContentsArea';

export default function Introduce() {
  return (
    <div id="intro" className="py-24">
      <Title text="私を紹介します" />
      <div className="flex items-center justify-center gap-12 mt-12 bg-white rounded-3xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
        {/* 아바타 --- 모바일 환경에서는 안보임 */}
        <IntroAvatar />
        {/* 컨텐츠 탭 */}
        <div className="w-full">
          <IntroContentsArea />
        </div>
      </div>
    </div>
  );
}
