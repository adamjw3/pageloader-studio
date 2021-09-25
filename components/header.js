import React from 'react';
import FancyLink from './fancylink';

function Header() {
    return (
        <div className="c-header">
            <div className="l-grid">
                <div className="c-header__inner">
                    <FancyLink destination="/" a11yText="text" label="Ollie" extraClasses="c-header__logo" />
                    <nav className="c-header__nav">
                        <ul className="c-header__nav-items">
                            <li className="c-header__nav-item">
                                <FancyLink destination="/" a11yText="text" label="Design" extraClasses="c-header__nav-link" />
                            </li>
                            <li className="c-header__nav-item">
                                <FancyLink destination="/about" a11yText="text" label="Strategy" extraClasses="c-header__nav-link" />
                            </li>
                            <li className="c-header__nav-item">
                                <FancyLink destination="/contact" a11yText="text" label="Cases" extraClasses="c-header__nav-link" />
                            </li>
                            <li className="c-header__nav-item">
                                <FancyLink destination="/contact" a11yText="text" label="About" extraClasses="c-header__nav-link" />
                            </li>
                            <li className="c-header__nav-item">
                                <FancyLink destination="/contact" a11yText="text" label="Why work with us" extraClasses="c-header__nav-link" />
                            </li>
                        </ul>
                    </nav>
                    <div className="c-header__contact">
                        <FancyLink destination="/contact" a11yText="text" label="Lets work together" extraClasses="c-header__contact-link" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
