import * as React from 'react';
import Router  from 'next/router';

import Container from '@components/Layouts/Container';
import Text from '@components/DataDisplay/Text';
import { TextField, Button } from '@components/Inputs';
import { Logo } from '@components/Medias/Icons';
import { theme } from '@utils';

import { useMutation } from '@apollo/client';
import { api } from '@services';

type LoginResponse = {
    companyLogin: {
        token: string;
        refreshToken: string;
    }
}
type LoginVars = {
    input: {
        email: string;
        password: string;
    }
}

const Login = (): JSX.Element => {
    const [email, setEmail] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const [badUser, setBadUser] = React.useState<boolean>();
    const [errorMsg, setErrorMsg] = React.useState<string>();

    const handleEmail = (e: string) => { 
        if (e != null) 
            setEmail(e) 
    }
    const handlePassword = (e: string) => {
        if (e != null)
            setPassword(e)
    }
    const [login] = useMutation<LoginResponse, LoginVars>(api.user.mutations.companyLogin, {
        onCompleted: data => {
            // console.log(data.login.token);
            localStorage.setItem("token", data.companyLogin.token);
            localStorage.setItem("refreshToken", data.companyLogin.refreshToken);
            Router.push("/"); // Merge to get Homepage
        },
        onError: () => {
            setErrorMsg("Les identifiants sont incorrects")
            setBadUser(true);
        }
    });
    const logger = () => () => {
        login({ variables: { input: { email: email as string, password: password as string} } });
    };
    if (localStorage.getItem("token")) {
        Router.push("/");
        // return (
            // <Container align="center" gap={0}>You are logged in.</Container>
            // redirect to main page, token saved on localstorage, possibility to get a cookie if needed
            // )
    }
    return (
        <Container align="center" gap={0}>
            <Container row align="center">
                <Logo />
                <Text variant="h3" color={theme.cvar('colorForeground')}>Hiddentity</Text>
            </Container>
            <Container gap={0}>
                <Text variant="h5" align="left">Adresse mail</Text>
                <TextField size="long" thickness="large" error={badUser as boolean} onChange={(e) => {handleEmail(e)}} type="text" placeholder="pierre.dupont@example.com" />
                <Text variant="h5" align="left">Mot de passe</Text>
                <TextField size="long" thickness="large" error={badUser as boolean} onChange={(e) => {handlePassword(e)}} type="password" placeholder="********" />
                <Button size="long" variant="teal" thickness="large" onClick={ logger() }>Login</Button>
                { badUser && <Text variant="h5" align="left" color={theme.cvar('colorSelectTextError')}>{errorMsg}</Text> }
            </Container>
        </Container>
    );
};

export default Login;
