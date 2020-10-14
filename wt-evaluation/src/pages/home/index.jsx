import React from 'react';
import { Toolbar } from '../../components/toolbar';
import { SocialBox } from '../../components/social-box';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ProductSlider } from '../../components/product-slider';
import './home.scss';
import './home-mobile.scss';

export const Home = () => {
    const socialBoxData = {
        title: 'SEGUÍ CONECTADO',
        networks: [
            {
                icon: <FaFacebookF />,
                url: 'http://www.facebook.com/WundermanThompson'
            },
            {
                icon: <FaInstagram />,
                url: 'https://www.instagram.com/wunthompson/?hl=es-la'
            }
        ]
    }

    return (
        <div className="home-page">

            <Toolbar
                title="Landing Page"
                className="home-toolbar"
                rightContent={
                    <SocialBox
                        className="social-box"
                        title={socialBoxData.title}
                        socialItems={socialBoxData.networks} />
                }
            />

            <ProductSlider />
        </div>
    )
}
