import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const About = () => {
  return (
    <div id="about">
      <section className="container about-container">
        <div
          className="nav-container"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="300"
        >
            <NavLink smooth to="#main" className="nav-item">Home</NavLink>
            <NavLink smooth to="#about" className="nav-item">About</NavLink>
            <NavLink smooth to="#projects" className="nav-item">Work</NavLink>
            <NavLink smooth to="#contact" className="nav-item">Contact</NavLink>
        </div>
      </section>
    </div>
  )
}

export default About;