import React from 'react';
import Slider from 'react-slick';
import './carousel.scss';

export const Carousel = ({ steps }) => {
    const defaultConf = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...defaultConf} className="slider">
            {steps}
        </Slider>
    );
}