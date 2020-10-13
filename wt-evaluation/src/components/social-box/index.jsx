import React from 'react';
import PropTypes from 'prop-types';
import './social-box.scss';
import '../../theme/theme.scss';

export const SocialBox = ({ title, socialItems }) => {
    return (
        <div className="social-box">
            {title && <p className="title theme-text">{title}</p>}

            {socialItems.map(social => {
                return (
                    <a href={social.url}>
                        <div className="social-icon">{social.icon}</div>
                    </a>
                )
            })}
        </div>
    );
}

SocialBox.propTypes = {
    message: PropTypes.string,
    items: PropTypes.array
}