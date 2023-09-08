import "../styles/Intro.css";
import Lottie from 'lottie-react';
import Robot from "../assets/robotsayshi.json";

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
                    <span className="intro-greeting">hey there,</span>
                    <br />
                    <span className="intro-name">Khadija</span> <span className="intro-greeting">here :)</span>
                </div>
            </div>
        </div>
    );
};

export default Intro;
