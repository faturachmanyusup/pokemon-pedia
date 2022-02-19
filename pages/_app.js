import { ApolloProvider } from '@apollo/client';
import { client } from 'gpql';
import 'styles/global.css'
import Header from 'components/header';
import { Provider } from 'store';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider>
        <Header />
        <Component {...pageProps} />
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
