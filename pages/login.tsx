import * as React from 'react';

import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';

import { api } from '@services';
import { theme } from '@utils';
import { useLocalStorage } from '@hooks';

import Container from '@components/Layouts/Container';
import Text from '@components/DataDisplay/Text';
import { TextField, Button } from '@components/Inputs';
import { Logo } from '@components/Medias/Icons';

import { AuthActions, useAuth } from '@contexts/AuthContext';

type LoginResponse = {
  companyLogin: {
    token: string;
    refreshToken: string;
  };
};
type LoginVars = {
  input: {
    email: string;
    password: string;
  };
};

const Login = (): JSX.Element => {
  const [, dispatch] = useAuth();
  const [token, setToken] = useLocalStorage<string | null>('token', null);
  const router = useRouter();

  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [badUser, setBadUser] = React.useState<boolean>();
  const [errorMsg, setErrorMsg] = React.useState<string>();

  const handleEmail = (e: string) => {
    if (e != null) setEmail(e);
  };
  const handlePassword = (e: string) => {
    if (e != null) setPassword(e);
  };
  const [login] = useMutation<LoginResponse, LoginVars>(
    api.user.mutations.companyLogin,
    {
      onCompleted: (data) => {
        setToken(data.companyLogin.token);
        dispatch({
          type: AuthActions.UPDATE_TOKEN,
          props: { token: data.companyLogin.token },
        });
        router.replace('/');
      },
      onError: () => {
        setErrorMsg('Les identifiants sont incorrects');
        setBadUser(true);
      },
    }
  );
  const logger = () => () => {
    login({
      variables: {
        input: { email: email as string, password: password as string },
      },
    });
  };

  if (token) {
    router.replace('/');
    return <></>;
  }

  return (
    <Container align="center" gap={0}>
      <Container row align="center">
        <Logo />
        <Text variant="h3" color={theme.cvar('colorForeground')}>
          Hiddentity
        </Text>
      </Container>
      <Container gap={0}>
        <Text variant="h5" align="left">
          Adresse mail
        </Text>
        <TextField
          size="long"
          thickness="large"
          error={badUser as boolean}
          onChange={(e) => {
            handleEmail(e);
          }}
          type="text"
          placeholder="pierre.dupont@example.com"
        />
        <Text variant="h5" align="left">
          Mot de passe
        </Text>
        <TextField
          size="long"
          thickness="large"
          error={badUser as boolean}
          onChange={(e) => {
            handlePassword(e);
          }}
          type="password"
          placeholder="********"
        />
        <Button size="long" variant="teal" thickness="large" onClick={logger()}>
          Login
        </Button>
        {badUser && (
          <Text
            variant="h5"
            align="left"
            color={theme.cvar('colorSelectTextError')}
          >
            {errorMsg}
          </Text>
        )}
      </Container>
    </Container>
  );
};

export default Login;
