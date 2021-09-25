import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import image1 from '../public/image-1.jpeg';
import image2 from '../public/image-2.jpeg';
import image3 from '../public/image-3.jpeg';
import image4 from '../public/image-4.jpeg';
import image5 from '../public/image-5.jpeg';

const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
        },
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: 'easeInOut',
            duration: 0.8,
        },
    },
};

const itemMain = {
    hidden: { opacity: 0, y: 200 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
        },
    },
};

const Loader = ({ setLoading }) => {
    return (
        <motion.div>
            <motion.div className="c-loader" variants={container} onAnimationComplete={() => setLoading(false)} initial="hidden" animate="show" exit="exit">
                <motion.div className="c-loader__imagecontainer1" variants={item}>
                    <Image src={image1} alt="Picture of the author" className="c-loader__image c-loader__image--1" />
                </motion.div>
                <motion.div className="c-loader__imagecontainer2" variants={itemMain}>
                    <motion.img src="image-2.jpeg" layoutId="main-image-1" alt="Picture of the author" className="c-loader__image c-loader__image--2" />
                </motion.div>
                <motion.div className="c-loader__imagecontainer3" variants={item}>
                    <Image src={image3} alt="Picture of the author" className="c-loader__image c-loader__image--3" />
                </motion.div>
                <motion.div className="c-loader__imagecontainer4" variants={item}>
                    <Image src={image4} alt="Picture of the author" className="c-loader__image c-loader__image--4" />
                </motion.div>
                <motion.div className="c-loader__imagecontainer5" variants={item}>
                    <Image src={image5} alt="Picture of the author" className="c-loader__image c-loader__image5" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
