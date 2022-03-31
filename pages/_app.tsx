import React from 'react'
import StickyFooter from '../components/layout/footer'
import DenseAppBar from '../components/layout/header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DenseAppBar />
      <Component {...pageProps} />
      <StickyFooter />
    </>
  )
}

export default MyApp
