import OuterLinks from '@/components/OuterLinks';
import { Rampart_One } from 'next/font/google';
import GreetingAvatar from './GreetingAvatar';
import GreetingInnerLinks from './GreetingInnerLinks';
import GreetingMovingText from './GreetingMovingText';

const rampart = Rampart_One({ subsets: ['latin'], weight: ['400'] });

export default function Greeting() {
  return (
    <div className="md:w-1/2 md:mx-auto flex flex-col md:flex-row-reverse md:items-center justify-center md:justify-between space-y-8">
      {/* avatar */}
      <GreetingAvatar />
      <div className="flex flex-col justify-center space-y-8">
        {/* hello */}
        <p className={`${rampart.className} text-gradient text-3xl`}>
          こんにちは、
        </p>
        {/* moving text */}
        <GreetingMovingText />
        {/* intro paragraph */}
        <p className="font-bold text-sm border-t-2 border-b-2 py-4">
          新しいものを学び、作ることが大好きな
          <span className="font-bold text-blue-400">Ryan</span>です。
        </p>
        {/* inner links */}
        <GreetingInnerLinks />
        {/* outer links */}
        <OuterLinks flag={true} />
      </div>
      {/* icon */}
    </div>
  );
}
