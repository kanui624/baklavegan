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
import '../styles/1-layout-scss/veiwinportrait.scss';
import '../styles/1-layout-scss/tempdevnote.scss';

//Third Party Styles
import '../styles/tailwind.css';

// Page Styles
import '../styles/2-index-scss/0-index.scss';
import '../styles/3-baklava-scss/0-baklava.scss';
import '../styles/4-about-scss/0-about.scss';
import '../styles/6-contact-scss/0-contact.scss';

const BaklaVegan: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(BaklaVegan);
