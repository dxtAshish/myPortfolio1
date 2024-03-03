// ProjectCard.js

import React from 'react';

const ProjectCard = () => {

  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce website built with React and Node.js.',
      imageUrl: 'https://via.placeholder.com/300x200',
      technologies: 'React, Node.js, Express, MongoDB',
      demoLink: '#', // Replace with your demo link
      githubLink: '#', // Replace with your GitHub repo link
    },
    {
      title: 'Weather App',
      description: 'A weather application displaying current weather using APIs.',
      imageUrl: 'https://via.placeholder.com/300x200',
      technologies: 'HTML, CSS, JavaScript',
      demoLink: '#', // Replace with your demo link
      githubLink: '#', // Replace with your GitHub repo link
    },
    // Add more projects
  ];

  return (
    <div className="bg-gray-800 h-screen container mx-auto  flex flex-col justify-center items-center ">
    <h1 className="text-3xl font-bold mb-4">projects</h1>
    <div className="  flex justify-center items-center lg:mx-14">
      {projects.map((project, index) => (
      <div className='bg-white rounded-lg shadow-lg p-4 m-4 max-w-sm'>
      <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="text-gray-600 mb-2">{project.description}</p>
      <p className="text-gray-600 mb-2">Technologies: {project.technologies}</p>
      <div className="mt-4 flex justify-between">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
          View Demo
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
          GitHub Repo
        </a>
      </div>
      </div>))
}
    </div>
    </div>
    
  );
};

export default ProjectCard;
