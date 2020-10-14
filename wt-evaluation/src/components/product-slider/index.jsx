import React, { useState } from 'react';
import { Slider } from '../slider';
import Paint1 from '../../paint-1.png';
import './product-slider.scss';
import './product-slider-mobile.scss';
import '../../theme/theme.scss';

export const ProductSlider = () => {

    const [activeEffect, setActiveEffect] = useState(false);

    const productsData = [
        {
            name: 'product one',
            price: 'U$D 90 .99 /mes',
            img: ''
        },
        {
            name: 'product two',
            price: 'U$D 99 .50 /mes',
            img: ''
        },
        {
            name: 'product three',
            price: 'U$D 99 .99 /mes',
            img: ''
        }
    ]

    const ProductStep = ({ name, price, img }) => {
        return (
            <div className="product-step">
                <div className="product">
                    <div className="left-box">
                        <p className="name-1 theme-text">{name.split(' ')[0]}</p>
                        <p className="name-2 theme-text">{name.split(' ')[1]}</p>
                        <button
                            onMouseEnter={() => {
                                setActiveEffect(true)
                            }}
                            onMouseLeave={() => {
                                setActiveEffect(false)
                            }}
                            className="buy-btn">COMPRAR</button>
                    </div>
                    <div className="right-box">
                        <img className={`paint-img ${activeEffect && 'active'}`} src={Paint1} alt="" />
                        <div className="price-box">
                            <table>
                                <tr>
                                    <td className="usd-box">
                                        <p className="usd theme-text">{price.split(' ')[0]}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="price theme-text">{price.split(' ')[1]}</p>
                                    </td>
                                    <tr>
                                        <td className="cents-box"><p className="cents theme-text">{price.split(' ')[2]}</p></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p className="month theme-text">{price.split(' ')[3]}</p>
                                        </td>
                                    </tr>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const getProductsSteps = () => {
        return productsData.map(product => {
            return (
                <ProductStep
                    name={product.name}
                    price={product.price}
                    img={product.img} />
            )
        })
    }

    return (
        <div className="product-slider">
            <Slider className="slider" steps={getProductsSteps()} />
        </div>
    )
}