import React from 'react';

import { PauseCircle } from 'react-feather';

import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import TextField from '../components/Inputs/TextField';
import LeftSideBar from '../components/Personal/left-sidebar';

export default function Administration() {
  return (
    <Container row justify="flex-start" align="flex-start" gap={0}>
      <LeftSideBar />
      <Container>
        <Container justify="flex-start" align="stretch">
          <Container row justify="space-between" align="center">
            <Text variant="h4" color="#000000">
              Administration
            </Text>
            <TextField
              size="long"
              onChange={() => {}}
              placeholder="Rechercher une équipe..."
            />
          </Container>

          <Container row justify="flex-start" align="flex-start" gap={0}>
            <Container row justify="space-between" align="flex-start">
              <Text variant="h5" color="#000000">
                Equipes
              </Text>
              <Text variant="h5" color="#bdbdbd">
                Rôles
              </Text>
              <Text variant="h5" color="#bdbdbd">
                Membres
              </Text>
              <Text variant="h5" color="#bdbdbd">
                Entreprise
              </Text>
            </Container>
          </Container>

          <Container row justify="flex-start" align="flex-start">
            <Container justify="flex-start" align="flex-start">
              <Text variant="p" color="#bdbdbd">
                Equipes actives
              </Text>
              <Container justify="flex-start" align="flex-start">
                <Container row justify="flex-start" align="center">
                  <Text variant="h3">R</Text>
                  <Container justify="flex-start" align="flex-start">
                    <Text variant="p">Ressources Humaines</Text>
                    <Text variant="small" color="#bdbdbd">
                      2 membres
                    </Text>
                  </Container>
                </Container>
                <Container row justify="flex-start" align="center">
                  <Text variant="h3">R</Text>
                  <Container justify="flex-start" align="flex-start">
                    <Text variant="p">Ressources Humaines</Text>
                    <Text variant="small" color="#bdbdbd">
                      2 membres
                    </Text>
                  </Container>
                </Container>
                <Container row justify="flex-start" align="center">
                  <Text variant="h3">R</Text>
                  <Container justify="flex-start" align="flex-start">
                    <Text variant="p">Ressources Humaines</Text>
                    <Text variant="small" color="#bdbdbd">
                      2 membres
                    </Text>
                  </Container>
                </Container>
              </Container>
              <Text variant="p" color="#bdbdbd">
                Equipes inactives
              </Text>
              <Container justify="flex-start">
                <Container row justify="center" align="center">
                  <PauseCircle size={24} />
                  <Container justify="flex-start" align="flex-start">
                    <Text variant="p">Ressources Humaines</Text>
                    <Text variant="small" color="#bdbdbd">
                      2 membres
                    </Text>
                  </Container>
                </Container>
              </Container>
            </Container>
            <Container justify="flex-start" align="flex-start">
              <Container row justify="flex-start" align="center">
                <Text variant="h3">R</Text>
                <p>Ressources Humaines</p>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
