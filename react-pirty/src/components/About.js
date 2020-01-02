import React from 'react';
import Teamwork1  from '../assets/student-849824_1280.jpg';
import Teamwork2  from '../assets/workplace-1245776_1280.jpg';
import Teamwork3  from '../assets/people-2557396_1280.jpg';
import Teamwork4  from '../assets/entrepreneur-593358_1280.jpg';
import { Controller, Scene } from 'react-scrollmagic';

const About = () => {
    return (
        <div>
            <div className="about-introduction">
            "Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results." --Andrew Carnegie
            </div>
            <div className="about-team-container">
                <Controller>
                    <Scene classToggle={['.img-one', 'fade-bottom']} reverse={false} >
                        <img className="img-one" src={Teamwork1} alt="" />
                    </Scene>
                    <Scene classToggle={['.img-two', 'fade-bottom']} reverse={false} >
                        <img className="img-two" src={Teamwork2} alt="" />
                    </Scene>
                    <Scene classToggle={['.img-three', 'fade-bottom']} reverse={false} >
                        <img className="img-three" src={Teamwork3} alt="" />
                    </Scene>
                    <Scene classToggle={['.img-four', 'fade-bottom']} reverse={false} >
                        <img className="img-four" src={Teamwork4} alt="" />
                    </Scene>
                </Controller>
            </div>
            <Controller>
                <Scene reverse={false} classToggle={['.about-qoute', 'fade-bottom']} >
                    <div className="about-last">
                        <div className="about-qoute">
                            "What we do flows from who we are." ~ Charles Colson
                        </div>
                    </div>
                </Scene>
            </Controller>
        </div>
    )
}

export default About;