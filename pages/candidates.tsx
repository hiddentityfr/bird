import React from 'react';

import { MoreHorizontal } from 'react-feather';

import { Container } from '@components/Layouts';
import { Text, MatchCard } from '@components/DataDisplay';
import { TextField } from '@components/Inputs';

import { useQuery } from '@apollo/client';
import { queries } from '../services/api/match';

const Candidates = (): JSX.Element => {
  const Waiting = (column: string) => {
    const { loading, data, error } = useQuery(queries.matches);
    const res: any[] = [<MatchCard column="empty" />];

    if (loading) return <p>LOADING</p>;
    if (error) return <p>ERROR</p>;
    delete res[0];
    data.matches.edges.map((match: any) => {
      if (match.node.status === column.column)
        res.push(
          <MatchCard
            name={match.node.offer.name}
            description=""
            date="19/08/2020"
            type="CDI"
          />
        );
      return res;
    });
    return res;
  };

  return (
    <Container row align="stretch" flex={1} gap={0}>
      <Container flex={3} gap={8}>
        <Container row justify="space-between" align="center" flex={1}>
          <Text variant="h3" color="#000000">
            Candidats
          </Text>
          <TextField
            size="medium"
            onChange={() => {}}
            placeholder="Rechercher de candidat"
          />
        </Container>
        <Container row justify="space-between" align="flex-start" flex={5}>
          <Container
            justify="space-between"
            align="space-around"
            flex={1}
            gap={6}
          >
            <Container
              row
              justify="space-between"
              align="space-around"
              flex={1}
            >
              <Text variant="h4">En attente</Text>
              <MoreHorizontal color="#828282" size={18} />
            </Container>
            <Waiting column="ACCEPTED" />
          </Container>
          <Container
            justify="space-between"
            align="space-around"
            flex={1}
            gap={6}
          >
            <Container
              row
              justify="space-between"
              align="space-around"
              flex={1}
            >
              <Text variant="h4">Accepté</Text>
              <MoreHorizontal color="#828282" size={18} />
            </Container>
          </Container>
          <Container
            justify="space-between"
            align="space-around"
            flex={1}
            gap={6}
          >
            <Container
              row
              justify="space-between"
              align="space-around"
              flex={1}
            >
              <Text variant="h4">Refusé</Text>
              <MoreHorizontal color="#828282" size={18} />
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Candidates;
