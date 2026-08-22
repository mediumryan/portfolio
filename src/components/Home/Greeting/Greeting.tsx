import OuterLinks from '@/components/OuterLinks';
import { Rampart_One } from 'next/font/google';
import GreetingAvatar from './GreetingAvatar';
import GreetingInnerLinks from './GreetingInnerLinks';
import GreetingMovingText from './GreetingMovingText';

const rampart = Rampart_One({ subsets: ['latin'], weight: ['400'] });

export default function Greeting() {
  return (
    <div className="py-24 flex flex-col md:flex-row-reverse md:items-center justify-center md:justify-between space-y-12 md:space-y-0 gap-8">
      {/* avatar */}
      <div className="flex-shrink-0 flex justify-center">
        <GreetingAvatar />
      </div>
      <div className="flex flex-col justify-center space-y-8 flex-grow">
        {/* hello */}
        <p className={`${rampart.className} bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 text-4xl md:text-5xl drop-shadow-sm`}>
          こんにちは、
        </p>
        {/* moving text */}
        <div className="text-xl md:text-2xl font-semibold text-gray-700">
          <GreetingMovingText />
        </div>
        {/* intro paragraph */}
        <p className="font-medium text-base md:text-lg text-gray-600 border-t border-b border-gray-200 py-6 leading-relaxed">
          新しいものを学び、作ることが大好きな
          <span className="font-bold text-blue-500 mx-1 text-xl">Ryan</span>です。
        </p>
        {/* inner links */}
        <GreetingInnerLinks />
        {/* outer links */}
        <OuterLinks flag={true} />
      </div>
    </div>
  );
}
