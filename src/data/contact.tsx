import { MdEmail, MdPhone } from 'react-icons/md';

const iconStyle = 'w-6 h-6 text-blue-400';

export type ContactType = {
  id: number;
  value: string;
  icon: any;
};

export const contact = [
  {
    id: 0,
    value: 's**************@gmail.com',
    icon: <MdEmail className={iconStyle} />,
  },
  { id: 1, value: '080-****-****', icon: <MdPhone className={iconStyle} /> },
] as ContactType[];
