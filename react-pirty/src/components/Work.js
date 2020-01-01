import React from 'react';
import '../styles/sass/Work.scss';
import Site1 from '../assets/alcohol-1961542_1280.jpg';
import Site2 from '../assets/balance-110850_1280.jpg';
import Site3 from '../assets/concert-768722_1280.jpg';
import Site4 from '../assets/buildings-1851246_1280.jpg';
import Site5 from '../assets/girl-1990347_1280.jpg';
import Site6 from '../assets/shoes-1245920_1280.jpg';
import Site7 from '../assets/three-3075752_1280.jpg';
import Site8 from '../assets/training-828741_1280.jpg';
import { Controller, Scene } from 'react-scrollmagic';

const Work = () => {
    return (
        <div className="works-container">
            <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene classToggle={['.card-content', 'fade-in']} duration={400} pin>
            <div className="card">
                <img src={Site1} alt="" />
                <div className="card-content">
                    <h1>Scotch Old Enough to buy its own scotch</h1>
                    <h4>Blackkeg</h4>
                </div>
            </div>
            </Scene>
            <Scene classToggle={['.card-content', 'fade-in']} duration={400} pin>
            <div className="card">
                <img src={Site2} alt="" className="balance" />
                <div className="card-content">
                    <h1>The beautiful balance between mind, body, and soul</h1>
                    <h4>Harmuny</h4>
                </div>
            </div>
            </Scene>
            <Scene classToggle={['.card-content', 'fade-in']} duration={400} pin>
            <div className="card">
                <img src={Site3} alt="" />
                <div className="card-content">
                    <h1>Where memories are created</h1>
                    <h4>Festiv</h4>
                </div>
            </div>
            </Scene>
            <Scene classToggle={['.card-content', 'fade-in']} duration={400} pin>
            <div className="card">
                <img src={Site4} alt="" />
                <div className="card-content">
                    <h1>Life is too short to drive boring cars</h1>
                    <h4>Downforc</h4>
                </div>
            </div>
            </Scene>
            <Scene classToggle={['.card-content', 'fade-in']} duration={400} pin>
            <div className="card">
                <img src={Site5} alt="" />
                <div className="card-content">
                    <h1>Live. Love. Music.</h1>
                    <h4>Vybes</h4>
                </div>
            </div>
            </Scene>
            <Scene classToggle={['.card-content', 'fade-in']} duration={400} pin>
            <div className="card">
                <img src={Site6} alt="" />
                <div className="card-content">
                    <h1>Nice Kicks</h1>
                    <h4>Shuelace</h4>
                </div>
            </div>
            </Scene>
            <Scene classToggle={['.card-content', 'fade-in']} duration={400} pin>
            <div className="card">
                <img className="set-image" src={Site7} alt="" />
                <div className="card-content">
                    <h1>Dress for it</h1>
                    <h4>Katherine & Karen</h4>
                </div>
            </div>
            </Scene>
            <Scene classToggle={['.card-content', 'fade-in']} duration={400} pin>
            <div className="card">
                <img src={Site8} alt="" />
                <div className="card-content">
                    <h1>Dare to be great</h1>
                    <h4>ChampX</h4>
                </div>
            </div>
            </Scene>
            <Scene classToggle={['.last-slide', 'fade-up']}>
                <div  className="last">
                    <div className="last-slide">
                    “Do not go where the path may lead, go instead where there is no path and leave a trail.” - <span>Robert Frost</span>
                    </div>
                </div>
            </Scene>
            </Controller>
        </div>
    )
}

export default Work;
