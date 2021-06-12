import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://api.hiddentity.fr/query',
});

const authLink = setContext((_, context) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return context;
  }

  return {
    headers: {
      ...context.headers,
      authorization: `Bearer ${token.replaceAll('"', '')}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: { fetchPolicy: 'network-only' },
  },
});

export default client;
