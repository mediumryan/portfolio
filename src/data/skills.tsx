import {
  FaGithub,
  FaGoogle,
  FaJsSquare,
  FaReact,
  FaSlack,
} from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import {
  SiNextdotjs,
  SiNotion,
  SiStyledcomponents,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si';
import { TbSql } from 'react-icons/tb';

const skillsIconStyle = 'w-8 h-8 text-blue-400 hover:rotate-12 duration-300';

export const skills = [
  {
    id: 0,
    name: 'Javascript',
    icon: <FaJsSquare className={skillsIconStyle} />,
  },
  {
    id: 1,
    name: 'Typescript',
    icon: <SiTypescript className={skillsIconStyle} />,
  },
  {
    id: 2,
    name: 'React.js',
    icon: <FaReact className={skillsIconStyle} />,
  },
  {
    id: 3,
    name: 'Next.js',
    icon: <SiNextdotjs className={skillsIconStyle} />,
  },
  {
    id: 4,
    name: 'SQL',
    icon: <TbSql className={skillsIconStyle} />,
  },
];

export const css = [
  {
    id: 0,
    name: 'Styled-components',
    icon: <SiStyledcomponents className={skillsIconStyle} />,
  },
  {
    id: 1,
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill className={skillsIconStyle} />,
  },
];

export const others = [
  {
    id: 0,
    name: 'VS Code',
    icon: <SiVisualstudiocode className={skillsIconStyle} />,
  },
  {
    id: 1,
    name: 'Notion',
    icon: <SiNotion className={skillsIconStyle} />,
  },
  {
    id: 2,
    name: 'Slack',
    icon: <FaSlack className={skillsIconStyle} />,
  },
  {
    id: 3,
    name: 'Google WS',
    icon: <FaGoogle className={skillsIconStyle} />,
  },
  {
    id: 4,
    name: 'Github',
    icon: <FaGithub className={skillsIconStyle} />,
  },
];
