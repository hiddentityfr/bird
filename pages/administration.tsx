import React from 'react';

import {
  PauseCircle,
  HelpCircle,
  MoreHorizontal,
  XCircle,
} from 'react-feather';

import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import TextField from '../components/Inputs/TextField';
import LeftSideBar from '../components/Personal/left-sidebar';
import Avatar from '../components/DataDisplay/Avatar';

const Administration = () => {
  return (
    <Container row align="stretch" flex={1} gap={0}>
      <LeftSideBar />
      <Container flex={3} gap={8}>
        <Container row justify="space-between" align="center" flex={1}>
          <Text variant="h2" color="#000000">
            Administration
          </Text>
          <TextField
            size="large"
            onChange={() => {}}
            placeholder="Rechercher une équipe..."
          />
        </Container>
        <Container row gap={0} flex={1}>
          <Container row justify="space-between" align="flex-start" flex={1}>
            <Text variant="h4" color="#000000">
              Equipes
            </Text>
            <Text variant="h4" color="#bdbdbd">
              Rôles
            </Text>
            <Text variant="h4" color="#bdbdbd">
              Membres
            </Text>
            <Text variant="h4" color="#bdbdbd">
              Entreprise
            </Text>
          </Container>
          <Container flex={1}> </Container>
        </Container>
        <Container row align="flex-start" gap={0} flex={7}>
          <Container flex={2}>
            <Container justify="flex-start" flex={1}>
              <Container gap={2}>
                <Text variant="small" color="#828282">
                  Equipes actives
                </Text>
              </Container>
              <Container
                row
                align="center"
                justify="space-between"
                bg="#f2f2f5"
                gap={0}
              >
                <Container flex={1} gap={6}>
                  <Text variant="h4">R</Text>
                </Container>
                <Container align="space-between" flex={10} gap={0}>
                  <Text variant="small">Ressources humaines</Text>
                  <Text variant="small" color="#828282">
                    2 membres
                  </Text>
                </Container>
              </Container>
              <Container row align="center" justify="space-between" gap={0}>
                <Container flex={1} gap={6}>
                  <Text variant="h4">R</Text>
                </Container>
                <Container align="space-between" flex={10} gap={0}>
                  <Text variant="small">Ressources humaines</Text>
                  <Text variant="small" color="#828282">
                    2 membres
                  </Text>
                </Container>
              </Container>
              <Container row align="center" justify="space-between" gap={0}>
                <Container flex={1} gap={6}>
                  <Text variant="h4">R</Text>
                </Container>
                <Container align="space-between" flex={10} gap={0}>
                  <Text variant="small">Ressources humaines</Text>
                  <Text variant="small" color="#828282">
                    2 membres
                  </Text>
                </Container>
              </Container>
            </Container>
            <Container flex={1}>
              <Text variant="small" color="#828282">
                Equipes inactives
              </Text>
              <Container row align="center" justify="space-between" gap={0}>
                <Container flex={1} gap={6}>
                  <PauseCircle size={18} />
                </Container>
                <Container align="space-between" flex={10} gap={0}>
                  <Text variant="small">Ressources humaines</Text>
                  <Text variant="small" color="#828282">
                    2 membres
                  </Text>
                </Container>
              </Container>
            </Container>
          </Container>
          <Container flex={5}>
            <Container row gap={0} flex={1}>
              <Text variant="h3">R</Text>
              <Container align="space-between" gap={6}>
                <Text variant="h3">Ressources humaines</Text>
              </Container>
              <Container align="flex-end">
                <MoreHorizontal size={18} />
              </Container>
            </Container>
            <Container row align="flex-start" gap={0} flex={8}>
              <Container flex={2} gap={0}>
                <Container justify="space-around" gap={0}>
                  <Text variant="h5">Vue d ensemble</Text>
                  <Container row gap={0}>
                    <Container row justify="space-between" gap={0} flex={5}>
                      <Text variant="small" color="#4f4f4f">
                        Date de création
                      </Text>
                      <Text variant="small">19/03/2020 23:42 EST</Text>
                    </Container>
                    <Container gap={0} flex={2}>
                      {' '}
                    </Container>
                  </Container>
                  <Container row gap={0}>
                    <Container row justify="space-between" gap={0} flex={5}>
                      <Text variant="small" color="#4f4f4f">
                        Dernière modification
                      </Text>
                      <Text variant="small">05/08/2020 16:38 EST</Text>
                    </Container>
                    <Container gap={0} flex={2}>
                      {' '}
                    </Container>
                  </Container>
                </Container>
                <Container justify="space-around" gap={0}>
                  <Container row gap={0}>
                    <Container row justify="flex-start" gap={0} flex={9}>
                      <Container row justify="space-between" gap={0} flex={2}>
                        <Text variant="h5">Permissions par défaut</Text>
                        <HelpCircle size={16} color="#828282" />
                      </Container>
                      <Container row justify="flex-end" gap={0} flex={3}>
                        <Text variant="small" color="#828282">
                          +AJOUTER
                        </Text>
                      </Container>
                    </Container>
                    <Container gap={0} flex={1}>
                      {' '}
                    </Container>
                  </Container>
                  <Container row gap={0}>
                    <Container
                      row
                      justify="flex-start"
                      gap={0}
                      bg="#f2f2f5"
                      flex={9}
                    >
                      <Avatar
                        username="O"
                        backgroundColor="#a8e2ff"
                        size={30}
                      />
                      <Container row justify="space-between" gap={0} flex={20}>
                        <Text variant="small">Créer une offre</Text>
                        <Container row justify="flex-end" gap={0}>
                          <XCircle size={18} color="#828282" />
                          <Text variant="small" color="#f2f2f5">
                            {'void'}
                          </Text>
                        </Container>
                      </Container>
                    </Container>
                    <Container gap={0} flex={1}>
                      {' '}
                    </Container>
                  </Container>
                  <Container row gap={0}>
                    <Container row justify="flex-start" gap={0} flex={9}>
                      <Avatar
                        username="O"
                        backgroundColor="#a8e2ff"
                        size={30}
                      />
                      <Container gap={0} flex={20}>
                        <Text variant="small">Modifier une offre</Text>
                      </Container>
                    </Container>
                    <Container gap={0} flex={1}>
                      {' '}
                    </Container>
                  </Container>
                  <Container row gap={0}>
                    <Container row justify="flex-start" gap={0} flex={9}>
                      <Avatar
                        username="E"
                        backgroundColor="#ffc9ad"
                        size={30}
                      />
                      <Container gap={0} flex={20}>
                        <Text variant="small">Créer une équipe</Text>
                      </Container>
                    </Container>
                    <Container gap={0} flex={1}>
                      {' '}
                    </Container>
                  </Container>
                  <Container row gap={0}>
                    <Container row justify="flex-start" gap={0} flex={9}>
                      <Avatar
                        username="E"
                        backgroundColor="#ffc9ad"
                        size={30}
                      />
                      <Container gap={0} flex={20}>
                        <Text variant="small">Modifier une équipe</Text>
                      </Container>
                    </Container>
                    <Container gap={0} flex={1}>
                      {' '}
                    </Container>
                  </Container>
                </Container>
              </Container>
              <Container flex={1}>
                <Container row justify="space-between" gap={0}>
                  <Text variant="h5">Membres</Text>
                  <Text variant="small" color="#828282">
                    +AJOUTER
                  </Text>
                </Container>
                <Container row justify="flex-start" gap={0} bg="#f2f2f5">
                  <Avatar username="PA" backgroundColor="#a8e2ff" size={30} />
                  <Container gap={0} flex={10}>
                    <Text variant="small">Pierre André</Text>
                    <Text variant="small" color="#4f4f4f">
                      CTO
                    </Text>
                  </Container>
                  <Container justify="flex-end" gap={0}>
                    <XCircle size={18} color="#828282" />
                  </Container>
                </Container>
                <Container row justify="flex-start" gap={0}>
                  <Avatar username="PA" backgroundColor="#339999" size={30} />
                  <Container gap={0} flex={10}>
                    <Text variant="small">Pierre André</Text>
                    <Text variant="small" color="#4f4f4f">
                      CTO
                    </Text>
                  </Container>
                </Container>
                <Container row justify="flex-start" gap={0}>
                  <Avatar username="PA" backgroundColor="#ed5f74" size={30} />
                  <Container gap={0} flex={10}>
                    <Text variant="small">Pierre André</Text>
                    <Text variant="small" color="#4f4f4f">
                      CTO
                    </Text>
                  </Container>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Administration;
