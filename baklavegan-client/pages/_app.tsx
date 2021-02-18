// Store
import { wrapper } from "../redux/store";

// Global Components
import Layout from "../components/1-layout/Layout";

// React Types
import { FC } from "react";

// Next Types
import type { AppProps } from "next/app";

//Third Party Styles
import "../styles/tailwind.css";

// Page Styles
import "../styles/6-contact-scss/0-contact.scss";
import "../styles/4-about-scss/0-about.scss";
import "../styles/3-baklava-scss/0-baklava.scss";
import "../styles/1-layout-scss/veiwinportrait.scss";

// Global Styles
import "../styles/globals.scss";

const BaklaVegan: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default wrapper.withRedux(BaklaVegan);
