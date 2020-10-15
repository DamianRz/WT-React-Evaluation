import React from 'react';
import { Slider } from '../slider';
import Paint1 from '../../paint-1.png';
import Paint2 from '../../paint-2.png';
import Paint3 from '../../paint-3.png';
import './product-slider.scss';
import './product-slider-mobile.scss';
import '../../theme/theme.scss';

export const ProductSlider = () => {
    const productsData = [
        {
            name: 'product one',
            price: 'U$S 89 .99 /mes',
            img: Paint1
        },
        {
            name: 'product two',
            price: 'U$S 99 .50 /mes',
            img: Paint2
        },
        {
            name: 'product three',
            price: 'U$S 99 .99 /mes',
            img: Paint3
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
                            className="buy-btn theme-button">COMPRAR</button>
                    </div>
                    <div className="right-box">
                        <img className={`paint-img`} src={img} alt="" />
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
        return productsData.map((product, i) => {
            return (
                <ProductStep
                    key={i}
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