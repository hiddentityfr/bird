import React from 'react';
import { useRouter } from 'next/router';
import Container from '@components/Layouts/Container';

import { Text } from '@components/DataDisplay';
import { theme } from '@utils';
import { Button } from '@components/Inputs';


const Sidebar = ({ step }: { step: number }): JSX.Element => {
  const router = useRouter();

  const goLogin = () => () => {
    router.replace('/login')
  }

  return (
    <Container align="center" flex={0.55} gap={0}>
      <Container row>
        <img
          src="/images/logo-color.png"
          width={50}
          height={50}
          alt="hiddentity logo"
          className="hiddentity-logo"
        />
        <Text variant="h3" color="#000000">
          Hiddentity
        </Text>
      </Container>
      {step === 0 && (
        <Container align="flex-start">
          <Text variant="h4" color="#bdbdbd">
            Type d&apos;entreprise
          </Text>
          <Text variant="h4" color="#bdbdbd">
            Détails de l&apos;entreprise
          </Text>
          <Text variant="h4" color="#bdbdbd">
            Équipe
          </Text>
        </Container>
      )}
      {step === 1 && (
        <Container align="flex-start">
          <Text variant="h4" color={theme.cvar('colorButtonGreen')}>
            Vos informations
          </Text>
          <Text variant="h4" color="#bdbdbd">
            Détails de l&apos;entreprise
          </Text>
          <Text variant="h4" color="#bdbdbd">
            Équipe
          </Text>
        </Container>
      )}
      {step === 2 && (
        <Container align="flex-start">
          <Text variant="h4" color="#bdbdbd">
            Vos informations
          </Text>
          <Text variant="h4" color={theme.cvar('colorButtonGreen')}>
            Détails de l&apos;entreprise
          </Text>
          <Text variant="h4" color="#bdbdbd">
            Équipe
          </Text>
        </Container>
      )}
      {step === 3 && (
        <Container align="flex-start">
          <Text variant="h4" color="#bdbdbd">
            Vos informations
          </Text>
          <Text variant="h4" color="#bdbdbd">
            Détails de l&apos;entreprise
          </Text>
          <Text variant="h4" color={theme.cvar('colorButtonGreen')}>
            Équipe
          </Text>
        </Container>
      )}
      <Button size="long" variant="secondary" thickness="large" onClick={goLogin()}>
        Login
      </Button>
    </Container>
  );
};

export default Sidebar;
