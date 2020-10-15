import React from 'react';
import { useScreenSize } from '../../hooks/useScreenSize';
import '../../theme/theme.scss';
import './articles-box.scss';
import './articles-box-mobile.scss';

export const ArticlesBox = ({ items, title, className }) => {

    // Use hook for get the screen size
    const screenSize = useScreenSize();
    let articleWidth = screenSize.size.width > 576 ? 200 : (screenSize.size.width);

    // Article item 
    const Article = ({ img, title, info }) => {
        return (
            <div className="article" style={{ width: articleWidth }}>
                <div className="article-img">
                    <img src={img} alt="" />
                </div>
                <p className="article-title theme-text">{title}</p>
                <p className="article-info theme-text">{info}</p>
            </div>
        )
    }


    // Create table content 
    // structure: trItems[tdItems[]]
    // Calculate the the available space for insert Article component.

    const ArticlesTable = () => {
        let structure = [[]];
        let index = -1;

        items.map((article, i) => {
            if (index < Math.floor((screenSize.size.width / (articleWidth + 40)) - 1)) {
                index++;
                structure[structure.length - 1].push(
                    <td key={i}>
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
                    [<td key={i}>
                        <Article
                            img={article.img}
                            title={article.title}
                            info={article.info}
                        />
                    </td>]
                )
            }
            return null;
        });

        return (
            <table>
                <tbody>
                    {structure.map((trItem, i) => {
                        return (
                            <tr index={i} key={i}>
                                {trItem.map((tdItem, i) => {
                                    return tdItem
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    return (
        <div className={`articles-box ${className}`}>
            {title && <p className="title theme-text">{title}</p>}
            <div className="articles">
                <ArticlesTable />
            </div>
        </div>
    );
}
