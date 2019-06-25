import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Main = () => {
  return (
    <div id="main">
      <section className="container main-container">
        <div className="main-text">
          Hello, my name is <span id="name">Brian Kwon</span>.
          <div>
            I'm a full-stack web developer.
          </div>
        </div>

        <NavLink smooth to="#about" className="button">
        {/* <div className="button"> */}
          Get to know me <i id="arrow" className="fas fa-arrow-down"></i>
        {/* </div> */}
        </NavLink>
      </section>
    </div>
  )
}

export default Main;