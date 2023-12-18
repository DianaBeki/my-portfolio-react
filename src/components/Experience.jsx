import React from 'react';
import css from '../assets/css.png';
import github from '../assets/github.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import reactImg from '../assets/react.png';
import tailwind from '../assets/tailwind.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-[#F39F5A]',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: reactImg,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: github,
      title: 'Github',
      style: 'shadow-gray-400',
    },
    {
      id: 7,
      src: node,
      title: 'Node',
      style: 'shadow-lime-800',
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 pb-[2rem] md:pb-[10rem]">
      <div className="flex flex-col justify-center text-[#FFF7D4]">
        <div className="text-center">
          <h2 className="bg-clip-text bg-gradient-to-b from-[#B6FFFA] to-[#FF6C22] text-transparent text-3xl md:text-4xl pt-5 md:pt-10">Experience</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 md:px-12 px-5">
          {techs.map(({
            id, src, title, style,
          }) => (
            <div key={id} className={`shadow-md hover:skew-12 hover:scale-y-75 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
