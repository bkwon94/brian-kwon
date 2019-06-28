import React from 'react';
import { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

const About = ({ currentSection, setSection }) => {

  // observer will keep track of what user sees on screen
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.65
  }
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setSection('about');
    }
  }, options)
  // observe when user reaches 65% of the about div
  // when this happens, set current section accordingly
  useEffect(() => {
    observer.observe(document.querySelector('#about'));
  }, [])

  return (
    <div id="about">
      <section className="container about-container">
        <LazyLoad height={200} offset={100}>
          <img id="profile-image" src="./images/profile.jpg" alt="profile photo"/>
        </LazyLoad>
      </section>
    </div>
  )
}

export default About;