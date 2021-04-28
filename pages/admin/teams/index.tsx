import * as React from 'react';

import { Search } from 'react-feather';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import { api } from '@services';
import { day, theme } from '@utils';

import {
  CreateTeamResponse,
  CreateTeamVars,
  ITeam,
  TeamConnection,
} from '@typings/Team';
import {
  CompanyResponse,
  CompanyUserConnection,
  CompanyVars,
  ICompany,
} from '@typings/Company';

import { Container, Spacer } from '@components/Layouts';
import { Link, Text } from '@components/DataDisplay';
import { Button, TextField } from '@components/Inputs';
import { Modal } from '@components/Overlays';

type TitleHead = {
  label: string;
  key: keyof ITeam;
  format?: <T>(p: T) => string;
};

interface TableProps {
  titles: TitleHead[];
  data?: TeamConnection;
}

const Table = ({ titles, data }: TableProps): JSX.Element => {
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
                borderRadius: (() => {
                  if (i === 0) {
                    return `${theme.cvar('layoutRadius2x')} 0 0 ${theme.cvar(
                      'layoutRadius2x'
                    )}`;
                  }
                  if (i === titles.length - 1) {
                    return `0 ${theme.cvar('layoutRadius2x')} ${theme.cvar(
                      'layoutRadius2x'
                    )} 0`;
                  }
                  return undefined;
                })(),
              }}
            >
              <Container>
                <Text bold color="#fff" variant="small">
                  {t.label}
                </Text>
              </Container>
            </Container>
            <Spacer size={2} />
            {data ? (
              data.edges?.map((d, index) => {
                return (
                  <Container gap={0}>
                    <Container
                      gap={0}
                      bg={
                        index % 2 === 1
                          ? theme.cvar('colorGrey')
                          : 'transparent'
                      }
                      align="flex-start"
                      style={{
                        height: 40,
                        borderRadius: (() => {
                          if (i === 0) {
                            return `${theme.cvar(
                              'layoutRadius2x'
                            )} 0 0 ${theme.cvar('layoutRadius2x')}`;
                          }
                          if (i === titles.length - 1) {
                            return `0 ${theme.cvar(
                              'layoutRadius2x'
                            )} ${theme.cvar('layoutRadius2x')} 0`;
                          }
                          return undefined;
                        })(),
                      }}
                    >
                      <Container>
                        <Text key={d.node.id} variant="small">
                          {t.format
                            ? t.format(d.node[t.key] ?? '-')
                            : d.node[t.key] ?? '-'}
                        </Text>
                      </Container>
                    </Container>
                    <Spacer size={1} />
                  </Container>
                );
              })
            ) : (
              <Text variant="small">Loading...</Text>
            )}
          </Container>
        ))}
      </Container>
    </Container>
  );
};

const Teams = (): JSX.Element => {
  const router = useRouter();
  const [isAddModalOpen, setAddModalOpen] = React.useState(false);

  const [addTeamName, setAddTeamName] = React.useState<string>('');
  const [company, setCompany] = React.useState<ICompany>();

  const [createTeam] = useMutation<CreateTeamResponse, CreateTeamVars>(
    api.team.mutations.createTeam,
    {
      variables: {
        input: {
          name: addTeamName,
          companyID: company ? company.id : '',
        },
      },
      onCompleted: () => {
        setAddTeamName('');
        setAddModalOpen(false);
      },
      onError: (error) => console.error('Teams > CreateTeam > onError', error),
    }
  );

  useQuery<CompanyResponse, CompanyVars>(api.company.queries.company, {
    onCompleted: (data) => setCompany(data.company),
    onError: (error) => console.error('Teams > Company > onError', error),
  });

  const titles = React.useMemo<TitleHead[]>(
    () => [
      {
        key: 'name',
        label: 'Nom',
      },
      {
        key: 'users',
        label: 'Nombre de membres',
        format: (p) =>
          `${((p as unknown) as CompanyUserConnection).totalCount}`,
      },
      {
        key: 'createdAt',
        label: 'Date de création',
        format: (p) => day(`${p}`).format('DD/MM/YYYY'),
      },
    ],
    []
  );

  return (
    <>
      <Container flex={0}>
        <Container row justify="space-between">
          <Container>
            <Text variant="h3">Équipes</Text>
          </Container>
          <Container flex={0} row>
            <Container>
              <Link href="#add" onClick={() => setAddModalOpen(true)}>
                <Text color={theme.cvar('colorTeal')} bold variant="small">
                  + Ajouter une équipe
                </Text>
              </Link>
            </Container>
            <TextField
              gap={0}
              icon={<Search />}
              size="long"
              thickness="large"
              placeholder="Rechercher une équipe..."
              onChange={() => {}}
            />
          </Container>
        </Container>
        <Container>
          <Table titles={titles} data={company?.teams} />
        </Container>
      </Container>
      {isAddModalOpen && (
        <Modal
          title="Ajouter un membre"
          size="small"
          onClose={() => {
            router.back();
            setAddModalOpen(false);
          }}
        >
          <Container align="center">
            <TextField
              placeholder="Nom de l'équipe"
              thickness="large"
              size="long"
              onChange={(v) => setAddTeamName(v)}
            />
            <Button
              disabled={!addTeamName}
              thickness="large"
              size="long"
              onClick={() => {
                createTeam();
                router.back();
              }}
            >
              Ajouter
            </Button>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default Teams;
