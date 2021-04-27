import * as React from 'react';

import { useRouter } from 'next/router';
import { User, Settings } from 'react-feather';

import { theme } from '@utils';

import { Container, Spacer } from '@components/Layouts';
import { Logo } from '@components/Medias/Icons';
import { Link, Text } from '@components/DataDisplay';

interface MenuProps {}

const Menu = (): JSX.Element => {
  const { route } = useRouter();

  const nav = React.useMemo(
    () => [
      { name: 'Accueil', route: '/' },
      { name: 'Candidats', route: '/' },
      { name: 'Offres', route: '/' },
      { name: 'Administration', route: '/admin' },
    ],
    []
  );

  return (
    <Container justify="space-between" gap={0} bg={theme.cvar('colorGrey')}>
      <Container row justify="space-between">
        <Container row justify="center" flex={0} gap={0}>
          <Logo />
          <Spacer size={1} />
          <Text color={theme.cvar('colorTeal')} variant="h3">
            hiddentity
          </Text>
        </Container>
        <Container row gap={0} justify="center">
          {nav.map((e) => (
            <Container flex={0}>
              <Link key={e.name} href={e.route}>
                <Text
                  color={theme.cvar(
                    e.route === route ? 'colorForeground' : 'colorAccent6'
                  )}
                  size="18px"
                  bold={e.route === route}
                  variant="small"
                >
                  {e.name}
                </Text>
              </Link>
            </Container>
          ))}
        </Container>
        <Container justify="center" flex={0} row>
          <Link href="/admin">
            <Container row>
              <User color={theme.cvar('colorAccent6')} />
              <Spacer size={1} />
              <Text
                color={theme.cvar('colorAccent6')}
                size="18px"
                variant="small"
              >
                Mon compte
              </Text>
            </Container>
          </Link>
          <Link href="/admin">
            <Container row>
              <Settings color={theme.cvar('colorAccent6')} />
              <Spacer size={1} />
              <Text
                color={theme.cvar('colorAccent6')}
                size="18px"
                variant="small"
              >
                Paramètres
              </Text>
            </Container>
          </Link>
        </Container>
      </Container>
    </Container>
  );
};

export default Menu;
