import { Rampart_One } from 'next/font/google';

const rampart = Rampart_One({ subsets: ['latin'], weight: ['400'] });

export default function Title({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center mb-12 group">
      <h2 className={`${rampart.className} text-4xl text-gray-800 tracking-wider transition-colors duration-300 group-hover:text-blue-500`}>
        {text}
      </h2>
      <div className="w-16 h-1 bg-blue-300 mt-4 rounded-full transition-all duration-300 group-hover:w-24 group-hover:bg-blue-500"></div>
    </div>
  );
}
