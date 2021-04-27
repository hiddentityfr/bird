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

const Teams = (): JSX.Element => {
  const titles = React.useMemo<TitleHead[]>(
    () => [
      {
        key: 'name',
        label: 'Nom',
      },
      {
        key: 'members',
        label: 'Nombre de membres',
      },
      {
        key: 'date',
        label: 'Date de création',
      },
    ],
    []
  );

  const users = React.useMemo(
    () => [
      {
        name: 'Hiddentity',
        members: '4',
        date: day().subtract(1, 'month').subtract(10, 'd').format('DD/MM/YYYY'),
      },
      {
        name: 'Leboncoin',
        members: '12',
        date: day().subtract(8, 'month').subtract(22, 'd').format('DD/MM/YYYY'),
      },
      {
        name: 'Epitech',
        members: '6',
        date: day().subtract(4, 'month').format('DD/MM/YYYY'),
      },
    ],
    []
  );

  return (
    <Container flex={0}>
      <Container row justify="space-between">
        <Container>
          <Text variant="h3">Équipes</Text>
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

export default Teams;
