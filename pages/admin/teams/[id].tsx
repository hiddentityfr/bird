import * as React from 'react';
import { useRouter } from 'next/router';
import Loader from 'react-loader-spinner';

import { day, theme } from '@utils';

import { AddCompanyUserToTeamVars, ITeam } from '@typings/Team';

import { Container, Spacer } from '@components/Layouts';
import { Link, Text } from '@components/DataDisplay';

import { AuthActions, useAuth } from '@contexts/AuthContext';
import { Trash2 } from 'react-feather';
import {
  CompanyResponse,
  CompanyUser,
  CompanyUserConnection,
  CompanyVars,
} from '@typings/Company';
import { Modal } from '@components/Overlays';
import { Autocomplete, Button } from '@components/Inputs';
import { useLazyQuery, useMutation } from '@apollo/client';
import { api } from '@services';

interface TitleHead {
  label: string;
  key: keyof CompanyUser | 'actions';
  format?: <T>(p: T) => string;
}

interface TableProps {
  titles: TitleHead[];
  data?: CompanyUserConnection;
  onRemoveModal: (p: CompanyUser) => void;
}

const Table = ({ titles, data, onRemoveModal }: TableProps): JSX.Element => {
  return (
    <Container gap={0}>
      <Container row justify="space-evenly" align="flex-start">
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
                  <Link key={d.node.id} href={`/admin/users/${d.node.id}`}>
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

const Team = (): JSX.Element => {
  const router = useRouter();
  const [{ company }, dispatch] = useAuth();

  const [team, setTeam] = React.useState<ITeam>();
  const [isAddModalOpen, setAddModalOpen] = React.useState(false);
  const [userToAdd, setUserToAdd] = React.useState<CompanyUser>();

  const [fetchCompany] = useLazyQuery<CompanyResponse, CompanyVars>(
    api.company.queries.company,
    {
      fetchPolicy: 'network-only',
      onCompleted: (data) => {
        dispatch({
          type: AuthActions.UPDATE_COMPANY,
          props: {
            company: data.company,
          },
        });
      },
    }
  );

  const [addCompanyUserToTeam] = useMutation<unknown, AddCompanyUserToTeamVars>(
    api.team.mutations.addCompanyUserToTeam,
    {
      onCompleted: () => {
        fetchCompany();
        setUserToAdd(undefined);
      },
    }
  );

  React.useEffect(() => {
    if (company?.teams?.edges) {
      const foundTeam = company.teams.edges.find(
        (e) => e.node.id === (router.query.id as string)
      );
      setTeam(foundTeam?.node);
    }
  }, [company?.teams?.edges, router.query.id]);

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
            <Text variant="h3">Équipe</Text>
          </Container>
        </Container>
        {team ? (
          <Container>
            <Container row>
              <Container gap={0}>
                <Text variant="h4">{team.name}</Text>
              </Container>
              <Link
                href={`${team.id}#add-member`}
                onClick={() => setAddModalOpen(true)}
              >
                <Text color={theme.cvar('colorTeal')} bold variant="small">
                  + Ajouter un membre à l&apos;équipe
                </Text>
              </Link>
            </Container>
            {team.users.totalCount > 0 && (
              <Table
                titles={titles}
                data={team.users}
                onRemoveModal={() => {
                  // setRemoveModalOpen(true);
                  // setRemovableUser(p);
                }}
              />
            )}
            <Container>
              <Text variant="small">
                {`Équipe créée le ${day(team.createdAt).format('DD/MM/YYYY')}`}
              </Text>
              <Text variant="small">
                {`Dernière modification le ${day(team.updatedAt).format(
                  'DD/MM/YYYY'
                )}`}
              </Text>
            </Container>
          </Container>
        ) : (
          <Container align="center" flex={0}>
            <div style={{ transform: 'scale(0.5)' }}>
              <Loader color="#000" width={100} height={100} type="ThreeDots" />
            </div>
          </Container>
        )}
      </Container>
      {isAddModalOpen && (
        <Modal
          title="Ajouter un membre"
          size="small"
          onClose={() => {
            router.back();
            setUserToAdd(undefined);
            setAddModalOpen(false);
          }}
        >
          <Container align="stretch">
            <Autocomplete
              placeholder="Tapez le nom d'un membre"
              thickness="large"
              size="long"
              options={
                company?.members?.edges
                  ?.filter(
                    (e) =>
                      !team?.users.edges?.find((u) => u.node.id === e.node.id)
                  )
                  .map((e) => ({
                    value: e.node,
                    label: `${e.node.firstname} ${e.node.lastname} (${e.node.email})`,
                  })) ?? []
              }
              onSelect={(e) => setUserToAdd(e)}
              onChange={() => setUserToAdd(undefined)}
            />
            <Button
              disabled={!userToAdd}
              thickness="large"
              size="long"
              onClick={() => {
                router.back();
                addCompanyUserToTeam({
                  variables: {
                    id: team?.id as string,
                    userID: userToAdd?.id as string,
                  },
                });
                setAddModalOpen(false);
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

export default Team;
