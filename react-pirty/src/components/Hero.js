import React from 'react';
import Video from '../assets/Meeting2340.mp4';

const Hero = () => {
    return (
        <div className="video-container">
            <video src={Video} autoPlay preload="true" muted loop></video>
            <div className="video-overlay">
                <div className="video-content">
                A dream doesn't become reality through magic; it takes sweat, determination and hard work.
                </div>
            </div>
        </div>
    )
}

export default Hero;