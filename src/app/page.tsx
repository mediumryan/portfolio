import Greeting from '@/components/Home/Greeting/Greeting';
import Introduce from '@/components/Home/Introduce/Introduce';
import Projects from '@/components/Home/Projects/Projects';
import Skills from '@/components/Home/Skills/Skills';
import { FaCaretDown } from 'react-icons/fa6';

export default function Home() {
  return (
    <div className="mx-8 my-4">
      {/* Greeting */}
      <Greeting />
      <div className="flex justify-center">
        <a href="#intro">
          <FaCaretDown className="my-32 md:my-64 w-6 h-6 text-blue-400 animate-bounce" />
        </a>
      </div>
      {/* Introduce */}
      <Introduce />
      <div className="flex justify-center">
        <a href="#skills">
          <FaCaretDown className="my-16 md:my-4 w-6 h-6 text-blue-400 animate-bounce" />
        </a>
      </div>
      {/* Skills */}
      <Skills />
      {/* Projects */}
      <Projects />
    </div>
  );
}
