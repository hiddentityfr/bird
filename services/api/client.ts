import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjAxNjczMzAsImp0aSI6ImJjMWUzMjk1LTg3ZmYtNGVjMS04Y2Q1LTkzYzQzY2UwOGRiYiIsInVzZXJfaWQiOiI4NTM3YTU3Ny1iOGQ1LTQ5NGMtYjM1Ny03NzRmYjUzZThhOGQiLCJ1c2VyX3R5cGUiOiJDb21wYW55IiwiVG9rZW5UeXBlIjowfQ.hWv4bAFBQYXp72pjsFRGUdQ4rNDBwlfoDtSsWl2k1Ao';

const httpLink = createHttpLink({
  uri: 'http://hazel.hiddentity.fr/query',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
