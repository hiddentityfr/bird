import React from 'react';

import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import TextField from '../components/Inputs/TextField';
import LeftSideBar from '../components/Personal/left-sidebar';
import ContractCard from '../components/Personal/contract-card';
import { Button } from '@components/Inputs';

const NouvelleOffre = () => {
  return (
    <Container row align="stretch" flex={1} gap={0}>
      <LeftSideBar />
      <Container flex={3} gap={8}>
        <Container justify="center" flex={1} gap={0}>
          <Text variant="h2">
            Nouvelle offre
          </Text>
        </Container>
        <Container row flex={1} gap={0}>
          <Container flex={3} gap={0}>
            <Container row gap={0}>
              <Text variant="h5" color="#4f4f4f">
                Titre
              </Text>
              <Text variant="h5" color="#ef7284">
                *
              </Text>
            </Container>
            <TextField
              size="large"
              onChange={() => {}}
              type="text"
              placeholder="Développeur junior python"
            />
          </Container>
          <Container flex={1} gap={0}>
            <Container row gap={0}>
              <Text variant="h5" color="#4f4f4f">
                Localisation
              </Text>
              <Text variant="h5" color="#ef7284">
                *
              </Text>
            </Container>
            <TextField
              size="large"
              onChange={() => {}}
              placeholder="Paris, France"
            />
          </Container>
          <Container flex={3} gap={0}> </Container>
        </Container>
        <Container flex={1} gap={0}>
          <Container row align="flex-start" flex={1} gap={2}>
            <Text variant="h5" color="#4f4f4f">
              Type de contrat
            </Text>
            <Text variant="h5" color="#ef7284">
              *
            </Text>
          </Container>
          <Container justify="flex-start" flex={1} gap={0}>
            <Container row flex={0} gap={0}> 
              <ContractCard title="CDI" checked={true} />
              <ContractCard title="CDD" checked={true} />
            </Container>
            <Container row flex={0} gap={0}> 
              <ContractCard title="Stage" checked={false} />
              <ContractCard title="Alternance" checked={false} />
            </Container>
            <Container row flex={0} gap={0}> 
              <ContractCard title="Temps partiel" checked={false} />
              <ContractCard title="Freelance" checked={false} />
            </Container>
          </Container>
        </Container>
        <Container row justify="flex-end" align="flex-end" flex={1} gap={0}>
          <Button size="long" thickness="large" backgroundColor="#bdbdbd" borderColor="#bdbdbd">ANNULER</Button>
          <Button size="long" thickness="large" backgroundColor="#339999" borderColor="#339999">CRÉER</Button>
        </Container>
      </Container>
    </Container>
  )
}

export default NouvelleOffre