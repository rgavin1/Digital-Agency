import React from 'react';
import Video from '../assets/Meeting2340.mp4';

const Hero = () => {
    return (
        <video src={Video} autoPlay preload="true" muted loop>
     
        </video>
    )
}

export default Hero;