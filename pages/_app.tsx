import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import React from "react";
import StickyFooter from "../components/layout/footer";
import "../styles/globals.scss";
import theme from "../styles/theme";
import Header from "../components/layout/header";
import { CssBaseline } from "@material-ui/core";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <CssBaseline />
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
        <StickyFooter />
      </SessionProvider>
    </ThemeProvider>
  );
}
