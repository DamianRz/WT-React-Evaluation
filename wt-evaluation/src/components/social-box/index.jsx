import React from 'react';
import './social-box.scss';
import '../../theme/theme.scss';

export const SocialBox = ({ title, socialItems }) => {
    return (
        <div className="social-box">
            {title && <p className="title theme-text">{title}</p>}

            {socialItems.map((social, i) => {
                return (
                    <a href={social.url} key={i}>
                        <div className="social-icon">{social.icon}</div>
                    </a>
                )
            })}
        </div>
    );
}