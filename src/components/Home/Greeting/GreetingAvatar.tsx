'use client';

import Image from 'next/image';
import React from 'react';
import GreetingAvatarImg from '@/Images/avatar/avatar.png';
import { useMediaQuery } from 'react-responsive';

export default function GreetingAvatar() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="flex justify-center">
      <div className="w-[150px] md:w-[300px]">
        <Image
          src={GreetingAvatarImg}
          alt="맥북으로 작업하는 아바타"
          width={isMobile ? 150 : 300}
          height={isMobile ? 150 : 300}
        />
      </div>
    </div>
  );
}
