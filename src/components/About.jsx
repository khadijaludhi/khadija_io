import React, { useEffect, useState, useRef } from 'react';
import '../styles/About.css';
import Typewriter from 'typewriter-effect';

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
        threshold: 0.3,  // Adjust this value 
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
        <div className="about-content">
          <p>Lorem ipsum...</p>
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
