import { Carousel } from 'antd';
import React from 'react';
const contentStyle = {
    height: '832px',
    textAlign: 'center',
    background: '#364d79',
};

const App = () => (
    <Carousel autoplay>
        <div style={contentStyle}>
            <img src="main.svg" alt="logo" width={'100%'}/>
        </div>
        <div style={contentStyle}>
            <img src="main.svg" alt="logo" width={'100%'}/>
        </div>
        <div style={contentStyle}>
            <img src="main.svg" alt="logo" width={'100%'}/>
        </div>
        <div style={contentStyle}>
            <img src="main.svg" alt="logo" width={'100%'}/>
        </div>
    </Carousel>
);

export default App;