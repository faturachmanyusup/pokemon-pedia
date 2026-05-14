import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { client } from 'gpql';
import 'styles/global.css';
import Header from 'components/header';
import { Provider } from 'store';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  );
}

