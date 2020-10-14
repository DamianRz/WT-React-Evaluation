import React from 'react';
import { useScreenSize } from '../../hooks/useScreenSize';
import '../../theme/theme.scss';
import './articles-box.scss';
import './articles-box-mobile.scss';

export const ArticlesBox = ({ items, title, className }) => {

    // Use hook for get the screen size
    const screenSize = useScreenSize();
    const articleWidth = 240; // padding: 40px

    // Article item 
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

    {
        /* Create table content 
        structure: trItems[tdItems[]]

        Calculate the the available space for insert Article component.
        */
    }
    const createTableContent = () => {
        let structure = [[]];
        let index = -1;

        items.map((article) => {
            if (index < Math.floor(screenSize.size.width / articleWidth - 1)) {
                index++;
                structure[structure.length - 1].push(
                    <td>
                        <Article
                            img={article.img}
                            title={article.title}
                            info={article.info}
                        />
                    </td>
                )
            } else {
                index = 0;
                structure.push(
                    [<td>
                        <Article
                            img={article.img}
                            title={article.title}
                            info={article.info}
                        />
                    </td>]
                )
            }
        })

        return structure.map(trItem => {
            return (
                <tr>
                    {trItem.map((tdItem, i) => {
                        return tdItem
                    })}
                </tr>
            )
        })
    }

    return (
        <div className={`articles-box ${className}`}>
            {title && <p className="title theme-text">{title}</p>}
            <div className="articles">

                <table>
                    {createTableContent()}
                </table>

                {/* easy way, but have problems */}
                {/* {items.map(article => {
                    return (
                        <Article
                            img={article.img}
                            title={article.title}
                            info={article.info}
                        />
                    )
                })} */}
            </div>
        </div>
    );
}
