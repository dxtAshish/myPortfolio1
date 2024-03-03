// About.js

import React from 'react';

const About = () => {
  return (
    <div className='bg-gray-800 container mx-auto'>
    <div className="   flex flex-col md:flex-row items-center md:justify-between h-screen lg:mx-14">
      <div className="md:w-1/2 mb-4 md:mb-0">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-200">
          I am Ashish Dixit, a passionate Software Engineer with a strong background in web development. I love
          exploring new technologies and building exciting projects that make an impact. My journey into the tech world
          began with a deep curiosity for creating innovative solutions.
        </p>
      </div>
      <div className="md:w-1/3">
        <img
          src="https://via.placeholder.com/300"
          alt="Ashish Dixit"
          className="rounded-full w-64 h-64 object-cover shadow-lg mx-auto"
        />
      </div>
    </div>
    </div>
  );
};

export default About;
