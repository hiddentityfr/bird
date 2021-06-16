import React from 'react';

import Head from 'next/head';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider, useLazyQuery } from '@apollo/client';

import { api } from '@services';
import { useLocalStorage, useMounted } from '@hooks';
import { CompanyResponse } from '@typings/Company';

import { Container } from '@components/Layouts';
import { Sidebar } from '@components/Overlays';

import { AuthActions, AuthProvider, useAuth } from '@contexts/AuthContext';

import 'styles/inter.css';
import 'styles/main.css';
import Loader from 'react-loader-spinner';

const AppContent = ({ Component, pageProps }: AppProps): JSX.Element => {
  const mounted = useMounted();
  const router = useRouter();
  const [{ company, token }, dispatch] = useAuth();
  const [storedToken] = useLocalStorage<string | null>('token', null);

  const [appReady, setAppReady] = React.useState(false);

  const [getCompany] = useLazyQuery<CompanyResponse>(
    api.company.queries.company,
    {
      onCompleted: (data) => {
        dispatch({
          type: AuthActions.UPDATE_COMPANY,
          props: { company: data.company },
        });
        setAppReady(true);
      },
      onError: () => {
        dispatch({
          type: AuthActions.UPDATE_TOKEN,
          props: { token: null },
        });
        router.replace('/login').then(() => setAppReady(true));
      },
    }
  );

  React.useEffect(() => {
    if (!token && storedToken) {
      dispatch({
        type: AuthActions.UPDATE_TOKEN,
        props: { token: storedToken },
      });
    } else if (router.route === '/register') {
      setAppReady(true);
    } else if (!token && !appReady) {
      router.replace('/login').then(() => setAppReady(true));
    }
  }, [appReady, dispatch, router, storedToken, token]);

  React.useEffect(() => {
    if (!company && mounted && token) {
      getCompany();
    }
  }, [company, getCompany, mounted, token]);

  if (!mounted) {
    return <></>;
  }

  if (!company && !appReady) {
    return (
      <Container justify="center" align="center">
        <div style={{ transform: 'scale(0.5)' }}>
          <Loader color="#000" width={100} height={100} type="ThreeDots" />
        </div>
      </Container>
    );
  }

  if (router.route === '/' && appReady) {
    router.replace('/home');
    return <></>;
  }

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Container gap={0} style={{ minHeight: '100vh' }}>
        <Container row gap={0} align="stretch" noWrap>
          {!['/login', '/register'].includes(router.route) && (
            <Container gap={0} style={{ minWidth: '300px', maxWidth: '350px' }}>
              <Sidebar />
            </Container>
          )}
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
      <AuthProvider>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <AppContent {...props} />
      </AuthProvider>
    </ApolloProvider>
  );
};

export default App;
