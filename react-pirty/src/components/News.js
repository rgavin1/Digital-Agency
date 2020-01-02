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
            <img src={Article1}  />
            <img src={Article2}  />
            <img src={Article3}  />
            <img src={Article4}  />
            <img src={Article5}  />
            <img src={Article6}  />
        </div>
    )
}

export default News;