import { ApolloClient, InMemoryCache } from '@apollo/client';

const token = '';

const client = new ApolloClient({
  uri: 'http://api.hiddentity.fr/query',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default client;
