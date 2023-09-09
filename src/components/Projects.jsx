import React, { useEffect, useState, useRef } from 'react';
import '../styles/Projects.css';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';

const Projects = () => {
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
    <div id="projects" ref={sectionRef}>
      <div className="projects-container">
        <div className="section-header">
          {isVisible && (
            <Typewriter
              options={{
                delay: 50,  // Speed in milliseconds
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('Projects')
                  .start();
              }}
            />
          )}
        </div>
        <Fade bottom when={isVisible} delay={500} distance="75px" duration={1200}>
          <div className="projects-content">
            <p>Project 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Project 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
