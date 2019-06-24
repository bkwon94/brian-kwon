import React from 'react';

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

        <div className="button">
          Get to know me <i id="arrow" className="fas fa-arrow-down"></i>
        </div>
      </section>
    </div>
  )
}

export default Main;