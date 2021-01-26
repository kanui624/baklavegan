// Store
import { wrapper } from '../redux/store';

// Global Components
import Layout from '../components/1-layout/Layout';

// React Types
import { FC } from 'react';

// Next Types
import type { AppProps } from 'next/app';

// Global Styles
import '../styles/globals.scss';
import '../styles/Pages/4-conact-scss/contactinfo.scss';
import '../styles/tailwind.css';

const BaklaVegan: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(BaklaVegan);
