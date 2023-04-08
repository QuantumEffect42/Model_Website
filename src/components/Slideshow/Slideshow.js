import React from "react";
import { Slide } from "react-slideshow-image";

import "./Slideshow.css";

const properties = {
    duration: 5000,
    transitionDuration: 500,
    inifinte: true,
    indicators: true,
    arrows: true,
};

const Slideshow = () =>{
    return (
        <div className="slideContainer">
            <Slide {...properties}>
                <div className="slide1"></div>

                <div className="slide2"></div>

                <div className="slide3"></div>
            </Slide>
        </div>
    );
};

export default Slideshow