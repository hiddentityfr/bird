import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { api } from '@services';
import { useMounted } from '@hooks';

import { Container } from '@components/Layouts';

import 'styles/inter.css';
import 'styles/main.css';

const AppContent = ({ Component, pageProps }: AppProps): JSX.Element => {
  const mounted = useMounted();

  if (!mounted) {
    return <></>;
  }

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Container gap={0} style={{ minHeight: '100vh' }}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
};

const App = (props: AppProps): JSX.Element => {
  return (
    <ApolloProvider client={api.client}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <AppContent {...props} />
    </ApolloProvider>
  );
};

export default App;
