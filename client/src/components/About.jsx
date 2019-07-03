import React from 'react';
import { useState, useEffect } from 'react';
import { detectViewportChange } from '../utils.js';
import LazyLoad from 'react-lazyload';

const About = ({ currentSection, setSection }) => {
  const [ sectionName ] = useState('about');

  detectViewportChange(sectionName, setSection);

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