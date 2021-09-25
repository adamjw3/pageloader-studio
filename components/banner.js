import React from 'react';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1,
        },
    },
};

const letterAni = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
        },
    },
};
function Banner() {
    return (
        <>
            <div className="c-banner__top">
                <div className="c-banner__brand">
                    <motion.h1 className="c-banner__brand-heading" variants={banner} initial="initial" animate="animate">
                        <motion.span className="c-banner__brand-letter" variants={letterAni}>
                            b
                        </motion.span>
                        <motion.span className="c-banner__brand-letter" variants={letterAni}>
                            r
                        </motion.span>
                        <motion.span className="c-banner__brand-letter" variants={letterAni}>
                            a
                        </motion.span>
                        <motion.span className="c-banner__brand-letter" variants={letterAni}>
                            n
                        </motion.span>
                        <motion.span className="c-banner__brand-letter" variants={letterAni}>
                            d
                        </motion.span>
                    </motion.h1>
                </div>
                <motion.div
                    className="c-banner__intro"
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        delay: 0.4,
                    }}
                >
                    We are specialised in setting up the foundation of your brand and setting you up for success.
                </motion.div>
            </div>
            <div className="c-banner__middle">
                <div className="c-banner__experience">
                    <Marquee gradient={false} speed={200} style={{ overflowY: 'hidden' }}>
                        <motion.h1 className="c-brand__experience-heading" variants={banner} initial="initial" animate="animate">
                            <motion.span className="c-banner__experience-letter" variants={letterAni}>
                                e
                            </motion.span>
                            <motion.span className="c-banner__experience-letter" variants={letterAni}>
                                x
                            </motion.span>
                            <motion.span className="c-banner__experience-letter" variants={letterAni}>
                                p
                            </motion.span>
                            <motion.span className="c-banner__experience-letter" variants={letterAni}>
                                e
                            </motion.span>
                            <motion.span className="c-banner__experience-letter" variants={letterAni}>
                                r
                            </motion.span>
                            <motion.span className="c-banner__experience-letter" variants={letterAni}>
                                i
                            </motion.span>
                            <motion.span className="c-banner__experience-letter" variants={letterAni}>
                                e
                            </motion.span>
                            <motion.span className="c-banner__experience-letter" variants={letterAni}>
                                n
                            </motion.span>
                            <motion.span className="c-banner__experience-letter" variants={letterAni}>
                                c
                            </motion.span>
                            <motion.span className="c-banner__experience-letter" variants={letterAni}>
                                e
                            </motion.span>
                        </motion.h1>
                    </Marquee>
                </div>
            </div>
            <div className="c-banner__bottom">
                <motion.div className="c-banner__scroll" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}>
                    <motion.div
                        className="c-banner__scroll-inner"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            ease: 'easeInOut',
                            duration: 1,
                            delay: 1.8,
                        }}
                    >
                        scroll down
                    </motion.div>
                </motion.div>
                <div className="c-banner__studio">
                    <motion.h1 className="c-banner__studio-heading" variants={banner} initial="initial" animate="animate">
                        <motion.span className="c-banner__studio-letter" variants={letterAni}>
                            s
                        </motion.span>
                        <motion.span className="c-banner__studio-letter" variants={letterAni}>
                            t
                        </motion.span>
                        <motion.span className="c-banner__studio-letter" variants={letterAni}>
                            u
                        </motion.span>
                        <motion.span className="c-banner__studio-letter" variants={letterAni}>
                            d
                        </motion.span>
                        <motion.span className="c-banner__studio-letter" variants={letterAni}>
                            i
                        </motion.span>
                        <motion.span className="c-banner__studio-letter" variants={letterAni}>
                            o
                        </motion.span>
                    </motion.h1>
                </div>
            </div>
        </>
    );
}

export default Banner;
