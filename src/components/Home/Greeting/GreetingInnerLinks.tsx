'use client';

import { isHeaderOpenA } from '@/data/atom';
import { useSetAtom } from 'jotai';
import Link from 'next/link';
import React from 'react';

const innerLinkButtonStyle =
  'w-24 border rounded-2xl px-2 py-1 font-bold hover:text-white hover:bg-blue-400 duration-300';

export default function GreetingInnerLinks() {
  const setIsOpen = useSetAtom(isHeaderOpenA);

  const closeHeader = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button onClick={closeHeader} className={innerLinkButtonStyle}>
        <Link href="#intro">Introduce</Link>
      </button>
      <button onClick={closeHeader} className={innerLinkButtonStyle}>
        <Link href="#skills">Skills</Link>
      </button>
      <button onClick={closeHeader} className={innerLinkButtonStyle}>
        <Link href="#projects">Projects</Link>
      </button>
    </div>
  );
}
