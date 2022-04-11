import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import StickyFooter from "../components/layout/footer";
import Header from "../components/layout/header";
import "../styles/globals.scss";
import theme from "../styles/theme";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
        <StickyFooter />
      </ThemeProvider>
    </SessionProvider>
  );
}
