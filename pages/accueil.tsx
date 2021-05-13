import React from 'react';

import Container from '@components/Layouts/Container';
import Text from '@components/DataDisplay/Text';
import SideBar from '@components/Utils/SideBar';
import { ThumbsUp, Users, Calendar } from 'react-feather';
import { gql, useQuery } from '@apollo/client';

const Accueil = () => {
  const COMPANY_DATA = gql`
    query {
      company {
        id
        name
        siret
      }
    }
  `;

  const GetCompanyInfo = () => {
    const { error, loading, data } = useQuery(COMPANY_DATA, {
      context: {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjE1NDk4ODAsImp0aSI6Ijk4MmU5ZjAyLTZkMTgtNDFmZi1iMDU1LWQwYmZmYzU1MWZlMSIsInVzZXJfaWQiOiIwYTI1NmQ5NS1kZjYwLTQ0NjgtYjczYy1hOWRlMWRkMDgzZWEiLCJ1c2VyX3R5cGUiOiJDb21wYW55IiwiVG9rZW5UeXBlIjowfQ.bt4JSk8DzU9xhgEVnRVKHc7X7R9a5kFJxKmoThf8SeM`,
        },
      },
    });
    if (loading) return <p>LOADING ...</p>;
    if (error) return <p>ERROR</p>;
    return (
      <>
        Bonjour&nbsp;
        {data.company.name}
      </>
    );
  };
  return (
    <Container row align="stretch" flex={1} gap={0}>
      <SideBar sideBarCurrent="Accueil" />
      <Container flex={3} gap={8}>
        <Container justify="flex-start" align="flex-start" flex={1}>
          <Text variant="h3" color="#000000">
            <GetCompanyInfo />
          </Text>

          <Container
            row
            justify="flex-start"
            align="flex-start"
            gap={1}
            flex={1}
          >
            <Text variant="p" color="#399">
              Mercredi
            </Text>
            <Text variant="p" color="#bdbdbd">
              , 28 Avril 2021
            </Text>
          </Container>
          <Container row align="flex-start" justify="stretch" gap={0} flex={20}>
            <Container gap={0} flex="0 33%">
              <Container row bg="#f2f2f5" gap={2}>
                <Container flex={2}>
                  <Container gap={1} flex={1}>
                    <Text variant="h1">24</Text>
                  </Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#828282">
                      Candidats intéressés
                    </Text>
                  </Container>
                </Container>
                <Container flex={1}>
                  <Users size={70} color="#FFCCE4" />
                </Container>
              </Container>
            </Container>
            <Container gap={0} flex="0 33%">
              <Container row bg="#f2f2f5" gap={2}>
                <Container flex={2}>
                  <Container gap={1} flex={1}>
                    <Text variant="h1">2</Text>
                  </Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#828282">
                      Entretiens à planifier
                    </Text>
                  </Container>
                </Container>
                <Container flex={1}>
                  <ThumbsUp size={70} color="#E4C1F9" />
                </Container>
              </Container>
            </Container>
            <Container row gap={0} flex="0 33%">
              <Container row bg="#f2f2f5" gap={2}>
                <Container flex={2}>
                  <Container gap={1} flex={2}>
                    <Text variant="h1">3</Text>
                  </Container>
                  <Container row gap={1} flex={2}>
                    <Text variant="small" color="#828282">
                      Entretiens à venir
                    </Text>
                    <Text variant="small" color="#f2f2f5">
                      oui
                    </Text>
                  </Container>
                </Container>
                <Container flex={1}>
                  <Calendar size={70} color="#ED5F74" />
                </Container>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Accueil;
