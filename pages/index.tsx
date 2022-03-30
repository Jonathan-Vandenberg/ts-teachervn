import type { NextPage } from 'next'
import Head from 'next/head'
import StickyFooter from '../components/layout/footer'
import DenseAppBar from '../components/layout/header'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
      <DenseAppBar/>
      <StickyFooter/>
    </>
  )
}

export default Home
