import { gql } from '@apollo/client';

export const queries = {
  team: gql`
    query team($id: ID!) {
      team(id: $id) {
        id
        users {
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
              email
              firstname
              lastname
            }
          }
        }
        name
        createdAt
        updatedAt
      }
    }
  `,
  teams: gql`
    query teams($after: Cursor, $first: Int, $before: Cursor, $last: Int) {
      teams(after: $after, before: $before, first: $first, last: $last) {
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
            users {
              totalCount
            }
          }
        }
      }
    }
  `,
};

export const mutations = {
  createTeam: gql`
    mutation createTeam($input: CreateTeam!) {
      createTeam(input: $input) {
        id
        createdAt
      }
    }
  `,
  updateTeam: gql`
    mutation updateTeam($id: ID!, $input: UpdateTeam!) {
      updateTeam(id: $id, input: $input) {
        updatedAt
      }
    }
  `,
  deleteTeam: gql`
    mutation deleteTeam($id: ID!) {
      deleteTeam(id: $id)
    }
  `,
  addCompanyUserToTeam: gql`
    mutation addCompanyUserToTeam($id: ID!, $userID: ID!) {
      addCompanyUserToTeam(id: $id, userID: $userID) {
        id
      }
    }
  `,
  removeCompanyUserFromTeam: gql`
    mutation removeCompanyUserFromTeam($id: ID!, $userID: ID!) {
      removeCompanyUserFromTeam(id: $id, userID: $userID) {
        id
      }
    }
  `,
};
