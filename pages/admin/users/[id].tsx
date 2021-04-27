import * as React from 'react';
import { Container } from '@components/Layouts';
import { Text } from '@components/DataDisplay';
import { useRouter } from 'next/router';

interface UserProps {}

const User = (): JSX.Element => {
  const { query } = useRouter();
  console.log(query);
  return (
    <Container flex={0}>
      <Container row justify="space-between">
        <Container>
          <Text variant="h3">Utilisateur</Text>
        </Container>
      </Container>
    </Container>
  );
};

export default User;
