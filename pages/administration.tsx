import React from 'react';

import { PauseCircle, HelpCircle } from 'react-feather';

import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import TextField from '../components/Inputs/TextField';
import LeftSideBar from '../components/Personal/left-sidebar';
import Avatar from '../components/DataDisplay/Avatar';

export default function Administration() {
  return (
    <Container row justify="flex-start" align="flex-start" flex={1} gap={0}>
      <LeftSideBar />
      <Container flex={3}>
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
            <Container justify="flex-start" align="flex-start" flex={1}>
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

            <Container justify="flex-start" align="flex-start" flex={3}>
              <Container row justify="flex-start" align="center" gap={0}>
                <Text variant="h3">R</Text>
                <Text variant="h5" color="#000">
                  Ressources Humaines
                </Text>
              </Container>

              <Container justify="flex-start" align="stretch" gap={0}>
                <Text variant="h6">Vue d ensemble</Text>
                <Container row justify="space-between">
                  <Text variant="small" color="#bdbdbd">
                    Date de création
                  </Text>
                  <Text variant="small">19/03/2020 23:42 EST</Text>
                </Container>
                <Container row justify="space-between">
                  <Text variant="small" color="#bdbdbd">
                    Dernière modification
                  </Text>
                  <Text variant="small">05/08/2020 16:38 EST</Text>
                </Container>
              </Container>

              <Container justify="flex-start" align="flex-start" gap={0}>
                <Container row justify="space-between" align="center">
                  <Container row>
                    <Text variant="h6">Permission par défaut</Text>
                    <HelpCircle size={16} color="#bdbdbd" />
                  </Container>
                  <Text variant="p" color="#bdbdbd">
                    +AJOUTER
                  </Text>
                </Container>

                <Container row justify="flex-start" align="center">
                  <Avatar backgroundColor="#a8e2ff" username="O" size={32} />
                  <Text variant="p">Créer une offre</Text>
                </Container>
                <Container row justify="flex-start" align="center">
                  <Avatar backgroundColor="#a8e2ff" username="O" size={32} />
                  <Text variant="p">Modifier une offre</Text>
                </Container>
                <Container row justify="flex-start" align="center">
                  <Avatar backgroundColor="#ffc9ad" username="E" size={32} />
                  <Text variant="p">Créer une équipe</Text>
                </Container>
                <Container row justify="flex-start" align="center">
                  <Avatar backgroundColor="#ffc9ad" username="E" size={32} />
                  <Text variant="p">Modifier une équipe</Text>
                </Container>
              </Container>
            </Container>

            <Container justify="flex-start" align="flex-start" flex={1}>
              <Container row justify="space-between" align="center">
                <Text variant="h6">Membres</Text>
                <Text variant="p" color="#bdbdbd">
                  +AJOUTER
                </Text>
              </Container>

              <Container row>
                <Avatar backgroundColor="#a8e2ff" username="PA" size={32} />
                <Container gap={0}>
                  <Text variant="p">Pierre André</Text>
                  <Text variant="small" color="#bdbdbd">
                    CTO
                  </Text>
                </Container>
              </Container>
              <Container row>
                <Avatar backgroundColor="#339999" username="PA" size={32} />
                <Container gap={0}>
                  <Text variant="p">Pierre André</Text>
                  <Text variant="small" color="#bdbdbd">
                    CTO
                  </Text>
                </Container>
              </Container>
              <Container row>
                <Avatar backgroundColor="#ed5f74" username="PA" size={32} />
                <Container gap={0}>
                  <Text variant="p">Pierre André</Text>
                  <Text variant="small" color="#bdbdbd">
                    CTO
                  </Text>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
  </Container>

    </Container>
  );
}
