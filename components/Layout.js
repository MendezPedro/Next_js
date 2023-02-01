
import Navbar from './Navbar'
import Head from 'next/head'
import Footer from './Footer'

export default function Layout({children,title,description}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar/>
      
      <div>
        <main>{children}</main>
      </div>

      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: "Next.js | desafío Latam",
  description: "Descripción de Desafío Latam",
};