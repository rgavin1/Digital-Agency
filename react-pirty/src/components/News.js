import React from 'react';
import Article1 from '../assets/News/code-1076536_640.jpg';
import Article2 from '../assets/News/deer-3275594_640.jpg';
import Article3 from '../assets/News/laptop-2838921_640.jpg';
import Article4 from '../assets/News/pixabay-3951079_640.png';
import Article5 from '../assets/News/tablet-314153_640.png';
import Article6 from '../assets/News/wordpress-581849_640.jpg';

const News = () => {
    return (
        <div>
            <h1>Latest News</h1>
            <div className="news-container">
            <div className="news-card">
                <img alt=""  className="news-articles" src={Article1}  />
                <div className="news-content">
                <div className="news-wrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="news-title">Lorem</div>
                </div>
            </div>
            <div className="news-card">
                <img alt=""  className="news-articles" src={Article2}  />
                <div className="news-content">
                    <div className="news-wrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="news-title">Lorem</div>
                </div>
            </div>
            <div className="news-card">
                <img alt=""  className="news-articles" src={Article3}  />
                <div className="news-content">
                <div className="news-wrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="news-title">Lorem</div>
                </div>
            </div>
            <div className="news-card">
                <img alt=""  className="news-articles" src={Article4}  />
                <div className="news-content">
                <div className="news-wrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="news-title">Lorem</div>
                </div>
            </div>
            <div className="news-card">
                <img alt=""  className="news-articles" src={Article5}  />
                <div className="news-content">
                <div className="news-wrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="news-title">Lorem</div>
                </div>
            </div>
            <div className="news-card">
                <img alt=""  className="news-articles" src={Article6}  />
                <div className="news-content">
                <div className="news-wrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="news-title">Lorem</div>
                </div>
            </div>
            </div>
        </div>

    )
}

export default News;