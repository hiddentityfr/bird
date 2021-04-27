import * as React from 'react';

import { theme } from '@utils';

import { Container, Spacer } from '@components/Layouts';
import { Text } from '@components/DataDisplay';

interface CardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const Card = ({ number, label, icon, color }: CardProps): JSX.Element => {
  return (
    <Container
      bg={theme.cvar('colorGrey')}
      style={{ borderRadius: theme.cvar('layoutRadius2x') }}
    >
      <Container row justify="space-between">
        <Container flex={0}>
          <Text variant="small" bold size="36px">
            {number}
          </Text>
          <Text variant="small" color={theme.cvar('colorAccent4')}>
            {label}
          </Text>
        </Container>
        <Spacer />
        <Container flex={0}>
          <Container
            align="center"
            bg={color}
            style={{
              borderRadius: 100,
              padding: theme.cvar('layoutSpaceGapHalf'),
            }}
          >
            {icon}
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Card;
