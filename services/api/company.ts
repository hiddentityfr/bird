import { gql } from '@apollo/client';

export const queries = {
  company: gql`
    query company {
      company {
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
          edges {
            node {
              id
              name
              createdAt
              users {
                totalCount
                edges {
                  node {
                    id
                    firstname
                    lastname
                    email
                  }
                }
              }
            }
          }
        }
        invitations {
          totalCount
          edges {
            node {
              id
              email
              firstname
              lastname
            }
          }
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
  companyUser: gql`
    query companyUser($id: ID!) {
      companyUser(id: $id) {
        id
        email
        emailVerified
        firstname
        lastname
        createdAt
        updatedAt
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
  deleteCompanyUser: gql`
    mutation deleteCompanyUser($id: ID!) {
      deleteCompanyUser(id: $id)
    }
  `,
};
