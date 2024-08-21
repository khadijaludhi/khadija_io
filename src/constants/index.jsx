import {
    calculator,
    sketchpad,
    clock,
    hangman,
    
  
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
  ];
  
  // ! projects section
  const projects = [
    {
      name: "Sketchpad",
      description:
        "An etch-e-sketch game that allows users to draw their own fun designs.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: sketchpad,
      source_code_link: "https://github.com/khadijaludhi/sketchpad",
    },

    {
      name: "Calculator",
      description:
        "A simple calculator built using React.js.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: calculator,
      source_code_link: "https://github.com/khadijaludhi/calculator",
    },    

    {
      name: "Analogue Clock",
      description:
        "A clock made from HTML, CSS and vanilla JavaScript",
        tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: clock,
      source_code_link: "https://github.com/khadijaludhi/clock",
    },

    {
      name: "Hangman",
      description:
        "A simple Hangman game built with Python",
        tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
      ],
      image: hangman,
      source_code_link: "https://github.com/khadijaludhi/hangman",
    },
  
  ];
  
  export { projects };