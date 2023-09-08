import { useState, useEffect, useRef } from 'react';


import '../styles/About.css';
import Typewriter from 'typewriter-effect';
import Fade from 'react-reveal/Fade';


const AboutMe = () => {
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
    <div id="about" ref={sectionRef}>
      <div className="about-container">
        <div className="section-header">
          {(isVisible || hasBeenVisible) && (  // <- Changed this condition
            <div className="section-left purple">
              <Typewriter
                options={{
                  delay: 100,  // Speed in milliseconds
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<span class="purple">about me</span>')
                    .start();
                }}
              />
            </div>
          )}
          {(isVisible || hasBeenVisible) && (  // <- Changed this condition
            <div className="section-right">
              <Typewriter
                options={{
                  delay: 370,
                  autoStart: false,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('<span class="hot-pink">01</span>')
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
        <Fade bottom when={isVisible || hasBeenVisible} delay={500} distance="75px" duration={1500}>  {/* <- Changed this condition */}
          <div className="about-content">
            <div>
                <p>I am an incoming <span className="highlighted-text">Mathematics</span> student at the <span className="highlighted-text">University of Leeds</span> with a keen interest in the ever-evolving worlds of software development and fintech.</p>
                <p>Although I have much to learn, I view each challenge as an opportunity for <span className="highlighted-text">growth and advancement</span>. I am eager to build my skill set and gain deeper insights in the years to come.</p>
                <p>Outside of my studies, I love to play video games and listen to true crime podcasts. I am fascinated by space and enjoy hiking.</p>
            </div>

          </div>

        </Fade>
      </div>

    </div>
  );
};

export default AboutMe;
