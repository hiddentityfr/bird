import React from 'react';

import { MapPin } from 'react-feather';
import Container from '@components/Layouts/Container';
import Text from '@components/DataDisplay/Text';


const RoundCard = ({title}: any) => {
  return (
    <Container gap={0} flex="0 30%">
      <Container bg='#f2f2f5' gap={2} rounded={true}>
        <Container>
          <Container gap={1} flex={2}><Text variant="h6">{title}</Text></Container>
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
  );
};

export default RoundCard;