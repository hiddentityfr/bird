import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjIwMzc4OTgsImp0aSI6IjU5ZGExY2RiLWUzZjctNDUyZi04ZWM1LTliMjczOTM2MmQ4ZCIsInVzZXJfaWQiOiJjN2M0OGZlNS0zNDE4LTQ2MWItYjUyMy1mMzBhYWY1NWRlNjQiLCJ1c2VyX3R5cGUiOiJDb21wYW55IiwiVG9rZW5UeXBlIjowfQ.0FXuSfD5a09lvxR-H6QpmRsiHqrHZU8-BAXKFgkwhbs';

const httpLink = createHttpLink({
  uri: 'http://api.hiddentity.fr/query',
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
  defaultOptions: {
    watchQuery: { fetchPolicy: 'cache-and-network' },
  },
});

export default client;
