import "../styles/Projects.css";
import Typewriter from 'typewriter-effect';

const Intro = () => {
    return (
        <div id="project">
            <div className="project-container">

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
