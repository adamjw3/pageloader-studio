import React from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import FancyLink from '../components/fancylink';
import { fade } from '../helpers/transitions';
import Layout from '../components/layout';
import Banner from '../components/banner';
import Hero from '../components/hero';

export default function Home() {
    return (
        <Layout>
            <NextSeo title="Home page" />
            <Banner />
            <Hero />
        </Layout>
    );
}
