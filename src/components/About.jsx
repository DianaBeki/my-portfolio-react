import React from 'react';

const About = () => (
  <div name="about" className="bg-gradient-to-b from-gray-800 to-black text-[#EBE3D5] pt-[3rem] px-[3rem] pb-[5rem] w-full mx-auto">
    <div className="text-center md:pb-10">
      <h1 className="text-2xl md:text-3xl lg:text-6xl bg-clip-text bg-gradient-to-b from-[#B6FFFA] to-[#FF6C22] text-transparent font-bold rounded-md">
        About Me
      </h1>
    </div>

    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="flex-1">
        <div className="hidden md:flex flex-col gap-7">
          <div className="bg-[#F8FFD2] rounded-md p-3 text-[#191919] inline-block">
            <ul>
              <p className="text-2xl bg-clip-text bg-gradient-to-b from-[#000000] to-[#FF6C22] text-transparent mb-3">Skills</p>
              <li>Pair-programming</li>
              <li>Remote Collaboration</li>
              <li>Web Development</li>
              <li>Github</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="bg-[#F8FFD2] rounded-md p-3 text-[#191919] inline-block">
            <ul>
              <p className="text-2xl bg-clip-text bg-gradient-to-b from-[#000000] to-[#FF6C22] text-transparent mb-3">Soft Skills</p>
              <li>Effective Communication</li>
              <li>Problem Solving</li>
              <li>Time Management</li>
              <li>Adaptability</li>
              <li>Feedback and collaboration</li>
              <li>Networking</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-[#FFF7D4] text-[1.2rem] lg:text-[1.3rem]">
          Passionate about technology, I'm a coding explorer venturing into the dynamic world of programming. I enjoy exploring different technologies, transforming ideas into digital wonders. With attention to detail and a creative touch, I specialize in crafting digital solutions that surpass expectations, adding life to imaginative
          concepts. My dedication to learning and mastering technology empowers me to tackle challenges, creating resilient and user-friendly apps. As a full-stack developer, I've fine-tuned both front-end and back-end skills, constructing seamless and effective systems. I'm always eager to learn and stay updated with the latest tech trends, ensuring my skills are not just current but cutting-edge. Collaboration is my strength, and effective communication is my tool—I thrive in teamwork, guiding projects toward success. I'm excited to embark on new projects and contribute my expertise to solving complex problems in the world of technology.
        </p>
      </div>
    </div>
  </div>
);

export default About;
