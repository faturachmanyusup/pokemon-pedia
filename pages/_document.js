import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='application-name' content='Pokemon Pedia' />
        <meta name='description' content='Pokemon App' />
        <meta name='theme-color' content='#EE4240' />
        <link rel="canonical" href={process.env.NEXTAUTH_URL} />
        <link rel='apple-touch-icon' href='/assets/icons/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}