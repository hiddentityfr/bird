import React from 'react';

import { day } from '@utils';

import { IOffer, contractMapping } from '@typings/Offer';

import { Container, Spacer } from '@components/Layouts';
import { Text } from '@components/DataDisplay';

interface Props {
  offer: IOffer;
}

const OfferCard = ({ offer }: Props): JSX.Element => {
  return (
    <Container gap={0}>
      <Container bg="#f2f2f5" rounded>
        <Container>
          <Container gap={1} flex={2}>
            <Text variant="h6">{offer.name}</Text>
          </Container>
          <Container row justify="space-between" gap={1} flex={3}>
            <Text variant="small" color="#bdbdbd">
              {day(offer.createdAt).format('DD/MM/YYYY')}
            </Text>
            <Spacer />
            <Container row justify="space-around">
              {offer.contractTypes.map((e) => (
                <Container bg={contractMapping[e].color} rounded>
                  <Container gap={1}>
                    <Text variant="small">{contractMapping[e].label}</Text>
                  </Container>
                </Container>
              ))}
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default OfferCard;
