import React from 'react';
import './toolbar.scss';

export const Toolbar = ({ title }) => {
    return (
        <div className="toolbar">
            <div className="left-box">
                {title && <p>{title}</p>}
            </div>
            <div className="right-box">
            </div>
        </div>
    )
}
