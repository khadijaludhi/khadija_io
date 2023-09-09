import React, { useEffect, useState, useRef } from 'react';
import '../styles/Projects.css';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);  // <- Added this state
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

        // If the element becomes visible, set hasBeenVisible to true
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
        }
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
    <div id="project" ref={sectionRef}>
      <div className="project-container">
        <div className="section-header">
          {(isVisible || hasBeenVisible) && (  // <- Change this condition
            <div className="section-left purple">
              <Typewriter
                options={{
                  delay: 100,  // Speed in milliseconds
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<span class="purple">latest projects</span>')
                    .start();
                }}
              />
            </div>
          )}
          {(isVisible || hasBeenVisible) && (  // <- Change this condition
            <div className="section-right">
              <Typewriter
                options={{
                  delay: 370,  // Speed in milliseconds
                  autoStart: false,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<span class="hot-pink">02</span>')
                    .callFunction((state, stop) => {
                      state.elements.cursor.style.animation = 'none';
                      state.elements.cursor.style.opacity = 0;
                    })
                    .start();
                }}
              />
            </div>
          )}
        </div>
        <Fade bottom when={isVisible || hasBeenVisible} delay={500} distance="75px" duration={1500}>  {/* <- Change this condition */}
          <div className="project-content">
            <p>Project 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Project 2: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
