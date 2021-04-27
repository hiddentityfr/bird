import * as React from 'react';

import { Search, Users, Grid } from 'react-feather';

import { theme } from '@utils';

import { Container } from '@components/Layouts';
import { Card, Link, Text } from '@components/DataDisplay';
import { TextField } from '@components/Inputs';

interface AdminProps {}

const Admin = (): JSX.Element => {
  const cards = React.useMemo(
    () => [
      {
        number: '6',
        label: 'Membres',
        icon: <Users color={theme.cvar('colorPurple')} />,
        color: 'rgba(228, 193, 249, 0.15)',
        link: '/admin/users',
      },
      {
        number: '3',
        label: 'Équipes',
        icon: <Grid color={theme.cvar('colorPink')} />,
        color: 'rgba(255, 153, 201, 0.15)',
        link: '/admin/teams',
      },
    ],
    []
  );

  return (
    <Container flex={0}>
      <Container row justify="space-between">
        <Container>
          <Text variant="h3">Administration</Text>
        </Container>
        <Container flex={0}>
          <TextField
            gap={0}
            icon={<Search />}
            size="long"
            thickness="large"
            placeholder="Rechercher une action..."
            onChange={() => {}}
          />
        </Container>
      </Container>
      <Container gap={0} align="flex-start">
        <Container row flex={0} align="flex-start">
          {cards.map((c) => (
            <Link key={c.label} href={c.link}>
              <Card
                number={c.number}
                label={c.label}
                icon={c.icon}
                color={c.color}
              />
            </Link>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default Admin;
