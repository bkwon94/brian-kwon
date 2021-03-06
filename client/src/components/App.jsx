import React from 'react';
import { useState, useEffect } from 'react';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Main from './Main.jsx';
import Projects from './Projects.jsx';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const App = () => {

  const [currentSection, setCurrentSection] = useState('');

  return (
    <div>
      <Main setSection={setCurrentSection}/>
      {/* START OF NAVBAR */}
      <div
          className="nav-container"
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="300"
      >

        <NavLink smooth to="#main" className="nav-item">Home</NavLink>

        {currentSection === 'about' ? <NavLink smooth to="#about" className="nav-item about-highlight">About</NavLink> : <NavLink smooth to="#about" className="nav-item">About</NavLink>}

        {currentSection === 'projects' ? <NavLink smooth to="#projects" className="nav-item projects-highlight">Work</NavLink> : <NavLink smooth to="#projects" className="nav-item">Work</NavLink>}

        {currentSection === 'contact' ? <NavLink smooth to="#contact" className="nav-item contact-highlight">Contact</NavLink> : <NavLink smooth to="#contact" className="nav-item">Contact</NavLink>}


        </div>

      <About currentSection={currentSection} setSection={setCurrentSection}/>
      <Projects currentSection={currentSection} setSection={setCurrentSection}/>
      <Contact setSection={setCurrentSection}/>
    </div>
  )
}

export default App;