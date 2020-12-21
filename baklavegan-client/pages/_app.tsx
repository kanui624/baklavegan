// Next Types
import type { AppProps } from 'next/app';

// Global Styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
