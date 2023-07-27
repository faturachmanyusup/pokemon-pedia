import { SITE_URL } from "config/variable"
import Head from "next/head"

export const SEO = (props) => {
  return (
    <Head>
      <title>{props.title || ''}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={`${SITE_URL}${props.path || ''}`}  />
      <meta name="description" content={props.description || ''} />
    </Head>
  )
}