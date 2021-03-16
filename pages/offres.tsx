import React from 'react';

import { MapPin } from 'react-feather';
import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import TextField from '../components/Inputs/TextField';
import LeftSideBar from '../components/Personal/left-sidebar';
import RoundCard from '@components/Personal/round-card';

const Offres = () => {
  return (
    <Container row align="stretch" flex={1} gap={0}>
      <LeftSideBar />
      <Container flex={3} gap={8}>
        <Container row justify="space-between" flex={2} gap={6}>
          <Text variant="h2">Offres</Text>
          <TextField
              size="large"
              onChange={() => {}}
              type="text"
              placeholder="Rechercher une offre..."
            />
        </Container>
        <Container row flex={1} gap={0}>
          <Container row justify="space-between" gap={0}>
            <Container row justify="space-around" flex={1} gap={0}>
              <Text variant="h5" color="#bdbdbd">Toutes</Text>
              <Text variant="h5" color="#000">Actives</Text>
              <Text variant="h5" color="#bdbdbd">Inactives</Text>
            </Container>
            <Container row justify="flex-end" flex={3} gap={0}>
              <Text variant="h5" color="#339999">+ NOUVELLE OFFRE</Text>
            </Container>
          </Container>
        </Container>
        <Container justify="flex-start" flex={7} gap={0}>
          <Container row justify="space-around" align="flex-start" gap={0}>
            
            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Développeur Backend Go</Text></Container>
                  <Container row gap={1} flex={2}>
                    <MapPin color="#4f4f4f" size={14} />
                    <Text variant="small" color="#4f4f4f">Paris</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>


            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Développeur Frontend Typescript / React.js</Text></Container>
                  <Container row gap={1} flex={2}>
                    <MapPin color="#4f4f4f" size={14} />
                    <Text variant="small" color="#4f4f4f">Bordeaux</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">13/03/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 30%">
                      <Container bg="#ffc9ad" gap={0} rounded={true} flex="75% 50%"><Container bg="ffc9ad" gap={1}><Text variant="small">CDD</Text></Container></Container>
                      <Container bg="#e4c1f9" gap={0} rounded={true} flex="75% 50%"><Container bg="#e4c1f9" gap={1}><Text variant="small">CDI</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
            

            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Assistant juridique</Text></Container>
                  <Container row gap={1} flex={2}>
                    <MapPin color="#4f4f4f" size={14} />
                    <Text variant="small" color="#4f4f4f">Paris</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">26/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 50%">
                      <Container bg="#a8e2ff" gap={0} rounded={true} flex="75% 50%"><Container bg="#a8e2ff" gap={1}><Text variant="small">Stage</Text></Container></Container>
                      <Container bg="#ffcce4" gap={0} rounded={true} flex="75% 50%"><Container bg="#ffcce4" gap={1}><Text variant="small">Alternance</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>

            
          </Container>


          <Container row justify="space-around" align="flex-start" gap={0}>
            
            <Container gap={0} flex="0 30%">
              <Container bg='#f2f2f5' gap={2} rounded={true}>
                <Container>
                  <Container gap={1} flex={2}><Text variant="h6">Comptabilité et contrôle de gestion</Text></Container>
                  <Container row gap={1} flex={2}>
                    <MapPin color="#4f4f4f" size={14} />
                    <Text variant="small" color="#4f4f4f">Paris</Text>
                  </Container>
                  <Container row justify="space-between" gap={1} flex={3}>
                    <Text variant="small" color="#bdbdbd">19/08/2020</Text>
                    <Container row justify="space-around" gap={0} flex="0 50%">
                      <Container bg="#a8e2ff" gap={0} rounded={true} flex="75% 50%"><Container bg="#a8e2ff" gap={1}><Text variant="small">Stage</Text></Container></Container>
                      <Container bg="#ffcce4" gap={0} rounded={true} flex="75% 50%"><Container bg="#ffcce4" gap={1}><Text variant="small">Alternance</Text></Container></Container>
                    </Container>
                  </Container>
                </Container>
              </Container>
            </Container>
            <Container gap={0} flex="0 30%">{' '}</Container>
            <Container gap={0} flex="0 30%">{' '}</Container>

          </Container>

          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>
          <Container row justify="space-around" align="flex-start" gap={0}>{' '}</Container>


        </Container>
      </Container>
    </Container>
  )
}

export default Offres;