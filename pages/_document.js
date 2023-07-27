import { SITE_URL } from 'config/variable'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='application-name' content='Pokemon Pedia' />
        <meta name='description' content='Pokemon App' />
        <meta name='theme-color' content='#EE4240' />
        <meta name="google-site-verification" content="google-site-verification=DIEh3YWu-FtFirQqnN03nHQNMhHErMv78l4_e2WV_AY" />
        <link rel="canonical" href={SITE_URL} />
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