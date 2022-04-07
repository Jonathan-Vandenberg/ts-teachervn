import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from "next/app";
import React from "react";
import StickyFooter from "../components/layout/footer";
import ResponsiveAppBar from "../components/layout/header";
import "../styles/globals.scss";
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps: { session, ...pageProps }}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={createTheme(theme)}>
          <ResponsiveAppBar />
            <Component {...pageProps} />
          <StickyFooter />
      </ThemeProvider>
    </SessionProvider>
  );
}
