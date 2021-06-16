import * as React from 'react';

import { Container } from '@components/Layouts';
import { Text } from '@components/DataDisplay';

interface MatchCardProps {
  name: string;
  description: string;
  date: string;
  type: string;
}

const MatchCard = ({
  name,
  description,
  date,
  type,
}: Partial<MatchCardProps>): JSX.Element => {
  return (
    <Container gap={0} flex="0 30%">
      <Container bg="#f2f2f5" gap={2}>
        <Container>
          <Container gap={1} flex={2}>
            <Text variant="h6">{name}</Text>
          </Container>
          <Container row gap={1} flex={2}>
            <Text variant="small" color="#4f4f4f">
              {description}
            </Text>
          </Container>
          <Container row justify="space-between" gap={1} flex={3}>
            <Text variant="small" color="#bdbdbd">
              {date}
            </Text>
            <Container row justify="space-around" gap={0} flex="0 30%">
              <Container bg="#ffc9ad" gap={0} flex="75% 50%">
                <Container bg="ffc9ad" gap={1}>
                  <Text variant="small">{type}</Text>
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default MatchCard;
