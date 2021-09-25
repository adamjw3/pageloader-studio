import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import heroPic from '../public/image-2.jpeg';

function Hero() {
    return (
        <div className="c-hero">
            <motion.img src="image-2.jpeg" layoutId="main-image-1" alt="Picture of the author" className="c-hero__image" />
        </div>
    );
}

export default Hero;
