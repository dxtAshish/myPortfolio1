// Landing.js

import React from "react";
import { Design } from "./Design";
const Landing = () => {
  return (
  

    <div className="bg-gray-800 text-center h-screen bg-cover bg-no-repeat flex flex-col justify-center items-center  ">
      
    
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hey buddy, welcome to my profile!</h1>
        <p className="text-lg lg:text-xl text-gray-200 mb-8">
          I am Ashish Dixit, a Software Engineer, Entrepreneur, and Explorer.
        </p>
        <img
          src="https://via.placeholder.com/200"
          alt="Ashish Dixit"
          className="mx-auto rounded-full w-48 h-48 lg:w-64 lg:h-64 object-cover shadow-lg "

        />
        <div className="w-full "><Design/></div>
      </div>
      
     
     
    </div>
  );
};

export default Landing;
