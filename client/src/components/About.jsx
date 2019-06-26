import React from 'react';
import { useState, useEffect } from 'react';

const About = ({ currentSection, setSection }) => {

  const handleScroll = () => {
    setSection('about');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [currentSection]);

  return (
    <div id="about">
      <section className="container about-container">
      </section>
    </div>
  )
}

export default About;