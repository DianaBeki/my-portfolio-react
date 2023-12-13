import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import Hero from '../assets/Hero.png';

const Home = () => (
  <div name="home" className="bg-gradient-to-b from-[#0F0F0F] to-[#232D3F] px-[1rem] md:px-[2rem] mx-auto pb-[2rem] lg:pb-[8rem]">
    <div className="flex flex-col md:flex-row items-center justify-center pt-[9rem] md:pt-[7rem] mx-auto">
      <div className="hidden md:flex w-[620px] h-[380px] lg:ml-[4rem]">
        <img src={Hero} alt="Pic" className="rounded-b-[100%] object-cover" />
      </div>
      <div className="flex flex-col justify-center gap-2 md:gap-6 md:ml-3 lg:ml-6">
        <p className="text-[#FFF7D4] text-2xl md:text-3xl lg:text-6xl font-bold mt-2 md:mt-10">
          Hello! I'm
          {' '}
          <span className="bg-clip-text bg-gradient-to-b from-[#B6FFFA] to-[#FF6C22] text-transparent">Diana Beki</span>
        </p>
        <h2 className="text-2xl md:text-4xl font-bold bg-clip-text bg-gradient-to-b from-[#B6FFFA] to-[#FF6C22] text-transparent">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#FFF7D4] text-[1.2rem] lg:text-[1.3rem]">
          I specialize in developing applications that prioritize exceptional user experiences. My focus revolves around crafting seamless web applications using technologies such as React, Redux, JavaScript, Tailwind, Ruby, Ruby on Rails, and PostgreSQL.
        </p>
        <div className="">
          <Link to="portfolio" smooth duration={500} offset={-75} type="button" className="text-white text-[16px] font-semibold w-fit px-2 py-1 md:px-6 md:py-3 md:my-2 flex  gap-1 md:gap-4 items-center rounded-md bg-[#F39F5A] hover:text-black hover:bg-[#CCC8AA] md:transition-transform md:transform md:hover:scale-110 hover:shadow-md hover:shadow-[#FFFFDD] md:duration-200 cursor-pointer">
            Portfolio
            <span className="hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={30} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
