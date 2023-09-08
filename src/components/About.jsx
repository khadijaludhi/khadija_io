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
          <div className="section-right">
            <span className="section-number">01</span>
          </div>
          {isVisible && (
            <Typewriter
              options={{
                delay: 100,  // Speed in milliseconds
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString('About Me')
                  .start();
              }}
            />
          )}
        </div>
        <Fade bottom when={isVisible} delay={500} distance="75px" duration={1500}>
          <div className="about-content">
            <p>I am an incoming Mathematics student at the University of Leeds with a keen interest in the ever-evolving worlds of software development and fintech.</p>
            <p>Although I have much to learn, I view each challenge as an opportunity for growth and advancement. I am eager to build my skill set and gain deeper insights in the years to come.</p>
            <p>Outside of my studies, I love to play video games and listen to true crime podcasts. I am fascinated by space and enjoy hiking.</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default AboutMe;
