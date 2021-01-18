import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.hiddentity.fr/',
  cache: new InMemoryCache(),
});

export default client;
