import * as React from 'react';

import { useRouter } from 'next/router';
import { User, Settings } from 'react-feather';

import { theme } from '@utils';

import { Container, Spacer } from '@components/Layouts';
import { Logo } from '@components/Medias/Icons';
import { Link, Text } from '@components/DataDisplay';

const Sidebar = (): JSX.Element => {
  const { route } = useRouter();

  const nav = React.useMemo(
    () => [
      { name: 'Accueil', route: '/home' },
      { name: 'Candidats', route: '/candidates' },
      { name: 'Offres', route: '/jobs' },
      { name: 'Administration', route: '/admin' },
    ],
    []
  );

  return (
    <Container align="stretch" row gap={0} bg={theme.cvar('colorGrey')}>
      <Container align="center">
        <Container justify="space-between">
          <Container row justify="center" flex={0} gap={0}>
            <Logo />
            <Spacer size={1} />
            <Text color={theme.cvar('colorTeal')} variant="h3">
              hiddentity
            </Text>
          </Container>
          <Container gap={0} justify="center">
            {nav.map((e) => (
              <Container flex={0} key={e.route}>
                <Link key={e.name} href={e.route}>
                  <Text
                    color={theme.cvar(
                      route.startsWith(e.route)
                        ? 'colorForeground'
                        : 'colorAccent6'
                    )}
                    size="20px"
                    bold={route.startsWith(e.route)}
                    variant="small"
                  >
                    {e.name}
                  </Text>
                </Link>
              </Container>
            ))}
          </Container>
          <Container flex={0} gap={0} justify="center">
            <Link href="/admin">
              <Container row>
                <User color={theme.cvar('colorAccent6')} />
                <Spacer size={1} />
                <Text
                  color={theme.cvar('colorAccent6')}
                  size="20px"
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
                  size="20px"
                  variant="small"
                >
                  Paramètres
                </Text>
              </Container>
            </Link>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Sidebar;
