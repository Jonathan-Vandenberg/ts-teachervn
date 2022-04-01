import React from "react";
import StickyFooter from "../components/layout/footer";
import ResponsiveAppBar from "../components/layout/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ResponsiveAppBar />
      <Component {...pageProps} />
      <StickyFooter />
    </>
  );
}

export default MyApp;
