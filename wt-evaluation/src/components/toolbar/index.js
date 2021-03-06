import React from 'react';
import './toolbar.scss';
import '../../theme/theme.scss';

export const Toolbar = ({ title, rightContent, className }) => {
    return (
        <div className={`toolbar ${className}`}>
            <div className="left-box">
                {title && <p className="title theme-text">{title}</p>}
            </div>
            <div className="right-box">
                {rightContent}
            </div>
        </div>
    )
}
