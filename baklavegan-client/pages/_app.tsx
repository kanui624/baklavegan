// React Redux
import { Provider } from 'react-redux';

// Store
import store from '../redux/store';

// Global Components
import BVCanvas from '../components/baklavegan-menu/BVCanvas';

// Next Types
import type { AppProps } from 'next/app';

// Global Styles
import '../styles/globals.scss';
import '../styles/tailwind.css';

const Baklavegan = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <BVCanvas />
      <Component {...pageProps} />
    </Provider>
  );
};

export default Baklavegan;
