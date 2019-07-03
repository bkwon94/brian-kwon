import { useEffect } from 'react';

export const detectViewportChange = (name, setToSection) => {
    // observer will keep track of what user sees on screen
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.65
    }
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setToSection(name);
      }
    }, options)
    // observe when user reaches 65% of the about div
    // when this happens, set current section accordingly
    useEffect(() => {
      observer.observe(document.querySelector(`#${name}`));
    }, [])
}