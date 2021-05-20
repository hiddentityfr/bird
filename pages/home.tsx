import React from 'react';

import { Container } from '@components/Layouts';
import { Text } from '@components/DataDisplay';

const Home = (): JSX.Element => {
  return (
    <Container align="center">
      <Container>
        <Text variant="h1">Welcome on Next.js template!</Text>
      </Container>
    </Container>
  );
};

export default Home;
