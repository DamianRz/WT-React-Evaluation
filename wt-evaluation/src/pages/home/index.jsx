import React from 'react';
import { Toolbar } from '../../components/toolbar';
import { SocialBox } from '../../components/social-box';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { ProductSlider } from '../../components/product-slider';
import { ArticlesBox } from '../../components/articles-box';
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

    const articlesList = [
        {
            img: '',
            title: 'Lorem ipsum',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            img: '',
            title: 'Lorem ipsum, sit amet, consetetur',
            info: 'Nibh mauris cursus mattis molestie a. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.'
        },
        {
            img: '',
            title: 'Lorem ipsum, sit amet, consetetur',
            info: 'Nibh mauris cursus mattis molestie a. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.'
        },
        {
            img: '',
            title: 'Lorem ipsum',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est. Viverra aliquet eget sit amet tellus cras adipiscing. '
        },
        {
            img: '',
            title: 'Lorem ipsum',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est. Viverra aliquet eget sit amet tellus cras adipiscing. '
        },
        {
            img: '',
            title: 'Lorem ipsum, sit amet, consetetur',
            info: 'Nibh mauris cursus mattis molestie a. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Amet commodo nulla facilisi nullam vehicula ipsum. Aliquet sagittis id consectetur purus ut. Aliquam purus sit amet luctus venenatis lectus magna. '
        },
        {
            img: '',
            title: 'Lorem ipsum, sit amet, consetetur',
            info: 'Nibh mauris cursus mattis molestie a. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Amet commodo nulla facilisi nullam vehicula ipsum. Aliquet sagittis id consectetur purus ut. Aliquam purus sit amet luctus venenatis lectus magna. '
        },
        {
            img: '',
            title: 'Lorem ipsum',
            info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ornare lectus sit amet est. Viverra aliquet eget sit amet tellus cras adipiscing. '
        },
    ]



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

            <ArticlesBox
                title="Últimos Articulos"
                className="articles-box"
                items={articlesList}
            />

        </div>
    )
}
