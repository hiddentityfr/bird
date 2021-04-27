import * as React from 'react';

import { Search } from 'react-feather';

import { day, theme } from '@utils';

import { Container, Spacer } from '@components/Layouts';
import { Text } from '@components/DataDisplay';
import { TextField } from '@components/Inputs';

type TitleHead = {
  label: string;
  key: string;
};

interface TableProps<T> {
  titles: TitleHead[];
  data: T[];
}

const Table = <T,>({ titles, data }: TableProps<T>): JSX.Element => {
  return (
    <Container gap={0}>
      <Container row justify="space-evenly">
        {titles.map((t, i) => (
          <Container key={t.key} gap={0}>
            <Container
              gap={0}
              bg={theme.cvar('colorTeal')}
              align="flex-start"
              style={{
                borderRadius:
                  i === 0
                    ? `${theme.cvar('layoutRadius2x')} 0 0 ${theme.cvar(
                        'layoutRadius2x'
                      )}`
                    : i === titles.length - 1
                    ? `0 ${theme.cvar('layoutRadius2x')} ${theme.cvar(
                        'layoutRadius2x'
                      )} 0`
                    : undefined,
              }}
            >
              <Container>
                <Text bold color="#fff" variant="small">
                  {t.label}
                </Text>
              </Container>
            </Container>
            <Spacer size={2} />
            {data.map((d, index) => {
              const e = (d as unknown) as { [key: string]: string };
              return (
                <Container gap={0}>
                  <Container
                    gap={0}
                    bg={
                      index % 2 === 1 ? theme.cvar('colorGrey') : 'transparent'
                    }
                    align="flex-start"
                    style={{
                      borderRadius:
                        i === 0
                          ? `${theme.cvar('layoutRadius2x')} 0 0 ${theme.cvar(
                              'layoutRadius2x'
                            )}`
                          : i === titles.length - 1
                          ? `0 ${theme.cvar('layoutRadius2x')} ${theme.cvar(
                              'layoutRadius2x'
                            )} 0`
                          : undefined,
                    }}
                  >
                    <Container>
                      <Text key={e[t.key]} variant="small">
                        {e[t.key]}
                      </Text>
                    </Container>
                  </Container>
                  <Spacer size={1} />
                </Container>
              );
            })}
          </Container>
        ))}
      </Container>
    </Container>
  );
};

const Users = (): JSX.Element => {
  const titles = React.useMemo<TitleHead[]>(
    () => [
      {
        key: 'lastname',
        label: 'Nom',
      },
      {
        key: 'firstname',
        label: 'Prénom',
      },
      {
        key: 'email',
        label: 'Email',
      },
      {
        key: 'team',
        label: 'Équipe(s)',
      },
      {
        key: 'date',
        label: "Date d'ajout",
      },
    ],
    []
  );

  const users = React.useMemo(
    () => [
      {
        lastname: 'Ordonez',
        firstname: 'Antoine',
        email: 'antoine@hiddentity.fr',
        team: 'Hiddentity',
        date: day().subtract(1, 'month').subtract(10, 'd').format('DD/MM/YYYY'),
      },
      {
        lastname: 'Sainson',
        firstname: 'Yann',
        email: 'yann@hiddentity.fr',
        team: 'Hiddentity',
        date: day().subtract(4, 'month').format('DD/MM/YYYY'),
      },
      {
        lastname: 'Colombier',
        firstname: 'Adrien',
        email: 'adrien@hiddentity.fr',
        team: 'Hiddentity',
        date: day().subtract(8, 'month').subtract(22, 'd').format('DD/MM/YYYY'),
      },
      {
        lastname: 'Flayac',
        firstname: 'Quentin',
        email: 'quentin@hiddentity.fr',
        team: 'Hiddentity',
        date: day().subtract(8, 'month').subtract(22, 'd').format('DD/MM/YYYY'),
      },
      {
        lastname: 'Kesisoglou',
        firstname: 'Ioannis',
        email: 'ioannis@hiddentity.fr',
        team: 'Hiddentity',
        date: day().subtract(8, 'month').subtract(22, 'd').format('DD/MM/YYYY'),
      },
      {
        lastname: 'Rieux',
        firstname: 'Antonin',
        email: 'antonin@hiddentity.fr',
        team: 'Hiddentity',
        date: day().subtract(8, 'month').subtract(22, 'd').format('DD/MM/YYYY'),
      },
    ],
    []
  );

  return (
    <Container flex={0}>
      <Container row justify="space-between">
        <Container>
          <Text variant="h3">Membres</Text>
        </Container>
        <Container flex={0}>
          <TextField
            gap={0}
            icon={<Search />}
            size="long"
            thickness="large"
            placeholder="Rechercher un membre..."
            onChange={() => {}}
          />
        </Container>
      </Container>
      <Container>
        <Table titles={titles} data={users} />
      </Container>
    </Container>
  );
};

export default Users;
