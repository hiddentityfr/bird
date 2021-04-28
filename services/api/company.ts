import { gql } from '@apollo/client';

export const queries = {
  company: gql`
    query company($id: ID!) {
      company(id: $id) {
        id
        siret
        name
        members {
          totalCount
          edges {
            node {
              id
              email
              firstname
              lastname
              createdAt
              updatedAt
            }
          }
        }
        teams {
          totalCount
        }
        invitations {
          totalCount
        }
        offers {
          totalCount
        }
      }
    }
  `,
  companies: gql`
    query companies($after: Cursor, $first: Int, $before: Cursor, $last: Int) {
      companies(after: $after, before: $before, first: $first, last: $last) {
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
            siret
            members {
              totalCount
            }
            teams {
              totalCount
            }
            offers {
              totalCount
            }
          }
        }
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
