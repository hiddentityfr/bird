import * as React from 'react';

import { Search, Trash2 } from 'react-feather';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';

import { api } from '@services';
import { day, theme } from '@utils';

import {
  CreateTeamResponse,
  CreateTeamVars,
  DeleteTeamResponse,
  DeleteTeamVars,
  ITeam,
  TeamConnection,
} from '@typings/Team';
import {
  CompanyResponse,
  CompanyUserConnection,
  CompanyVars,
} from '@typings/Company';

import { Container, Spacer } from '@components/Layouts';
import { Link, Text } from '@components/DataDisplay';
import { Button, TextField } from '@components/Inputs';
import { Modal } from '@components/Overlays';
import { AuthActions, useAuth } from '@contexts/AuthContext';

type TitleHead = {
  label: string;
  key: keyof ITeam | 'actions';
  format?: <T>(p: T) => string;
};

interface TableProps {
  titles: TitleHead[];
  data?: TeamConnection;
  onRemoveModal: (p: ITeam) => void;
}

const Table = ({ titles, data, onRemoveModal }: TableProps): JSX.Element => {
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
                  <Link href={`/admin/teams/${d.node.id}`} key={d.node.id}>
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
                          {t.key !== 'actions' ? (
                            <Text key={d.node.id} variant="small">
                              {t.format
                                ? t.format(d.node[t.key] ?? '-')
                                : d.node[t.key] ?? '-'}
                            </Text>
                          ) : (
                            <Link
                              href="#delete"
                              onClick={() => onRemoveModal(d.node)}
                            >
                              <Trash2 size={16} color="red" />
                            </Link>
                          )}
                        </Container>
                      </Container>
                      <Spacer size={1} />
                    </Container>
                  </Link>
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
  const [{ company }, dispatch] = useAuth();
  const [isAddModalOpen, setAddModalOpen] = React.useState(false);
  const [isRemoveModalOpen, setRemoveModalOpen] = React.useState(false);

  const [addTeamName, setAddTeamName] = React.useState<string>('');
  const [removableTeam, setRemovableTeam] = React.useState<ITeam>();

  const { refetch } = useQuery<CompanyResponse, CompanyVars>(
    api.company.queries.company,
    {
      fetchPolicy: 'cache-and-network',
      onCompleted: (data) =>
        dispatch({
          type: AuthActions.UPDATE_COMPANY,
          props: {
            company: data.company,
          },
        }),
      onError: (error) => console.error('Teams > Company > onError', error),
    }
  );

  const [createTeam] = useMutation<CreateTeamResponse, CreateTeamVars>(
    api.team.mutations.createTeam,
    {
      variables: {
        input: {
          name: addTeamName,
          companyID: company?.id ? company.id : '',
        },
      },
      onCompleted: () => {
        setAddTeamName('');
        setAddModalOpen(false);
        refetch();
      },
      onError: (error) => console.error('Teams > CreateTeam > onError', error),
    }
  );

  const [deleteTeam] = useMutation<DeleteTeamResponse, DeleteTeamVars>(
    api.team.mutations.deleteTeam,
    {
      variables: {
        id: removableTeam?.id ?? '',
      },
      onCompleted: () => {
        setRemovableTeam(undefined);
        refetch();
      },
      onError: (error) => console.error('Teams > DeleteTeam > onError', error),
    }
  );

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
      {
        key: 'actions',
        label: 'Actions',
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
          <Table
            onRemoveModal={(p) => {
              setRemoveModalOpen(true);
              setRemovableTeam(p);
            }}
            titles={titles}
            data={company?.teams}
          />
        </Container>
      </Container>
      {isAddModalOpen && (
        <Modal
          title="Ajouter une équipe"
          size="small"
          onClose={() => {
            router.back();
            setAddModalOpen(false);
            setAddTeamName('');
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
      {isRemoveModalOpen && (
        <Modal
          size="small"
          title="Supprimer le membre ?"
          onClose={() => {
            setRemovableTeam(undefined);
            setRemoveModalOpen(false);
            router.back();
          }}
        >
          <Container>
            <Container>
              <Text align="center" variant="small">
                Vous êtes sur le point de supprimer l&apos;équipe :
              </Text>
              <Container>
                <Text bold align="center" variant="small">
                  {removableTeam?.name}
                </Text>
              </Container>
              <Text align="center" variant="small">
                Cette action est irréversible.
              </Text>
            </Container>
            <Container row>
              <Button
                variant="secondary"
                onClick={() => {
                  setRemovableTeam(undefined);
                  setRemoveModalOpen(false);
                  router.back();
                }}
              >
                Annuler
              </Button>
              <Button
                onClick={() => {
                  deleteTeam();
                  setRemoveModalOpen(false);
                  router.back();
                }}
              >
                Confirmer
              </Button>
            </Container>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default Teams;
