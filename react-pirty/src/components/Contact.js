import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import Image from '../assets/chairs-2181960_1280.jpg';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contact</h1>
            <div className="connect-container">
            <div className="contact-connect">
                <h2>Connect</h2>
                <span>(123) 432-5621</span>
                <span>sales@prity.com</span>
                <span>media@prity.com</span>
                <div className="contact-social-media">
                    <span><FontAwesomeIcon icon={faFacebookF} /></span>
                    <span><FontAwesomeIcon icon={faInstagram} /></span>
                    <span><FontAwesomeIcon icon={faTwitter} /></span>
                    <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                    <span><FontAwesomeIcon icon={faGithubAlt} /></span>
                </div>
            </div>
            <div className="contact-address">
            <div className="address">
                <h2>Seattle</h2>
                <div className="address">1234 Seattle Drive, Seattle, Washingtion, 12345</div>
                <div className="address more-info">More Info</div>
            </div>
            <div className="address">
                <h2>Denver</h2>
                <div className="address">1234 Denver Drive, Denver, Colorado, 12345</div>
                <div className="address more-info">More Info</div>
            </div>
            <div className="address">
                <h2>San Francisco</h2>
                <div className="address">1234 San Francisco Drive, San Francisco, California, 12345</div>
                <div className="address more-info">More Info</div>
            </div>
            </div>
            </div>
            <img alt="" src={Image} />
        </div>
    )
}

export default Contact;
