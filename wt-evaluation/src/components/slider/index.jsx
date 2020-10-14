import React from 'react';
import SlickSlider from 'react-slick';
import './slider.scss';

export const Slider = ({ steps, className }) => {
    const defaultConf = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <SlickSlider
            className={`slider ${className}`}
            {...defaultConf}
        >
            {steps}
        </SlickSlider>
    );
}