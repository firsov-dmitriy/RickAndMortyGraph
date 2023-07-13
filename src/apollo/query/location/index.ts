import { gql } from '@apollo/client';

export const LocationFragment = gql`
  fragment LocationFragment on Location {
    id
    name
    type
    dimension
    created
  }
`;

// export const GET_LOCATION = gql`
//     query
// `;
