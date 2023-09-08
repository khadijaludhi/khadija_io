import "../styles/Intro.css";
import Lottie from 'lottie-react';
import Robot from "../assets/robotsayshi.json";
import Typewriter from 'typewriter-effect';

const Intro = () => {
    return (
        <div id="intro">
            <div className="intro-container">
                <div className="lottie-container">
                    <Lottie 
                        animationData={Robot}
                        loop={true}
                        autoPlay={true}
                        rendererSettings={{
                            preserveAspectRatio: 'xMidYMid slice'
                        }}
                    />
                </div>
                <div className="dialogue">
                    <Typewriter
                        options={{
                            delay: 85,  // Setting the speed to 90 milliseconds per character
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .typeString('<span class="intro-greeting">hey there,</span>')
                            .typeString('<br />')  // This adds a new line
                            .typeString('<span class="intro-name">Khadija</span> <span class="intro-greeting">here :)</span>')
                            .start();
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Intro;
