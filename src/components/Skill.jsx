// Skill.js

import React from 'react';

// Import logos/icons for skills
import cppLogo from '../assets/cpp_logo.png';
import dsaLogo from '../assets/dsa.png';
import htmlLogo from '../assets/htmlLogo.png';
import cssLogo from '../assets/cssLogo.png';
import tailwindLogo from '../assets/tailwindLogo.png';
import jsLogo from '../assets/jsLogo.png';
import reactLogo from '../assets/ReactLogo.png';
import nextLogo from '../assets/nextjsLogo.png';
import nodeLogo from '../assets/nodeLogo.png';
import expressLogo from '../assets/expressJs.png';
import mysqlLogo from '../assets/mysqlLogo.png';
import mongodbLogo from '../assets/mongodb.svg';

const Skill = () => {
  // Skills data with respective logos
  const skills = [
    { name: 'C++', logo: cppLogo },
    { name: 'DSA', logo: dsaLogo },
    { name: 'HTML', logo: htmlLogo },
    { name: 'CSS', logo: cssLogo },
    { name: 'Tailwind CSS', logo: tailwindLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'React', logo: reactLogo },
    { name: 'Next.js', logo: nextLogo },
    { name: 'Node.js', logo: nodeLogo },
    { name: 'Express.js', logo: expressLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'MongoDB', logo: mongodbLogo },
  ];

  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center ">
      <div className='container mx-auto mt-8'>
      <h2 className="text-3xl font-bold mb-4 mx-[90px]">Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain mb-2" />
            <span className="text-sm text-gray-200">{skill.name}</span>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Skill;
