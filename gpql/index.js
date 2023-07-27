import {
  ApolloClient,
  InMemoryCache,
  HttpLink
} from "@apollo/client";
import fetch from 'cross-fetch';

export const POKEAPI_URI = 'https://graphql-pokeapi.graphcdn.app';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: POKEAPI_URI,
    fetch
  }),
  cache: new InMemoryCache({
    addTypename: false
  }),
});
