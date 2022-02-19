import Head from "next/head"

export const SEO = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" />
      <meta name="description" content={props.description} />
    </Head>
  )
}