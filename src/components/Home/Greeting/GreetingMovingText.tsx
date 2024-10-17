'use client';

import { useEffect, useState } from 'react';

export default function GreetingMovingText() {
  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);
  const completionWord = '私は、フロントエンド開発者です。';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
        }

        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return <p className="text-2xl font-extrabold min-h-8">{blogTitle}</p>;
}
