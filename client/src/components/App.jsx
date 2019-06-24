import React from 'react';
import { useState, useEffect } from 'react';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Main from './Main.jsx';
import Projects from './Projects.jsx';


const App = () => {
  return (
    <div>
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;