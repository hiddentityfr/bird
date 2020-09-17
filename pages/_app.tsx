import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { useMounted } from '@hooks';

import 'styles/inter.css';
import 'styles/main.css';

const AppContent = ({ Component, pageProps }: AppProps): JSX.Element => {
  const mounted = useMounted();

  if (!mounted) {
    return <></>;
  }

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

const App = (props: AppProps): JSX.Element => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AppContent {...props} />;
};

export default App;
