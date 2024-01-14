import React from 'react';
import css from '../assets/experience/css.png';
import github from '../assets/experience/github.png';
import html from '../assets/experience/html.png';
import javascript from '../assets/experience/javascript.png';
import node from '../assets/experience/node.png';
import reactImg from '../assets/experience/react.png';
import tailwind from '../assets/experience/tailwind.png';
import codepen from '../assets/experience/codepen.jpg';
import vscode from '../assets/experience/vscode.png';
import typescript from '../assets/experience/typescript.png';
import postgresql from '../assets/experience/Postgresql.png';
import git from '../assets/experience/git.png';

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-[#D83F31]',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-[#E9B824]',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-[#F3FDE8]',
    },
    {
      id: 4,
      src: reactImg,
      title: 'React',
      style: 'shadow-[#EC53B0]',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-[#9A3B3B]',
    },
    {
      id: 6,
      src: github,
      title: 'Github',
      style: 'shadow-[#FFBA86]',
    },
    {
      id: 7,
      src: node,
      title: 'Node',
      style: 'shadow-[#A8DF8E]',
    },
    {
      id: 8,
      src: vscode,
      title: 'Vscode',
      style: 'shadow-[#52D3D8]',
    },
    {
      id: 9,
      src: codepen,
      title: 'Codepen',
      style: 'shadow-[#FF8F8F]',
    },
    {
      id: 10,
      src: typescript,
      title: 'Typescript',
      style: 'shadow-[#5FBDFF]',
    },
    {
      id: 11,
      src: postgresql,
      title: 'PostgreSQL',
      style: 'shadow-[#AF2655]',
    },
    {
      id: 12,
      src: git,
      title: 'Git',
      style: 'shadow-[#D2DE32]',
    },
  ];

  return (
    <div name="experience" className="bg-tools w-full pb-[2rem] md:pb-[5rem]">
      <div className="flex flex-col justify-center text-white">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl pt-5 md:pt-10">Tools</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 md:px-12 px-5">
          {techs.map(({
            id, src, title, style,
          }) => (
            <div key={id} className={`shadow-md hover:skew-12 hover:scale-y-75 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="tool" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
