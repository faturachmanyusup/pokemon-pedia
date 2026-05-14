import { SITE_URL } from 'config/variable';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO = (props: SEOProps): JSX.Element => {
  return (
    <Head>
      <title>{props.title || ''}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={`${SITE_URL}/pokemon`}  />
      <meta name="description" content={props.description || ''} />
      <meta name="google-site-verification" content="ukQV3uEuJQsAMgot1NKex8GlljENmVz__jczChQUmUw" />
      <link rel='manifest' href='/manifest.json' />
    </Head>
  );
};
