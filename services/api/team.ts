import { gql } from '@apollo/client';

export const queries = {
  team: gql`
    query team($id: ID!) {
      team(id: $id) {
        id
        name
        createdAt
        updatedAt
      }
    }
  `,
  teams: gql`
    query teams {
      teams {
        id
        name
        createdAt
        updatedAt
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
};
