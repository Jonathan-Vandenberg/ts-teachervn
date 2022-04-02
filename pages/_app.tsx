import React from "react";
import StickyFooter from "../components/layout/footer";
import ResponsiveAppBar from "../components/layout/header";
import '../styles/globals.scss';

import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (<>
      <ResponsiveAppBar />
        <Component {...pageProps} />
      <StickyFooter />
    </>)
}
