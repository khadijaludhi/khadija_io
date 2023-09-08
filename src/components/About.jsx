import React, { useEffect, useState, useRef } from 'react';
import '../styles/About.css';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="about" ref={sectionRef}>
      <div className="about-container">
        <div className="section-header">
          {isVisible && (
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('About Me')
                  .start();
              }}
            />
          )}
        </div>
        <Fade bottom when={isVisible}>
          <div className="about-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutMe;
