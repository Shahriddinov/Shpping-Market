import React from 'react';
import Error from "../../assets/images/Ops.webp"
import "./style.scss"
const NotFound = () => {
    return (
        <div className="container">
            <img className="NotFound" src={Error} alt=""/>
            {/*<div className="NotFound">404 Not Found</div>*/}
            {/*<div className="connect"> Not internet connection or error</div>*/}
            
        </div>
    );
};

export default NotFound;