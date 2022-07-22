import React from 'react';
import Style from './ArizonaHeader.css';

const ArizonaHeader = props => {
    return (
        <section style={Style} className='arizona-header bg-color-uared'>
            <div className="container">
                <a href="https://arizona.edu" rel="noreferrer" target="_blank">
                    <img className="logo" src='/azlogo/arizona-logo-white.svg' alt="University of Arizona Logo" />
                </a>
            </div>
        </section>
    )
}

export default ArizonaHeader;