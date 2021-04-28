import * as React from 'react';

import { useRouter } from 'next/router';
import { Search, Trash2 } from 'react-feather';
import { useMutation, useQuery } from '@apollo/client';

import { day, theme } from '@utils';
import { api } from '@services';

import {
  CompanyResponse,
  CompanyUser,
  CompanyUserConnection,
  CompanyVars,
  ICompany,
} from '@typings/Company';
import {
  CreateInvitationResponse,
  CreateInvitationVars,
} from '@typings/Invitation';

import { Container, Spacer } from '@components/Layouts';
import { Link, Text } from '@components/DataDisplay';
import { Button, TextField } from '@components/Inputs';
import { Modal } from '@components/Overlays';

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

const Users = (): JSX.Element => {
  const router = useRouter();

  const [isAddModalOpen, setAddModalOpen] = React.useState(false);
  const [isRemoveModalOpen, setRemoveModalOpen] = React.useState(false);
  const [removableUser, setRemovableUser] = React.useState<CompanyUser>();

  const [company, setCompany] = React.useState<ICompany>();
  const [addUser, setAddUser] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
  });

  const [createInvitation] = useMutation<
    CreateInvitationResponse,
    CreateInvitationVars
  >(api.invitation.mutations.createInvitation, {
    variables: {
      input: addUser,
    },
    onCompleted: () => {
      setAddUser({
        firstname: '',
        lastname: '',
        email: '',
      });
      setAddModalOpen(false);
    },
    onError: (error) =>
      console.error('Users > CreateInvitation > onError', error),
  });

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
        key: 'createdAt',
        label: "Date d'ajout",
        format: (p) => day(`${p}`).format('DD/MM/YYYY'),
      },
      {
        key: 'actions',
        label: 'Actions',
      },
    ],
    []
  );

  useQuery<CompanyResponse, CompanyVars>(api.company.queries.company, {
    onCompleted: (data) => setCompany(data.company),
    onError: (error) => console.error('Users > Company > onError', error),
  });

  return (
    <>
      <Container flex={0}>
        <Container row justify="space-between">
          <Container>
            <Text variant="h3">Membres</Text>
          </Container>
          <Container flex={0} row>
            <Container>
              <Link href="#add" onClick={() => setAddModalOpen(true)}>
                <Text color={theme.cvar('colorTeal')} bold variant="small">
                  + Ajouter un membre
                </Text>
              </Link>
            </Container>
            <Container>
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
        </Container>
        <Container>
          <Table
            titles={titles}
            data={company?.members}
            onRemoveModal={(p) => {
              setRemoveModalOpen(true);
              setRemovableUser(p);
            }}
          />
        </Container>
      </Container>
      {isAddModalOpen && (
        <Modal
          title="Ajouter un membre"
          size="small"
          onClose={() => {
            router.back();
            setAddModalOpen(false);
            setAddUser({
              firstname: '',
              lastname: '',
              email: '',
            });
          }}
        >
          <Container align="center">
            <TextField
              placeholder="Prénom"
              thickness="large"
              size="long"
              onChange={(v) => setAddUser({ ...addUser, firstname: v })}
            />
            <TextField
              placeholder="Nom"
              thickness="large"
              size="long"
              onChange={(v) => setAddUser({ ...addUser, lastname: v })}
            />
            <TextField
              placeholder="Adresse e-mail"
              thickness="large"
              size="long"
              onChange={(v) => setAddUser({ ...addUser, email: v })}
            />
            <Button
              disabled={
                !(addUser.firstname && addUser.lastname && addUser.email)
              }
              thickness="large"
              size="long"
              onClick={() => {
                createInvitation();
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
            setRemovableUser(undefined);
            setRemoveModalOpen(false);
            router.back();
          }}
        >
          <Container>
            <Container>
              <Text align="center" variant="small">
                Vous êtes sur le point de supprimer le membre :
              </Text>
              <Container>
                <Text bold align="center" variant="small">
                  {removableUser?.firstname && removableUser.lastname
                    ? `${removableUser.firstname} ${removableUser.lastname}`
                    : removableUser?.email}
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
                  setRemovableUser(undefined);
                  setRemoveModalOpen(false);
                  router.back();
                }}
              >
                Annuler
              </Button>
              <Button
                onClick={() => {
                  // TODO: call a handleDelete function that calls deleteCompanyUser
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

export default Users;
