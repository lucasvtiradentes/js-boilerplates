import { AppProps } from 'next/app'
import Head from 'next/head';
import favicon from '../../public/favicon.ico'
import '../styles/styles.css'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={favicon.src} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
