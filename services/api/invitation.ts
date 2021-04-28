import { gql } from '@apollo/client';

export const queries = {
  invitation: gql`
    query company($id: ID!) {
      invitation(id: $id) {
        id
        firstname
        lastname
        email
        company {
          id
        }
        from {
          id
        }
        createdAt
        updatedAt
      }
    }
  `,
};

export const mutations = {
  createInvitation: gql`
    mutation createInvitation($input: CreateInvitation!) {
      createInvitation(input: $input) {
        id
      }
    }
  `,
  updateInvitation: gql`
    mutation updateInvitation($id: ID!, $input: UpdateInvitation!) {
      updateInvitation(id: $id, input: $input) {
        id
      }
    }
  `,
  deleteInvitation: gql`
    mutation deleteInvitation($id: ID!) {
      deleteInvitation(id: $id)
    }
  `,
  acceptInvitation: gql`
    mutation acceptInvitation($id: ID!, $input: AcceptInvitation!) {
      acceptInvitation(id: $id, input: $input) {
        id
      }
    }
  `,
};
