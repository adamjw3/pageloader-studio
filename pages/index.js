import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/layout';
import Banner from '../components/banner';
import Hero from '../components/hero';

export default function Home() {
    const [loading, setLoading] = useState(true);

    return (
        <Layout>
            <NextSeo title="Home page" />
            <Banner />
            <Hero />
        </Layout>
    );
}
