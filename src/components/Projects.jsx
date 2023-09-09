import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Projects.css";
import Fade from "react-reveal/Fade";
import { Tilt } from 'react-tilt';
import { projects } from '../constants';
import Typewriter from 'typewriter-effect';


const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  if (isMobile) {
    return (
      <Link to={source_code_link}>
        <div className='self-stretch bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full text-23px cards'>
          {/* Content */}
          <div className='relative w-full h-[230px]'> {/*Image at top of card*/}
            <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          </div>
          <div className="mt-2">  {/*Description after image */}
            <h3 className="text-white font-bold text-23px">{name}</h3>  
            <p className="mt-2 text-secondary text-16px">{description}</p>
          </div>
          <div className="mt-7 flex gap-7"> {/*Tags at bottom of card */}
            {tags.map(tag => <p key={tag.name} className={`text-16px mt--4 ${tag.color}`}>#{tag.name}</p>)}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={source_code_link}>
      <Tilt
        options={{  
          max: 45,
          scale: 1,
          speed: 450, 
        }}
        className='self-stretch bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full text-23px cards'
      >
        {/* Content */}
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
        </div>
        <div className="mt-2">
          <h3 className="text-white font-bold text-23px">{name}</h3>  
          <p className="mt-2 text-secondary text-16px">{description}</p>
        </div>
        <div className="mt-7 flex gap-7">
          {tags.map(tag => <p key={tag.name} className={`text-16px mt--4 ${tag.color}`}>#{tag.name}</p>)}
        </div>
      </Tilt>
    </Link>
  );
};

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
    <div id="projects" ref={sectionRef}>
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
        <Fade bottom when={isVisible || hasBeenVisible} delay={500} distance="75px" duration={3000}>  {/* <- Change this condition */}
          <div className="flex justify-center flex-wrap items-stretch">
            {projects.map((project, index) => (
              <ProjectCard key={`project-${index}`} {...project} />
              ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
