import React from 'react';
import { useState, useEffect } from 'react';


const Contact = ({ setSection }) => {

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.65
  }
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setSection('contact');
    }
  }, options)

  useEffect(() => {
    observer.observe(document.querySelector('#contact'));
  }, [])

  return (
    <div id="contact">
      <section className="container contact-container">
        <div>CONTACT</div>
      </section>
    </div>
  )
}

export default Contact;