import { gql } from '@apollo/client';

export const queries = {
  offer: gql`
    query offer($id: ID!) {
      offer(id: $id) {
        id
        name
        contractTypes
        description
        maxSalary
        longitude
        latitude
        createdAt
        updatedAt
      }
    }
  `,
  offers: gql`
    query offers($after: Cursor, $first: Int, $before: Cursor, $last: Int) {
      offers(after: $after, before: $before, first: $first, last: $last) {
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            name
            contractTypes
            createdAt
            updatedAt
          }
        }
      }
    }
  `,
};

export const mutations = {
  createOffer: gql`
    mutation createOffer($input: CreateOffer!) {
      createOffer(input: $input) {
        id
      }
    }
  `,
  updateOffer: gql`
    mutation updateOffer($id: ID!, $input: UpdateOffer!) {
      updateOffer(id: $id, input: $input) {
        id
      }
    }
  `,
  deleteOffer: gql`
    mutation deleteOffer($id: ID!) {
      deleteOffer(id: $id)
    }
  `,
};
