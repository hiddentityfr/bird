import React from 'react';

import { MapPin } from 'react-feather';
import Container from '@components/Layouts/Container';
import Text from '@components/DataDisplay/Text';
import TextField from '@components/Inputs/TextField';
import SideBar from '@components/Utils/SideBar';
import { gql, useQuery } from '@apollo/client';
import RoundCard from '@components/Utils/RoundCard';

const Offres = () => {

  const OFFRES_DATA = gql`
  query {
    company {
      offers {
        totalCount
        edges {node {id name description}}
      }
    }
  }
`;

const GetOffresInfo = () => {
  const { error, loading, data } = useQuery(OFFRES_DATA, {
    context: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjE1NDk4ODAsImp0aSI6Ijk4MmU5ZjAyLTZkMTgtNDFmZi1iMDU1LWQwYmZmYzU1MWZlMSIsInVzZXJfaWQiOiIwYTI1NmQ5NS1kZjYwLTQ0NjgtYjczYy1hOWRlMWRkMDgzZWEiLCJ1c2VyX3R5cGUiOiJDb21wYW55IiwiVG9rZW5UeXBlIjowfQ.bt4JSk8DzU9xhgEVnRVKHc7X7R9a5kFJxKmoThf8SeM`,
      },
    },
    });
    if (loading) return <p>LOADING ...</p>;
    if (error) return <p>ERROR</p>;
    const offers = data.company.offers.edges.map((offer: any) =>
      <RoundCard title={offer.node.name} />
    )
    return (
      <>
        {offers}
      </>
    )
  };

  return (
    <Container row align="stretch" flex={1} gap={0}>
      <SideBar sideBarCurrent="Offres"/>
      <Container flex={3} gap={8}>
        <Container row justify="space-between" flex={2} gap={6}>
          <Text variant="h2">Offres</Text>
          <TextField
              size="medium"
              onChange={() => {}}
              type="text"
              placeholder="Rechercher une offre..."
            />
        </Container>
        <Container row flex={1} gap={0}>
          <Container row justify="space-between" gap={0}>
            <Container row justify="space-around" flex={1} gap={0}>
              <Text variant="h5" color="#bdbdbd">Toutes</Text>
              <Text variant="h5" color="#000">Actives</Text>
              <Text variant="h5" color="#bdbdbd">Inactives</Text>
            </Container>
            <Container row justify="flex-end" flex={3} gap={0}>
              <Text variant="h5" color="#339999">+ NOUVELLE OFFRE</Text>
            </Container>
          </Container>
        </Container>
        <Container justify="flex-start" flex={7} gap={0}>
          <Container row justify="space-around" align="flex-start" gap={0}>
            <GetOffresInfo />
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

export default Offres;
