import React from 'react';
import { Toolbar } from '../../components/toolbar';
import { SocialBox } from '../../components/social-box';
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './home.scss';

export const Home = () => {
    const socialBoxData = {
        title: 'SEGUÍ CONECTADO',
        networks: [
            {
                icon: <FaFacebook />,
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
                title="LandingPage"
                rightContent={
                    <SocialBox
                        title={socialBoxData.title}
                        socialItems={socialBoxData.networks} />
                }
            />
        </div>
    )
}
