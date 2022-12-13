import { Carousel } from 'antd';
import React from 'react';
import HomeImgs from "../../assets/images/homeImg.JPG"
import HomeImgsTwo from "../../assets/images/homeImg2.JPG"
import HomeImgsThree from "../../assets/images/homeImg3.JPG"
const contentStyle = {
    height: '832px',
    textAlign: 'center',
    background: '#364d79',
};

const App = () => (
    <Carousel autoplay>
        <div style={contentStyle}>
            <img src={HomeImgs} alt="logo" width={'100%'}/>
        </div>
        <div style={contentStyle}>
            <img src={HomeImgsTwo} alt="logo" width={'100%'}/>
        </div>
        <div style={contentStyle}>
            <img src={HomeImgsThree} alt="logo" width={'100%'}/>
        </div>
        <div style={contentStyle}>
            <img src="main.svg" alt="logo" width={'100%'}/>
        </div>
    </Carousel>
);

export default App;