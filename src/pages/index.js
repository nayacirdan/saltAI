import Head from 'next/head'
import PageLayout from '@/components/PageLayout/PageLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Salt AI</title>
        <meta content='A new economic primitive for funding decentralized AI' name='description'/>
        <meta content='width=device-width, initial-scale=1' name='viewport'/>
        <link href='/favicon.ico' rel='icon'/>
        <link crossOrigin='anonymous'
          href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
          integrity='sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=='
          referrerpolicy='no-referrer'
          rel='stylesheet'/>
      </Head>
      <PageLayout/>

    </>
  )
}
