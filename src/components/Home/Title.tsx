import { Rampart_One } from 'next/font/google';

const rampart = Rampart_One({ subsets: ['latin'], weight: ['400'] });

export default function Title({ text }: { text: string }) {
  return (
    <h2 className={`${rampart.className} text-3xl italic mb-4`}>{text}</h2>
  );
}
