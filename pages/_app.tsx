import { CssBaseline } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import StickyFooter from "../components/layout/footer";
import Header from "../components/layout/header";
import "../styles/globals.scss";
import theme from "../styles/theme";

export default function MyApp({
  Component,
  pageProps: { data: status, session, ...pageProps },
}: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <SessionProvider session={session}>
          <ThemeProvider theme={createTheme(theme)}>
            <CssBaseline />
            <Header />
            <Component {...pageProps} />
            <StickyFooter />
          </ThemeProvider>
        </SessionProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}
