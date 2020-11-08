import React from 'react';

import { MoreHorizontal } from 'react-feather'

import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import TextField from '@components/Inputs/TextField';
import LeftSideBar from '../components/Personal/left-sidebar';

export default function Home() {
  return (
    <Container row justify="flex-start" align="stretch" flex={1} gap={0} >
      <LeftSideBar />
      <Container flex={3} gap={0}>
       
        <Container row justify="space-between" align="space-between" flex={1} gap={8}>
          <Text variant="h2" color="#000000">
            Candidats
          </Text>
          <TextField
            size="long"
            onChange={() => {}}
            placeholder="Rechercher une offre..."
          />
        </Container>

        <Container flex={8}>
          
          <Container row justify="space-around" align="stretch" flex={1}>
            <Container row justify="space-between" flex={1}>
              <Text variant="h5">En attente</Text>
              <MoreHorizontal />
            </Container>
            <Container row justify="space-between" flex={1}>
              <Text variant="h5">Entretien</Text>
              <MoreHorizontal />
            </Container>
            <Container row justify="space-between" flex={1}>
              <Text variant="h5">Accepté</Text>
              <MoreHorizontal />
            </Container>
            <Container row justify="space-between" flex={1}>
              <Text variant="h5">Refusé</Text>
              <MoreHorizontal />
            </Container>
          </Container>
          
          <Container row justify="flex-start" align="flex-start" flex={9} gap={0}>
           
            <Container justify="flex-start" align="flex-start" flex={1} gap={2}>
              <Container backgroundColor="#f2f2f5" justify="stretch" align="stretch" flex={1}>
                <Text variant="h6">Loutre</Text>
                <Text variant="p" color="#828282">Développeur Backend Go</Text>
                <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              </Container>
              <Container backgroundColor="#f2f2f5" flex={1}>
                <Text variant="h6">Loutre</Text>
                <Text variant="p" color="#828282">Développeur Backend Go</Text>
                <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              </Container>
              <Container backgroundColor="#f2f2f5" flex={1}>
                <Text variant="h6">Loutre</Text>
                <Text variant="p" color="#828282">Développeur Backend Go</Text>
                <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              </Container>
            </Container>

            <Container justify="flex-start" align="flex-start" flex={1} gap={2}>
              <Container backgroundColor="#f2f2f5">
                <Text variant="h6">Loutre</Text>
                <Text variant="p" color="#828282">Développeur Backend Go</Text>
                <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              </Container>
            </Container>
            
            <Container justify="flex-start" align="flex-start" flex={1} gap={2}>
              <Container backgroundColor="#f2f2f5">
                <Text variant="h6">Loutre</Text>
                <Text variant="p" color="#828282">Développeur Backend Go</Text>
                <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              </Container>
              <Container backgroundColor="#f2f2f5">
                <Text variant="h6">Loutre</Text>
                <Text variant="p" color="#828282">Développeur Backend Go</Text>
                <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              </Container>
            </Container>
            
            <Container justify="flex-start" align="flex-start" flex={1} gap={2}>
              <Container backgroundColor="#f2f2f5">
                <Text variant="h6">Loutre</Text>
                <Text variant="p" color="#828282">Développeur Backend Go</Text>
                <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              </Container>
              <Container backgroundColor="#f2f2f5">
                <Text variant="h6">Loutre</Text>
                <Text variant="p" color="#828282">Développeur Backend Go</Text>
                <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              </Container>
              <Container backgroundColor="#f2f2f5">
                <Text variant="h6">Loutre</Text>
                <Text variant="p" color="#828282">Développeur Backend Go</Text>
                <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              </Container>
              <Container backgroundColor="#f2f2f5">
                <Text variant="h6">Loutre</Text>
                <Text variant="p" color="#828282">Développeur Backend Go</Text>
                <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              </Container>
              <Container backgroundColor="#f2f2f5">
                <Text variant="h6">Loutre</Text>
                <Text variant="p" color="#828282">Développeur Backend Go</Text>
                <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              </Container>
            </Container>
          </Container>

        </Container>

      </Container>
    </Container>
  ) 
}