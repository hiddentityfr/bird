import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

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
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AppContent {...props} />;
};

export default App;
