import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from '@apollo/client';

import { api } from '@services';
import { useMounted } from '@hooks';

import { Container } from '@components/Layouts';

import 'styles/inter.css';
import 'styles/main.css';
import { Sidebar } from '@components/Overlay';

const AppContent = ({ Component, pageProps }: AppProps): JSX.Element => {
  const mounted = useMounted();

  if (!mounted) {
    return <></>;
  }

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Container gap={0} style={{ minHeight: '100vh' }}>
        <Container row gap={0} align="stretch">
          <Container gap={0} style={{ minWidth: '300px', maxWidth: '350px' }}>
            <Sidebar />
          </Container>
          <Container>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </Container>
        </Container>
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
