// Store
import { wrapper } from '../redux/store';

// React Use Measure
import useMeasure from 'react-use-measure';

// Resize Observer
import { ResizeObserver } from '@juggle/resize-observer';

// Global Components
import Layout from '../components/1-layout/Layout';

// React Types
import { FC } from 'react';

// Next Types
import type { AppProps } from 'next/app';

// Global Styles
import '../styles/globals.scss';
import '../styles/tailwind.css';

// Page Styles
import '../styles/Pages/4-conact-scss/0-contact.scss';

const BaklaVegan: FC<AppProps> = ({ Component, pageProps }) => {
  const [measure, bounds] = useMeasure({ polyfill: ResizeObserver });
  return (
    <Layout>
      <Component ref={measure} {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(BaklaVegan);
