import * as React from 'react';
import Router  from 'next/router';

import Container from '@components/Layouts/Container';
import Text from '@components/DataDisplay/Text';
import { TextField, Button } from '@components/Inputs';
import { theme } from '@utils';

import { useMutation } from '@apollo/client';
import { api } from '@services';

type LoginResponse = {
    login: {
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
    const [login] = useMutation<LoginResponse, LoginVars>(api.user.mutations.login, {
        onCompleted: data => {
            // console.log(data.login.token);
            localStorage.setItem("token", data.login.token);
            localStorage.setItem("refreshToken", data.login.refreshToken);
            Router.push("/"); // Merge to get Homepage
        },
        onError: () => {
            
            setErrorMsg("Les identifiants sont incorrects")
            setBadUser(true);
        }
    });
    const logger = () => {
        login({variables: {input: { email: email as string, password: password as string}}});
    }
    if (localStorage.getItem("token") !== undefined) {
        Router.push("/");
        // return (
            // <Container align="center" gap={0}>You are logged in.</Container>
            // redirect to main page, token saved on localstorage, possibility to get a cookie if needed
            // )
    }
    return (
        <Container align="center" gap={0}>
            <Container row align="center">
                <img width={50} height={50} src="/images/logo-color.png" alt="hiddentity logo" className="hiddentity-logo" />
                <Text variant="h3" color={theme.cvar('colorForeground')}>Hiddentity</Text>
            </Container>
            <Container gap={0}>
                <form onSubmit={e => {e.preventDefault(); logger() }} key="form">
                    <Text variant="h5" align="left">Adresse mail</Text>
                    <TextField size="long" thickness="large" error={badUser}onChange={(e) => {handleEmail(e)}} type="text" placeholder="pierre.dupont@example.com" />
                    <Text variant="h5" align="left">Mot de passe</Text>
                    <TextField size="long" thickness="large" error={badUser} onChange={(e) => {handlePassword(e)}} type="password" placeholder="********" />
                    <Button size="long" variant="teal" thickness="large">Login</Button>
                </form>
            {badUser && <Text variant="h5" align="left" color={theme.cvar('colorSelectTextError')}>{errorMsg}</Text> }
            </Container>
        </Container>
    );
};

export default Login;
