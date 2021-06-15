import { gql } from '@apollo/client';

export const queries = {
  matches: gql`
    query {
      matches {
        totalCount
        edges {
          node {
            id
            status
            offer {
              id
              name
            }
          }
        }
      }
    }
  `,
};

export const mutations = {};
