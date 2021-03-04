// Store
import { wrapper } from "../0-redux/store";

// Global Components
import Layout from "../1-components/1-layout/Layout";

// React Types
import { FC } from "react";

// Next Types
import type { AppProps } from "next/app";

// Global Styles
import "../4-styles/globals.scss";
import "../4-styles/1-layout-scss/veiwinportrait.scss";
import "../4-styles/1-layout-scss/tempdevnote.scss";

//Third Party Styles
import "../4-styles/tailwind.css";

// Page Styles
import "../4-styles/2-index-scss/0-index.scss";
import "../4-styles/3-baklava-scss/0-baklava.scss";
import "../4-styles/4-about-scss/0-about.scss";
import "../4-styles/6-contact-scss/0-contact.scss";

const BaklaVegan: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(BaklaVegan);
