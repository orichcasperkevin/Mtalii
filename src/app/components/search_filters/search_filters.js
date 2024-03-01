"use client"
import React, { useState } from 'react';

const SearchFilters = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='h-screen overflow-auto rounded-lg'>
      <div className="overflow-auto">
        <div className="bg-white p-10 shadow-lg">          

          {/* Accordion items */}
          {accordionData.map((item, index) => (
            <div key={index} className="transition hover:bg-accent-1 rounded-lg">
              {/* Accordion header */}
              <div
                onClick={() => toggleAccordion(index)}
                className="accordion-header cursor-pointer transition flex space-x-5 px-5 items-center h-16"
              >
                <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                <h3>{item.title}</h3>
              </div>
              {/* Accordion content */}
              <div
                className={`accordion-content px-5 pt-0 overflow-hidden max-h-0 ${
                  activeIndex === index ? 'max-h-full' : ''
                }`}
              >
                <p className="leading-6 font-light pl-9 text-justify">{item.content}</p>
                <button className="rounded-full bg-indigo-600 text-white font-medium font-lg px-6 py-2 my-5 ml-9">
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>      
    </div>
  );
};

export default SearchFilters;

// Sample data
const accordionData = [
  {
    title: 'What is term?',
    content:
      'Our asked point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.',
  },
  {
    title: 'When to use Accordion Components?',
    content:
      'Our asked point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.',
  },
  {
    title: 'How can it be defined?',
    content:
      'Our asked point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.',
  },
  {
    title: 'Chamber reached do he nothing be?',
    content:
      'Our asked point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter.',
  },
];
