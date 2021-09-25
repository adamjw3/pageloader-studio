import React, { useState } from 'react';

import Header from './header';
import Footer from './footer';
import Loader from './loader';

const Layout = ({ children }) => {
    const [loading, setLoading] = useState(true);
    return (
        <>
            {loading ? (
                <Loader setLoading={setLoading} />
            ) : (
                <div className="l-grid l-grid-outter">
                    <Header />
                    {children}
                    <Footer />
                </div>
            )}
        </>
    );
};

export default Layout;
