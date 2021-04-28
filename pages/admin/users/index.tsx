import * as React from 'react';

import { useRouter } from 'next/router';
import { Search } from 'react-feather';
import { useQuery } from '@apollo/client';

import { day, theme } from '@utils';
import { api } from '@services';

import {
  CompanyVars,
  CompanyResponse,
  ICompany,
  CompanyUserConnection,
  CompanyUser,
} from '@typings/Company';

import { Container, Spacer } from '@components/Layouts';
import { Link, Text } from '@components/DataDisplay';
import { Button, TextField } from '@components/Inputs';
import { Modal } from '@components/Overlays';

interface TitleHead {
  label: string;
  key: keyof CompanyUser;
  format?: <T>(p: T) => string;
}

interface TableProps {
  titles: TitleHead[];
  data?: CompanyUserConnection;
}

const Table = ({ titles, data }: TableProps): JSX.Element => {
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
                          {t.format ? t.format(d.node[t.key]) : d.node[t.key]}
                        </Text>
                      </Container>
                    </Container>
                    <Spacer size={1} />
                  </Container>
                );
              })
            ) : (
              <Text variant="small" align="center">
                Loading...
              </Text>
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
  const [company, setCompany] = React.useState<ICompany>();

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
    ],
    []
  );

  useQuery<CompanyResponse, CompanyVars>(api.company.queries.company, {
    variables: {
      id: '20ca8b44-913d-46d8-973f-ee0ea172f85d',
    },
    onCompleted: (data) => setCompany(data.company),
    onError: (error) => console.error('Users > Company > onError', error),
  });

  // const users = React.useMemo(
  //   () => [
  //     {
  //       lastname: 'Ordonez',
  //       firstname: 'Antoine',
  //       email: 'antoine@hiddentity.fr',
  //       team: 'Hiddentity',
  //       date: day().subtract(1, 'month').subtract(10, 'd').format('DD/MM/YYYY'),
  //     },
  //     {
  //       lastname: 'Sainson',
  //       firstname: 'Yann',
  //       email: 'yann@hiddentity.fr',
  //       team: 'Hiddentity',
  //       date: day().subtract(4, 'month').format('DD/MM/YYYY'),
  //     },
  //     {
  //       lastname: 'Colombier',
  //       firstname: 'Adrien',
  //       email: 'adrien@hiddentity.fr',
  //       team: 'Hiddentity',
  //       date: day().subtract(8, 'month').subtract(22, 'd').format('DD/MM/YYYY'),
  //     },
  //     {
  //       lastname: 'Flayac',
  //       firstname: 'Quentin',
  //       email: 'quentin@hiddentity.fr',
  //       team: 'Hiddentity',
  //       date: day().subtract(8, 'month').subtract(22, 'd').format('DD/MM/YYYY'),
  //     },
  //     {
  //       lastname: 'Kesisoglou',
  //       firstname: 'Ioannis',
  //       email: 'ioannis@hiddentity.fr',
  //       team: 'Hiddentity',
  //       date: day().subtract(8, 'month').subtract(22, 'd').format('DD/MM/YYYY'),
  //     },
  //     {
  //       lastname: 'Rieux',
  //       firstname: 'Antonin',
  //       email: 'antonin@hiddentity.fr',
  //       team: 'Hiddentity',
  //       date: day().subtract(8, 'month').subtract(22, 'd').format('DD/MM/YYYY'),
  //     },
  //   ],
  //   []
  // );

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
          {<Table titles={titles} data={company?.members} />}
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
              placeholder="Prénom"
              thickness="large"
              size="long"
              onChange={() => {}}
            />
            <TextField
              placeholder="Nom"
              thickness="large"
              size="long"
              onChange={() => {}}
            />
            <TextField
              placeholder="Adresse e-mail"
              thickness="large"
              size="long"
              onChange={() => {}}
            />
            <Button thickness="large" size="long">
              Ajouter
            </Button>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default Users;
