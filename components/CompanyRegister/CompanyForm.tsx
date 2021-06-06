import React from 'react';
import Router  from 'next/router';

import Container from '@components/Layouts/Container';
import { TextField, Button } from '@components/Inputs';
import {Text, Link } from '@components/DataDisplay';
import { Spacer } from '@components/Layouts';
import { theme } from '@utils';

import { useMutation } from '@apollo/client';
import { api } from '@services';
import { render } from 'react-dom';


const CompanyForm = (): JSX.Element => {
    const [step, setStep] = React.useState(0);
    const [member, setMember] = React.useState(1);

    const [email, setEmail] = React.useState<string>();
    const [mainName, setMainName] = React.useState<string>();
    const [mainSurname, setMainSurname] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();
    const [passwordConfirm, setPasswordConfirm] = React.useState<string>();
    const [companyName, setCompanyName] = React.useState<string>();
    const [siretNumber, setSiretNumber] = React.useState<string>();
    const [companySize, setCompanySize] = React.useState(0);


    const nextStep = () => {
        const currentStep = step;
        setStep(currentStep + 1);
    };
    const prevStep = () => {
        const currentStep = step;
        setStep(currentStep - 1);
        console.log("prev: " + step);
    };
    const addMember = () => {
        const currentMember = member;
        setMember(currentMember + 1);
    };
    const minusMember = () => {
        const currentMember = member;
        setMember(currentMember - 1);
    };
    const handleEmail = (e: string) => { 
        if (e != null) 
            setEmail(e);
    };
    const handleMainName = (e: string) => { 
        if (e != null) 
            setMainName(e);
    };
    const handleMainSurname = (e: string) => { 
        if (e != null) 
            setMainSurname(e);
    };
    const handlePassword = (e: string) => {
        if (e != null)
            setPassword(e);
    };
    const handlePasswordConfirm = (e: string) => {
        if (e != null)
            setPasswordConfirm(e);
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


    return(
        <Container row gap={0} align="stretch">
            <Container align="center" flex={0.55} gap={0}>
                <Container row>
                    <img src="/images/logo-color.png" width={50} height={50} alt="hiddentity logo" className="hiddentity-logo" />
                    <Text variant="h3" color={"#000000"}>Hiddentity</Text>
                </Container>
                { step == 0 && <Container align="flex-start">
                    <Text variant="h4" color="#bdbdbd">Type d'entreprise</Text>
                    <Text variant="h4" color="#bdbdbd">Détails de l'entreprise</Text>
                    <Text variant="h4" color="#bdbdbd">Équipe</Text>
                </Container> }
                { step == 1 && <Container align="flex-start">
                    <Text variant="h4" color={theme.cvar('colorButtonGreen')}>Vos informations</Text>
                    <Text variant="h4" color="#bdbdbd">Détails de l'entreprise</Text>
                    <Text variant="h4" color="#bdbdbd">Équipe</Text>
                </Container> }
                { step == 2 && <Container align="flex-start">
                    <Text variant="h4" color="#bdbdbd">Vos informations</Text>
                    <Text variant="h4" color={theme.cvar('colorButtonGreen')}>Détails de l'entreprise</Text>
                    <Text variant="h6" color={theme.cvar('colorAccents1')}>Informations</Text>
                    <Text variant="h6" color="#bdbdbd">Localisations</Text>
                    <Text variant="h4" color="#bdbdbd">Équipe</Text>
                </Container> }
                { step == 3 && <Container align="flex-start">
                    <Text variant="h4" color="#bdbdbd">Vos informations</Text>
                    <Text variant="h4" color="#bdbdbd">Détails de l'entreprise</Text>
                    <Text variant="h4" color={theme.cvar('colorButtonGreen')}>Équipe</Text>
                </Container> }
            </Container>

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
                            <Container>
                                <Text variant="h5" align="left">Prénom</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handleMainName(e)}} type="text" placeholder="Pierre"></TextField>
                            </Container>
                            <Container>
                                <Text variant="h5" align="left">Nom</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handleMainSurname(e)}} type="text" placeholder="Dupont"></TextField>
                            </Container>
                        </Container>
                        <Container row flex={0}>
                            <Container>
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
                            <Container>
                                <Text variant="h5" align="left">Nom de l'entreprise</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handleCompanyName(e)}} type="text" placeholder="Epitech"></TextField>
                            </Container>
                            <Container>
                                <Text variant="h5" align="left">Numéro SIRET</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handleSiretNumber(e)}} type="text" placeholder="123 568 941 00056"></TextField>
                            </Container>
                        </Container>
                        <Container row flex={0}>
                            <Container>
                                <Text variant="h5" align="left">Taille</Text>
                                <TextField size="long" thickness="large" onChange={(e) => {handleCompanySize(e)}} type="number" placeholder="1-10000"></TextField>
                            </Container>
                        </Container>
                    </Container> }
                    { step == 3 && <Container flex={0} justify="flex-start">
                        <Container row flex={0}>
                            <Container>
                                <Text variant="h5" align="left">Prénom</Text>
                                <TextField size="short" thickness="large" onChange={() => {}} type="text" placeholder="Pierre"></TextField>
                            </Container>
                            <Container>
                                <Text variant="h5" align="left">Nom de famille</Text>
                                <TextField size="short" thickness="large" onChange={() => {}} type="text" placeholder="Dupont"></TextField>
                            </Container>
                            <Container>
                                <Text variant="h5" align="left">Adresse Email</Text>
                                <TextField size="short" thickness="large" onChange={() => {}} type="text" placeholder="pierre.dupont@example.com"></TextField>
                            </Container>
                        </Container>
                        <Container>
                            <Button size="short" variant="teal" thickness="large" onClick={nextStep}>Ajouter un membre</Button>
                        </Container>
                    </Container> }
                </Container>

                <Container row justify="space-between">
                    <Container justify="flex-start" gap={8}>
                        { step !== 0 && step !== 4 && <Button size="short" variant="secondary" thickness="large" onClick={prevStep}>ÉTAPE PRÉCEDÉNTE</Button> }
                    </Container>
                    <Container justify="flex-end" gap={8}>
                        { step !== 4 && <Button size="short" variant="teal" thickness="large" onClick={nextStep}>SUIVANT</Button> }
                    </Container>
                </Container>
            </Container>
        </Container>
    );
};

export default CompanyForm;