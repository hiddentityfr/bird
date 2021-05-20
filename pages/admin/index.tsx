import * as React from 'react';

import { gql, useQuery } from '@apollo/client';
import { Grid, Search, Users } from 'react-feather';

import { theme } from '@utils';

import { CompanyResponse, CompanyUser } from '@typings/Company';
import { GenericPagination } from '@typings/GraphQL';
import { ITeam } from '@typings/Team';

import { Container } from '@components/Layouts';
import { Card, Link, Text } from '@components/DataDisplay';
import { TextField } from '@components/Inputs';

import { AuthActions, useAuth } from '@contexts/AuthContext';

const Admin = (): JSX.Element => {
  const [{ company }, dispatch] = useAuth();

  useQuery<CompanyResponse>(
    gql`
      query company {
        company {
          teams {
            totalCount
          }
          members {
            totalCount
          }
        }
      }
    `,
    {
      fetchPolicy: 'cache-and-network',
      onCompleted: (data) => {
        dispatch({
          type: AuthActions.UPDATE_COMPANY,
          props: {
            company: {
              ...company,
              teams: {
                ...(company?.teams as GenericPagination<ITeam>),
                totalCount: data.company.teams.totalCount,
              },
              members: {
                ...(company?.members as GenericPagination<CompanyUser>),
                totalCount: data.company.members.totalCount,
              },
            },
          },
        });
      },
    }
  );

  const cards = React.useMemo(
    () => [
      {
        number: `${company?.members?.totalCount ?? '-'}`,
        label: (company?.members?.totalCount ?? 0) > 1 ? 'Membres' : 'Membre',
        icon: <Users color={theme.cvar('colorPurple')} />,
        color: 'rgba(228, 193, 249, 0.15)',
        link: '/admin/users',
      },
      {
        number: `${company?.teams?.totalCount ?? '-'}`,
        label: (company?.teams?.totalCount ?? 0) > 1 ? 'Équipes' : 'Équipe',
        icon: <Grid color={theme.cvar('colorPink')} />,
        color: 'rgba(255, 153, 201, 0.15)',
        link: '/admin/teams',
      },
    ],
    [company?.members?.totalCount, company?.teams?.totalCount]
  );

  return (
    <Container flex={0} title="Administration">
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
