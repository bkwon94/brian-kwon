import React from 'react';
import { useState, useEffect } from 'react';

const Projects = ({ currentSection, setSection }) => {

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setSection('projects');
    }
  }, options)

  useEffect(() => {
    observer.observe(document.querySelector('#projects'));
  }, [])

  return (
    <div id="projects">
      <section className="container projects-container">
        <div>PROJECTS</div>
      </section>
    </div>
  )
}

export default Projects;