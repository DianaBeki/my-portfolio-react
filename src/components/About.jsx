import React from 'react';
import icon1 from '../assets/about/icon1.png';
import icon2 from '../assets/about/icon2.png';
import icon3 from '../assets/about/icon3.png';

const About = () => (
  <div name="about" className="bg-about pt-[3rem] pb-[2rem] lg:pb-[6rem] w-full">
    <div className="flex flex-col justify-center items-center gap-3 md:gap-6 mx-[1rem] md:mx-[2rem] lg:mx-[6rem]">
      <div className="text-[#1640D6]">
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold rounded-md">
          About Me
        </h1>
      </div>
      <div className="">
        <div className="text-[#1640D6] font-[400]">
          <p className="text-[1.2rem] lg:text-[1.3rem]">
            Passionate about frontend development,
            I am a coding explorer turning ideas
            into digital wonders. With a keen eye
            for detail and a creative touch,
            I specialize in crafting user-centric
            solutions that go beyond expectations.
            My dedication to learning and staying
            current with the latest tech trends
            empowers me to create resilient and
            intuitive apps. As a team player,
            effective communication is my tool—I
            thrive in collaborative environments,
            guiding projects to success. Excited
            to bring my frontend expertise to
            new projects and solve complex problems
            in the dynamic world of technology.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-[20px] mt-[2rem]">
          <div className="frontend">
            <img src={icon1} alt="icons" className="icon hover:rotate-90 duration-500" />
            <h2 className="h-center">Frontend Developer</h2>
            <ul className="languages flex justify-center gap-2 flex-wrap p-0">
              <li>JavaScript</li>
              <li>Webpack</li>
              <li>React</li>
              <li>Redux</li>
              <li>Tailwind</li>
              <li>TypeScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>

          <div className="designer">
            <img src={icon2} alt="icons" className="icon  hover:rotate-180 duration-500" />
            <h2 className="h-center">Designer</h2>
            <ul className="design flex justify-center gap-2 flex-wrap p-0">
              <li>Font Awesome</li>
              <li>Google Fonts</li>
              <li>UX/UI</li>
              <li>Web</li>
              <li>Apps</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="professional">
            <img src={icon3} alt="icons" className="icon  hover:rotate-90 duration-500" />
            <h2 className="h-center">Professional</h2>
            <ul className="prof flex justify-center gap-2 flex-wrap p-0">
              <li>Remote Collaboration</li>
              <li>Teamwork</li>
              <li>Pair-Programming</li>
              <li>Dev Tools</li>
              <li>Github</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
