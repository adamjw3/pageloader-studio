import React from 'react';
import FancyLink from './fancylink';
import { motion } from 'framer-motion';

function Header() {
    return (
        <motion.div
            className="c-header"
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: 'easeInOut',
                duration: 1,
                delay: 0.6,
            }}
        >
            <div className="l-grid">
                <div className="c-header__inner">
                    <FancyLink destination="/" a11yText="text" label="Varial" extraClasses="c-header__logo" />
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
        </motion.div>
    );
}

export default Header;
