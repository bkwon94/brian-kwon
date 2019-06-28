import React from 'react';
import { useState, useEffect } from 'react';

const About = ({ currentSection, setSection }) => {

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setSection('about');
    }
  }, options)

  useEffect(() => {
    observer.observe(document.querySelector('#about'));
  }, [])

  return (
    <div id="about">
      <section className="container about-container">
      </section>
    </div>
  )
}

export default About;