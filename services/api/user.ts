import { gql } from '@apollo/client';

export const queries = {
  user: gql`
    query user {
      user {
        id
        email
        firstname
        lastname
        birthdate
        emailVerified
        createdAt
        updatedAt
        verified
      }
    }
  `,
};

export const mutations = {
  companyLogin: gql`
    mutation companyLogin($input: CompanyLoginArgs!) {
      companyLogin(input: $input) {
        token
        refreshToken
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
