import { gql } from '@apollo/client';

export const queries = {
  user: gql`
    query user($id: ID!) {
      user(id: $id) {
        id
        email
        firstname
        lastname
        birthdate
        verified
        createdAt
        updatedAt
      }
    }
  `,
  users: gql`
    query users {
      users {
        id
        email
        firstname
        lastname
        birthdate
        verified
        createdAt
        updatedAt
      }
    }
  `,
};

export const mutations = {
  login: gql`
    mutation login($input: LoginArgs!) {
      login(input: $input) {
        token
      }
    }
  `,
  createUser: gql`
    mutation createUser($input: CreateUser!) {
      createUser(input: $input) {
        id
        createdAt
      }
    }
  `,
  updateUser: gql`
    mutation createUser($id: ID!, $input: UpdateUser!) {
      updateUser(id: $id, input: $input) {
        updatedAt
      }
    }
  `,
};
