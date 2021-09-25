import React from 'react';
import Marquee from 'react-fast-marquee';

function Banner() {
    return (
        <>
            <div className="c-banner__top">
                <div className="c-banner__brand">
                    <h1 className="c-banner__brand-heading">
                        <span className="c-banner__brand-letter">b</span>
                        <span className="c-banner__brand-letter">r</span>
                        <span className="c-banner__brand-letter">a</span>
                        <span className="c-banner__brand-letter">n</span>
                        <span className="c-banner__brand-letter">d</span>
                    </h1>
                </div>
                <div className="c-banner__intro">We are specialised in setting up the foundation of your brand and setting you up for success.</div>
            </div>
            <div className="c-banner__middle">
                <div className="c-banner__experience">
                    <Marquee gradient={false} speed={100} style={{ overflowY: 'hidden' }}>
                        <h1 className="c-brand__experience-heading">
                            <span className="c-banner__experience-letter">e</span>
                            <span className="c-banner__experience-letter">x</span>
                            <span className="c-banner__experience-letter">p</span>
                            <span className="c-banner__experience-letter">e</span>
                            <span className="c-banner__experience-letter">r</span>
                            <span className="c-banner__experience-letter">i</span>
                            <span className="c-banner__experience-letter">e</span>
                            <span className="c-banner__experience-letter">n</span>
                            <span className="c-banner__experience-letter">c</span>
                            <span className="c-banner__experience-letter">e</span>
                        </h1>
                    </Marquee>
                </div>
            </div>
            <div className="c-banner__bottom">
                <div className="c-banner__scroll">
                    <div className="c-banner__scroll-inner">scroll down</div>
                </div>
                <div className="c-banner__studio">
                    <h1 className="c-banner__studio-heading">
                        <span className="c-banner__studio-letter">s</span>
                        <span className="c-banner__studio-letter">t</span>
                        <span className="c-banner__studio-letter">u</span>
                        <span className="c-banner__studio-letter">d</span>
                        <span className="c-banner__studio-letter">i</span>
                        <span className="c-banner__studio-letter">o</span>
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Banner;
