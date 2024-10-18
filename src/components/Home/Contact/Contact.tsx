import React from 'react';
import Title from '../Title';
import { MdEmail } from 'react-icons/md';
import { contact } from '@/data/contact';

export default function Contact() {
  return (
    <div id="contact" className="h-[50vh] md:w-1/2 md:mx-auto">
      <Title text="Contact" />
      <div className="flex flex-col justify-center gap-4 mt-8 p-4">
        {contact.map((item) => {
          return (
            <div key={item.id} className="grid grid-cols-9 items-center">
              <p className="col-span-1">{item.icon}</p>
              <p className="col-span-8">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
