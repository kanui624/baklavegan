// Next Types
import type { AppProps } from 'next/app';

// Global Styles
import '../styles/globals.scss';
import '../styles/tailwind.css';

// Global Components
import BVCanvas from '../components/baklavegan-menu/BVCanvas';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
