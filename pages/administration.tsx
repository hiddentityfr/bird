import React from 'react';
import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import TextField from '../components/Inputs/TextField';
import LeftSideBar from '../components/Personal/left-sidebar';
//  import { Search } from 'react-feather';

export default function Administration() {
  return (
    <div className="div-full-space">
      <Container row justify="flex-start" align="stretch">
        <LeftSideBar />
        <Container>
          <Container justify="flex-start" align="stretch">
            <Container row justify="space-between" align="flex-start">
              <Text variant="h4" color="#000000">
                Administration
              </Text>
              <TextField
                size="long"
                onChange={() => {}}
                placeholder="Rechercher une équipe..."
              />
            </Container>
            <Container justify="flex-start" align="stretch">
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
              <Container row justify="space-around" align="stretch">
                <Container justify="flex-start">
                  <Text variant="h6" color="#828282">
                    Equipes actives
                  </Text>
                  <Container justify="flex-start" align="flex-start">
                    <Container row justify="center" align="center">
                      <Text variant="h3">R</Text>
                      <Container justify="center" align="flex-start">
                        <p>Ressources Humaines</p>
                        <p>2 membres</p>
                      </Container>
                    </Container>
                    <Container row justify="center" align="center">
                      <Text variant="h3">R</Text>
                      <Container justify="center" align="flex-start">
                        <p>Ressources Humaines</p>
                        <p>2 membres</p>
                      </Container>
                    </Container>
                    <Container row justify="center" align="center">
                      <Text variant="h3">R</Text>
                      <Container justify="center" align="flex-start">
                        <p>Ressources Humaines</p>
                        <p>2 membres</p>
                      </Container>
                    </Container>
                  </Container>
                  <Text variant="h6" color="#828282">
                    Equipes inactives
                  </Text>
                </Container>
                <Container>Rh</Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
