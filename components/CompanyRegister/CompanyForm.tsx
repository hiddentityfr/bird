import React from 'react';

import Container from '@components/Layouts/Container';
import { TextField, Button } from '@components/Inputs';
import {Text, Link } from '@components/DataDisplay';
import { Spacer } from '@components/Layouts';
import { theme } from '@utils';

import { useMutation } from '@apollo/client';
import { api } from '@services';
import Sidebar from './Sidebar';

type CompanyResponse = {
    login: {
        token: string;
        refreshToken: string;
    }
}
type CompanyVars = {
    input: {
        name: string;
        siret: string;
        firstname: string;
        lastname: string;
        email: string;
        password: string;
        members: MembersVars[];
    }
}
type MembersVars = {
    lastname: string;
    firstname: string;
    email: string;
}

const CompanyForm = (): JSX.Element => {
    const [step, setStep] = React.useState(0);
    const [email, setEmail] = React.useState<string>();
    const [firstname, setFirstname] = React.useState<string>();
    const [lastname, setLastname] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const [passwordConfirm, setPasswordConfirm] = React.useState<string>();
    const [companyName, setCompanyName] = React.useState<string>();
    const [siretNumber, setSiretNumber] = React.useState<string>();
    const [companySize, setCompanySize] = React.useState(0);
    const [members, setMembers] = React.useState<MembersVars[]>([]);
    const onAddMember = () => () => setMembers([...members, {firstname: '', lastname: '', email: ''}]);

    const nextStep = () => {
        const currentStep = step;
        if (currentStep === 0) {
            if(!email) {
                return;
            }
        }
        if (currentStep === 1) {
            if(!firstname || !lastname || !checkPassword(password as string, passwordConfirm as string)) {
                return;
            }
        }
        if (currentStep === 2) {
            if(!companyName || !siretNumber || !companySize) {
                return;
            }
        }
        setStep(currentStep + 1);
    };

    const prevStep = () => {
        const currentStep = step;
        setStep(currentStep - 1);
    };

    const handleEmail = (e: string) => { 
        if (e != null) 
            setEmail(e);
    };
    const handleFirstname = (e: string) => { 
        if (e != null) 
            setFirstname(e);
    };
    const handleLastname = (e: string) => { 
        if (e != null) 
            setLastname(e);
    };
    const handlePassword = (e: string) => {
        if (e != null)
            setPassword(e);
    };
    const handlePasswordConfirm = (e: string) => {
        if (e != null)
            setPasswordConfirm(e);
    };

    const checkPassword = (pw: string, confirm: string) => {
        if (pw === confirm)
            return true;
        return false;
    };
    const handleCompanyName = (e: string) => {
        if (e != null)
            setCompanyName(e);
    };
    const handleSiretNumber = (e: string) => {
        if (e != null)
            setSiretNumber(e);
    };
    const handleCompanySize = (e: number) => {
        if (e != null)
            setCompanySize(e);
    };
    const [sendCompanyRegister] = useMutation<CompanyResponse, CompanyVars>(api.company.mutations.createCompany, {
        onCompleted: _ => {
            // Router.push("/login"); // Merge to login
        },
        onError: _ => {
        }
    });
    const createCompany = () => {
        sendCompanyRegister(
            { variables: 
                { input: 
                    { 
                        name: companyName as string,
                        siret: siretNumber as string,
                        firstname: firstname as string,
                        lastname: lastname as string,
                        email: email as string, 
                        password: password as string,
                        members: members ?? []
                    }
                }
            }
        );
    };
    if (step == 4) {
        console.log(members);
        console.log(companyName, companySize, siretNumber, firstname, lastname, email, password);
        createCompany();
    }
    return(
        <Container row gap={0} align="stretch">
            <Sidebar step={step} />
            <Container bg="#F2F2F5" gap={0} flex={1.8}>
                <Container align="flex-end">
                        <Text variant="p" bold={false} align="right" color={theme.cvar('colorAccents6')}>Un problème ? <Link href="#"><Text variant="small" bold={true} color={theme.cvar('colorButtonGreen')}>Obtenir de l'aide</Text></Link></Text>             
                </Container>
                <Container>
                    { step == 0 && <Container>
                        <Text variant="h2" color={theme.cvar('colorAccents2')}>Créer votre profil entreprise.</Text>
                        <Text variant="h4" color={theme.cvar('colorAccents5')}>Créer votre profil entreprise est simple.
                            <br/> Veuillez entrer votre adresse mail pour continuer.
                        </Text>
                    </Container> }
                    { step == 1 && <Container>
                        <Text variant="h2" color={theme.cvar('colorAccents2')}>Vos informations</Text>
                        <Text variant="h4" color={theme.cvar('colorAccents5')}>Créer votre profil entreprise est simple et ne dure que quelques minutes.</Text>
                    </Container> }
                    { step == 2 && <Container>
                        <Text variant="h2" color={theme.cvar('colorAccents2')}>Détails de l'entreprise</Text>
                        <Text variant="h4" color={theme.cvar('colorAccents5')}>Veuillez renseigner les informations nécéssaires à la création de votre entreprise.</Text>
                    </Container> }
                    { step == 3 && <Container>
                        <Text variant="h2" color={theme.cvar('colorAccents2')}>Votre équipe</Text>
                        <Text variant="h4" color={theme.cvar('colorAccents5')}>Vous pouvez rapidement inviter des membres dans votre entreprise.</Text>
                    </Container> }
                    { step == 4 && <Container flex={10} align="center">
                        <Container flex={0}>
                            <Text variant="h2">Félicitations</Text>
                            <Text variant="h5">Votre entreprise a bien été crée.</Text>
                            <Link href="/login"><Button size="short" variant="teal" thickness="large">Login</Button></Link>
                        </Container>
                    </Container> }
                </Container>
                <Container>
                    { step == 0 && <Container flex={0}>
                        <Text weight="bold" variant="h5" color={theme.cvar('colorAccents4')}>Adresse mail</Text>
                        <TextField size="long" thickness="large" type="email" onChange={(e) => {handleEmail(e)}} placeholder="example@example.com" />
                    </Container> }
                    { step == 1 && <Container>
                        <Container row flex={0}>
                            <Container gap={0}>
                                <Text variant="h5" align="left">Prénom</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handleFirstname(e)}} type="text" placeholder="Pierre"></TextField>
                            </Container>
                            <Container gap={0}>
                                <Text variant="h5" align="left">Nom</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handleLastname(e)}} type="text" placeholder="Dupont"></TextField>
                            </Container>
                        </Container>
                        <Container row flex={0}>
                            <Container gap={0}>
                                <Text variant="h5" align="left">Mot de passe</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handlePassword(e)}} type="password" placeholder="********"></TextField>
                            </Container>
                            <Container>
                                <Text variant="h5" align="left">Répéter le mot de passe</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handlePasswordConfirm(e)}} type="password" placeholder="********"></TextField>
                            </Container>
                        </Container>
                    </Container> }
                    { step == 2 && <Container>
                        <Container row flex={0}>
                            <Container gap={0}>
                                <Text variant="h5" align="left">Nom de l'entreprise</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handleCompanyName(e)}} type="text" placeholder="Epitech"></TextField>
                            </Container>
                            <Container gap={0}>
                                <Text variant="h5" align="left">Numéro SIRET</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handleSiretNumber(e)}} type="text" placeholder="123 568 941 00056"></TextField>
                            </Container>
                        </Container>
                        <Container row flex={0}>
                            <Container gap={0}>
                                <Text variant="h5" align="left">Taille</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handleCompanySize(parseInt(e))}} type="number" placeholder="1-10000"></TextField>
                            </Container>
                        </Container>
                    </Container> }
                    { step == 3 && <Container>
                        <Container>
                            <Container row flex={0} gap={0}>
                            { members.map((_, i) => (
                                <Container row gap={0}>
                                    <Container gap={0} flex={2}>
                                        <Text variant="h5" align="left">Prénom</Text>
                                        <TextField size="short" thickness="large" onChange={(e) => setMembers([...members.slice(0, i), { ...members[i], firstname: e }, ...members.slice(i + 1),])} type="text" placeholder="Pierre" />
                                    </Container>
                                    <Container gap={0} flex={2}>
                                        <Text variant="h5" align="left">Nom de famille</Text>
                                        <TextField size="short" thickness="large" onChange={(e) => setMembers([...members.slice(0, i), { ...members[i], lastname: e }, ...members.slice(i + 1),])} type="text" placeholder="Dupont" />
                                    </Container>
                                    <Container gap={0} flex={3}>
                                        <Text variant="h5" align="left">Adresse Email</Text>
                                        <TextField size="long" thickness="large" onChange={(e) => setMembers([...members.slice(0, i), { ...members[i], email: e }, ...members.slice(i + 1),])} type="text" placeholder="pierre.dupont@example.com" />
                                    </Container>
                                    <Container row flex={1}>
                                        <Spacer size="large" />
                                        <Button size="short" variant="primary" thickness="large" onClick={() => setMembers([...members.slice(0, i), ...members.slice(i + 1),])}>Supprimer</Button>
                                    </Container>
                                </Container>))}
                            </Container>
                            <Container row flex={0}>
                                <Container align="flex-start">
                                    <Spacer size="small"/><Button size="short" variant="teal" thickness="large" onClick={onAddMember()}>+ Ajouter un membre</Button>
                                </Container>
                            </Container>
                        </ Container>
                    </Container> }
                </Container>
                <Container row gap={8}>
                        { step !== 0 && step !== 4 && <Container align="flex-start"><Button size="long" variant="secondary" thickness="large" onClick={prevStep}>ÉTAPE PRÉCEDÉNTE</Button></Container> }
                        { step !== 4 && <Container align="flex-end"><Button size="long" variant="teal" thickness="large" onClick={nextStep}>SUIVANT</Button></Container> }
                </Container>
            </Container>
        </Container>
    );
};

export default CompanyForm;