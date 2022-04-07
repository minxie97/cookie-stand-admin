import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="">

      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Main/>
      
      <Footer/>
      
    </div>
  )
}
