'use client';

import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function GoTop() {
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-[5%] md:bottom-[10%] right-[5%] cursor-pointer">
      <FaArrowCircleUp
        onClick={goToTop}
        className="w-10 h-10 md:w-12 md:h-12 text-blue-400 hover:text-blue-600 duration-300"
      />
    </div>
  );
}
