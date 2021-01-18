import { gql } from '@apollo/client';

export const queries = {
  company: gql`
    query company($id: ID!) {
      company(id: $id) {
        id
        siret
      }
    }
  `,
  companies: gql`
    query companies {
      companies {
        id
        siret
      }
    }
  `,
};

export const mutations = {
  createCompany: gql`
    mutation createCompany($input: CreateCompany!) {
      createCompany(input: $input) {
        id
      }
    }
  `,
  updateCompany: gql`
    mutation updateCompany($id: ID!, $input: UpdateCompany!) {
      updateCompany(id: $id, input: $input) {
        id
      }
    }
  `,
  deleteCompany: gql`
    mutation deleteCompany($id: ID!) {
      deleteCompany(id: $id)
    }
  `,
};
