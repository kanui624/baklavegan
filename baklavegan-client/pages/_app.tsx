// React
import { FC } from 'react';

// Store
import { wrapper } from '../redux/store';

// Global Components
import Layout from '../components/1-layout/Layout';
import BVCanvas from '../components/0-navigation/BVCanvas';

// Next Types
import type { AppProps } from 'next/app';

// Global Styles
import '../styles/globals.scss';
import '../styles/tailwind.css';

const Baklavegan: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <BVCanvas />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(Baklavegan);
