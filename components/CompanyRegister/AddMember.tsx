import React from 'react';
import Container from '@components/Layouts/Container';
import { TextField } from '@components/Inputs';
import { Text } from '@components/DataDisplay';



const AddMember = (): JSX.Element => {
    return(
        <Container row flex={0} gap={0}>
        <Container gap={0}>
            <Text variant="h5" align="left">Prénom</Text>
            <TextField size="short" thickness="large" onChange={() => {}} type="text" placeholder="Pierre"></TextField>
        </Container>
        <Container gap={0}>
            <Text variant="h5" align="left">Nom de famille</Text>
            <TextField size="short" thickness="large" onChange={() => {}} type="text" placeholder="Dupont"></TextField>
        </Container>
        <Container gap={0}>
            <Text variant="h5" align="left">Adresse Email</Text>
            <TextField size="short" thickness="large" onChange={() => {}} type="text" placeholder="pierre.dupont@example.com"></TextField>
        </Container>
    </Container>
    );
};

export default AddMember;