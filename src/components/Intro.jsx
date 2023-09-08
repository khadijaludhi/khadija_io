import React from "react";
import "../styles/Intro.css";

const Intro = () => {
   const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

   React.useEffect(() => {
       const handleResize = () => setWindowWidth(window.innerWidth);

       window.addEventListener('resize', handleResize);

       return () => {
           window.removeEventListener('resize', handleResize);
       };
   }, []);

   return (
       <div id="intro">
           <div className="intro-container">
               <div className="dialogue">hey there,</div>
               <span className="dialogue">
                   <span className="intro-name">khadija</span>
                   {" here :)"}
               </span>
           </div>
       </div>
   );
};


export default Intro;


