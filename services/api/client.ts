import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjAyMDA1MzksImp0aSI6ImQ1M2ZlOWIxLTkyZTUtNDExNC05MTY1LTQ4ZWZjNzUxYzNmZCIsInVzZXJfaWQiOiJjN2M0OGZlNS0zNDE4LTQ2MWItYjUyMy1mMzBhYWY1NWRlNjQiLCJ1c2VyX3R5cGUiOiJDb21wYW55IiwiVG9rZW5UeXBlIjowfQ.yfcglQcOfj9297Z4k_4Te-IbDYlcQnqzegucJ4dbybc';

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
});

export default client;
