import Paper from '@material-ui/core/Paper';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import type { AppProps } from "next/app";
import React from "react";
import StickyFooter from "../components/layout/footer";
import ResponsiveAppBar from "../components/layout/header";
import "../styles/globals.scss";
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={createTheme(theme)}>
          <ResponsiveAppBar />
            <Component {...pageProps} />
          <StickyFooter />
      </ThemeProvider>
    </>
  );
}
