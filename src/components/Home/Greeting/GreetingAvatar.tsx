import Image from 'next/image';
import React from 'react';
import GreetingAvatarImg from '@/Images/avatar/avatar.png';

export default function GreetingAvatar() {
  return (
    <div className="flex justify-center">
      <div className="relative w-[200px] md:w-[300px] h-[200px] md:h-[300px]">
        <Image
          src={GreetingAvatarImg}
          alt="맥북으로 작업하는 아바타"
          layout="fill"
        />
      </div>
    </div>
  );
}
