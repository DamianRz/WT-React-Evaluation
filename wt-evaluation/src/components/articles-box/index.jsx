import React from 'react';
import '../../theme/theme.scss';
import './articles-box.scss';
import './articles-box-mobile.scss';

export const ArticlesBox = ({ items, title, className }) => {

    const Article = ({ img, title, info }) => {
        return (
            <div className="article">
                <div className="article-img">
                    <img src={img} alt="" />
                </div>
                <p className="article-title theme-text">{title}</p>
                <p className="article-info theme-text">{info}</p>
            </div>
        )
    }

    return (
        <div className={`articles-box ${className}`}>
            {title && <p className="title theme-text">{title}</p>}
            <div className="articles">

                {items.map(article => {
                    return (
                        <Article
                            img={article.img}
                            title={article.title}
                            info={article.info}
                        />
                    )
                })}
            </div>
        </div>
    );
}