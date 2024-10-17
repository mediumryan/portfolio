import React from 'react';
import { FaGithub } from 'react-icons/fa6';

const iconStyle = 'w-8 h-8 p-1 hover:rotate-12 duration-300 hover:scale-105';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full flex flex-col justify-center items-center border-t-2 py-2">
      {/* rights */}
      <p className="text-gray-400 text-sm my-2">
        © 2024. Ryan All rights reserved.
      </p>
      {/* links */}
      <ul className="flex">
        <li className={iconStyle}>
          <a href="https://github.com/mediumryan" target="blank">
            <FaGithub className="w-full h-full" />
          </a>
        </li>
        <li className={iconStyle}>
          <a href="https://medium-ryan.tistory.com/" target="blank">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
              <title>티스토리 로고</title>
              <g>
                <path d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z" />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}
