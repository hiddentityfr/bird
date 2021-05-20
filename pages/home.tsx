import React from 'react';

import { Calendar, ThumbsUp, Users } from 'react-feather';

import Container from '@components/Layouts/Container';
import Text from '@components/DataDisplay/Text';

import { useAuth } from '@contexts/AuthContext';
import { day, theme } from '@utils';
import { Spacer } from '@components/Layouts';
import { Card, Link } from '@components/DataDisplay';

const Home = (): JSX.Element => {
  const [{ company }] = useAuth();

  const cards = React.useMemo(
    () => [
      {
        number: `0`,
        label: 'Candidat intéréssé',
        icon: <Users color={theme.cvar('colorPurple')} />,
        color: 'rgba(228, 193, 249, 0.15)',
        link: '/home',
      },
      {
        number: `0`,
        label: 'Entretien à planifier',
        icon: <ThumbsUp color={theme.cvar('colorPink')} />,
        color: 'rgba(255, 153, 201, 0.15)',
        link: '/home',
      },
      {
        number: `0`,
        label: 'Entretien à venir',
        icon: <Calendar color="#ED5F74" />,
        color: 'rgba(237, 95, 116, 0.15)',
        link: '/home',
      },
    ],
    []
  );

  return (
    <Container flex={0} title="Accueil">
      <Container row justify="space-between">
        <Container>
          <Text variant="h3">{`Bonjour, ${company?.name}`}</Text>
          <Spacer size={1} />
          <Container row gap={0}>
            <Text variant="p" color={theme.cvar('colorTeal')}>
              {day().format('dddd').charAt(0).toUpperCase() +
                day().format('dddd').slice(1)}
            </Text>
            <Text variant="p" color="#bdbdbd">
              ,&nbsp;
              {day().format('DD MMMM YYYY')}
            </Text>
          </Container>
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

export default Home;
