import React from 'react';

import { Plus, MapPin } from 'react-feather';

import Container from '../components/Layouts/Container';
import Text from '../components/DataDisplay/Text';
import TextField from '../components/Inputs/TextField';
import LeftSideBar from '../components/Personal/left-sidebar';

export default function Offres() {
  return (
    <Container row justify="flex-start" align="flex-start" gap={0}>
      <LeftSideBar />
      <Container justify="flex-start" align="flex-start" gap={8} flex={3}>
        
        <Container row justify="space-between" align="space-between">
          <Text variant="h2" color="#000000">
            Offres
          </Text>
          <TextField
            size="long"
            onChange={() => {}}
            placeholder="Rechercher une offre..."
          />
        </Container>

        <Container row justify="stretch" align="stretch">
          <Container row justify="space-around">
            <Text variant="h4" color="#bdbdbd">Toutes</Text>
            <Text variant="h4">Actives</Text>
            <Text variant="h4" color="#bdbdbd">Inactives</Text>
          </Container>
          <Container row justify="flex-end">
            <Plus color="#339999"/>
            <Text variant="h4" color="#339999">NOUVELLE OFFRE</Text>
          </Container>
        </Container>

        <Container row>

          <Container justify="space-around">
            <Text variant="h5">Développeur Backend Go</Text>
            <Container row gap={0}>
              <MapPin size={16} />
              <Text variant="p">Paris</Text>
            </Container>
            <Container row gap={0}>
              <Text variant="small" color="#bdbdbd">19/08/2020</Text>
              CDD CDI
            </Container>
          </Container>

          <Container justify="space-around">
            <Text variant="h5">Développeur Frontend TypeScript / React.js</Text>
            <Container row gap={0}>
              <MapPin size={16} />
              <Text variant="p">Bordeaux</Text>
            </Container>
            <Container row gap={0}>
              <Text variant="small" color="#bdbdbd">13/03/2020</Text>
              CDD CDI
            </Container>
          </Container>

          <Container justify="space-around">
            <Text variant="h5">Assistant juridique</Text>
            <Container row gap={0}>
              <MapPin size={16} />
              <Text variant="p">Paris</Text>
            </Container>
            <Container row gap={0}>
              <Text variant="small" color="#bdbdbd">26/08/2020</Text>
              Stage Alternance
            </Container>
          </Container>

          <Container justify="space-around">
            <Text variant="h5">Comptabilité et contrôle de gestion</Text>
            <Container row gap={0}>
              <Text variant="small" color="#bdbdbd">21/04/2020</Text>
              Stage Alternance
            </Container>
          </Container>

        </Container>

      </Container>
    </Container>
  )
}