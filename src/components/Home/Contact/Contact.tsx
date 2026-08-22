import React from 'react';
import Title from '../Title';
import { MdEmail } from 'react-icons/md';
import { contact } from '@/data/contact';

export default function Contact() {
  return (
    <div id="contact" className="py-24 mb-16">
      <Title text="Contact" />
      <div className="flex flex-col justify-center items-center gap-4 mt-12 p-6 md:p-10 max-w-2xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md">
        {contact.map((item) => {
          return (
            <div
              key={`contact-${item.id}`}
              className="flex items-center gap-6 w-full p-4 rounded-2xl hover:bg-blue-50 transition-colors duration-300 group cursor-default"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-500 text-2xl group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                {item.icon}
              </div>
              <p className="text-lg font-medium text-gray-700">{item.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
