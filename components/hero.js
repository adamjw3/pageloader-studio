import React from 'react';
import Image from 'next/image';
import heroPic from '../public/image-2.jpeg';

function Hero() {
    return (
        <div className="c-hero">
            <Image src={heroPic} alt="Picture of the author" className="c-hero__image" />
        </div>
    );
}

export default Hero;
