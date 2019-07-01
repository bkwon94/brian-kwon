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
        <div className="heading">who i am</div>
        <LazyLoad height={200} offset={100}>
          <img id="profile-image" src="./images/profile.jpg" alt="profile photo"/>
        </LazyLoad>

        <div id="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget sem vulputate, congue nibh eget, tempus massa. Curabitur orci arcu, volutpat eu vehicula vel, feugiat non tellus. Mauris luctus dolor ligula, vel feugiat lacus lacinia sit amet. Phasellus ligula orci, tempor quis aliquet at, pellentesque nec mi. Aenean congue metus enim, vitae commodo purus accumsan quis. Ut fringilla aliquam nunc. Mauris facilisis ut sapien sed sollicitudin. Mauris aliquet aliquam ipsum quis condimentum.
        </div>
      </section>
    </div>
  )
}

export default About;