'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BsBox } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { IoCloseCircleSharp } from 'react-icons/io5';

const toggleIconStyle = 'w-6 h-6 text-blue-400';

const listStyle =
  'text-center font-bold mx-auto my-1 p-1 border-b-2 border-blue-400 duration-300';

export default function Header() {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(true);

  const toggleHeader = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathName]);

  return (
    <header className="sticky top-0 py-2 px-4 border-b-2">
      {/* header */}
      <div className="flex items-center justify-between mb-2">
        <div></div>
        <BsBox className={`w-8 h-8 text-blue-400 ml-4`} />
        {isOpen ? (
          <IoCloseCircleSharp
            onClick={toggleHeader}
            className={toggleIconStyle}
          />
        ) : (
          <FaCaretDown onClick={toggleHeader} className={toggleIconStyle} />
        )}
      </div>
      {/* header menu */}
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col items-center justify-center`}
      >
        <li className={listStyle}>
          <Link href="/">Home</Link>
        </li>
        <li className={listStyle}>
          <Link href="/project">Project</Link>
        </li>
      </ul>
    </header>
  );
}
