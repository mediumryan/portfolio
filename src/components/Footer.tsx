import React from 'react';
import OuterLinks from './OuterLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="absolute bottom-0 w-full flex flex-col justify-center items-center border-t-2 py-2">
      {/* rights */}
      <p className="text-gray-400 text-sm my-2">
        {`© ${year}. Ryan All rights reserved.`}
      </p>
      {/* links */}
      <OuterLinks flag={false} />
    </footer>
  );
}
