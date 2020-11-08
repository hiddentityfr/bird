import React from 'react';

import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import TextField from '../components/Inputs/TextField';
import CheckBox from '../components/Inputs/Checkbox';
import Button from '../components/Inputs/Button';
import LeftSideBar from '../components/Personal/left-sidebar';

export default function CreationOffre() {
  return (
    <Container row justify="flex-start" align="flex-start" gap={0}>
      <LeftSideBar />
      <Container justify="flex-start" align="flex-start" gap={8} flex={3}>
        <Text variant="h2" color="#000000">
          Nouvelle offre
        </Text>
        <Container row justify="flex-start" align="flex-start" gap={8}>
          <Container justify="flex-start" align="flex-start">
            <Text variant="p" color="#000000">
              Titre
            </Text>
            <TextField
                size="long"
                onChange={() => {}}
                placeholder="Développeur junior Python"
              />
          </Container>
          <Container justify="flex-start" align="flex-start">
            <Text variant="p" color="#000000">
              Localisation
            </Text>
            <TextField
                size="long"
                onChange={() => {}}
                placeholder="Paris, France"
              />
          </Container>
        </Container>
        <Container>
          <Text variant="p" color="#000000">
            Type de contrat
          </Text>
          <Container row>
            <Container>
              <Container>
                <CheckBox label="CDI" labelLocation="right" />
              </Container>
              <Container>
                <CheckBox label="Stage" labelLocation="right" />
              </Container>
              <Container>
                <CheckBox label="Temps partiel" labelLocation="right" />
              </Container>
            </Container>
            <Container>
            <Container>
                <CheckBox label="CDD" labelLocation="right" />
              </Container>
              <Container>
                <CheckBox label="Alternance" labelLocation="right" />
              </Container>
              <Container>
                <CheckBox label="Freelance" labelLocation="right" />
              </Container>
            </Container>
          </Container>
        </Container>
        <Container row justify="flex-end" align="flex-end" gap={8}>
          <Button size="long" >Annuler</Button>
          <Button size="long">Créer</Button>
        </Container>
      </Container>
    </Container>
  )
}