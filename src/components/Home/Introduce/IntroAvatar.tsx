'use client';

import Image from 'next/image';
import React from 'react';
import IntroAvatarImg from '@/Images/avatar/avatar_upper.jpeg';
import { useMediaQuery } from 'react-responsive';

export default function IntroAvatar() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="hidden md:block w-[150px] md:w-[300px]">
      <Image
        src={IntroAvatarImg}
        alt="손을 흔들고있는 아바타"
        width={isMobile ? 150 : 300}
        height={isMobile ? 150 : 300}
      />
    </div>
  );
}
