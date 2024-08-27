import { useState, useEffect, useRef } from 'react';
import '../styles/Experience.css';
import JobList from "./JobList";
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);

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
    <div id="experience" ref={sectionRef}>
      <div className="experience-container">
        <div className="section-header">
          {(isVisible || hasBeenVisible) && (
            <div className="section-left purple">
              <Typewriter
                options={{
                  delay: 100,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<span class="purple">experience</span>')
                    .start();
                }}
              />
            </div>
          )}
          {(isVisible || hasBeenVisible) && (
            <div className="section-right">
              <Typewriter
                options={{
                  delay: 370,
                  autoStart: false,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<span class="hot-pink">03</span>')
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
        <Fade bottom when={isVisible || hasBeenVisible} delay={500} distance="75px" duration={3000}>
          <div className="experience-content">
            <JobList />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Experience;
