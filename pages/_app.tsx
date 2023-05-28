import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Page from '@/components/Page'

import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return <Page>
    <Head>
      <title>Tiency</title>
      <meta></meta>
    </Head>
    <Component {...pageProps} /> 
    </Page>
}
