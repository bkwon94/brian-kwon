import React from 'react';
import { detectViewportChange } from '../utils.js';
import { useState, useEffect } from 'react';

const Projects = ({ currentSection, setSection }) => {
  const [ sectionName ] = useState('projects');

  detectViewportChange(sectionName, setSection);

  return (
    <div id="projects">
      <section className="container projects-container">
        <div>PROJECTS</div>
      </section>
    </div>
  )
}

export default Projects;