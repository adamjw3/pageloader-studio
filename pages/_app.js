import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { Seo } from '../helpers/seo.config';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <>
            <DefaultSeo {...Seo} />
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence exitBeforeEnter>
                    <Component {...pageProps} key={router.asPath} />
                </AnimatePresence>
            </AnimateSharedLayout>
        </>
    );
}

export default MyApp;
