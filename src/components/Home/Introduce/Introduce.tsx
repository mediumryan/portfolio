import React from 'react';
import Title from '../Title';
import IntroAvatar from './IntroAvatar';
import IntroContentsArea from './IntroContentsArea/IntroContentsArea';

export default function Introduce() {
  return (
    <div id="intro" className="py-32 md:pb-16 md:w-1/2 md:mx-auto">
      <Title text="私を紹介します" />
      <div className="flex items-center gap-12">
        {/* 아바타 --- 모바일 환경에서는 안보임 */}
        <IntroAvatar />
        {/* 컨텐츠 탭 */}
        <IntroContentsArea />
      </div>
    </div>
  );
}
