// App.js

import React from 'react';

import ProjectCard from './components/ProjectCard';
import Landing from './components/Landing';
import About from './components/About';
import Skill from './components/Skill';
import Contact from './components/Contact';
import GitHubStats from './components/GitHubStats';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

const App = () => {

  
 
  return (
    <Router>
      <Navbar/>
       <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/skill" element={<Skill/>}/>
      <Route exact path="/project" element={<ProjectCard/>}/>
     
      <Route exact path="/github" element={<GitHubStats/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
    
      </Routes>
      
      </Router>
  );
};

export default App;
