import React from 'react';

import { Users, ThumbsUp, Calendar } from 'react-feather';

import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import LeftSideBar from '../components/Personal/left-sidebar';

export default function Home() {
  return (
    <Container row justify="stretch" align="stretch" flex={1} gap={0} >
      <LeftSideBar />
      <Container flex={3} gap={0}>
       
        <Container flex={1} gap={8}>
          <Text variant="h4" weight={600}>Bonjour Pierre,</Text>
          <Text variant="h6" color="#339999">Lundi, 03 Mars 2020</Text>
        </Container>

        <Container row justify="flex-start" align="flex-start" flex={8} gap={0}>
          
          <Container row flex={1} gap={8} backgroundColor="#F2F2F5">
            <Container flex={1}>
              <Text variant="h2">24</Text>
              <Text variant="h5" color="#bdbdbd">Candidats intéréssés</Text>
            </Container>
            <Container justify="center" align="center" flex={1}>
              <Users size={32} />
            </Container>
          </Container>

          <Container row flex={1} gap={8} backgroundColor="#F2F2F5">
            <Container flex={1}>
              <Text variant="h2">2</Text>
              <Text variant="h5" color="#bdbdbd">Entretiens à planifier</Text>
            </Container>
            <Container justify="center" align="center" flex={1}>
              <ThumbsUp size={32} />
            </Container>
          </Container>

          <Container row flex={1} gap={8} backgroundColor="#F2F2F5">
            <Container flex={1}>
              <Text variant="h2">3</Text>
              <Text variant="h5" color="#bdbdbd">Entretiens à venir</Text>
            </Container>
            <Container justify="center" align="center" flex={1}>
              <Calendar size={32} />
            </Container>
          </Container>

        </Container>

      </Container>
    </Container>
  ) 
}