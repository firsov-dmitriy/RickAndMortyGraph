import { gql } from '@apollo/client';

import { LocationFragment } from '@/apollo/query/location';
import { InfoFragment } from '@/apollo/query/common';

export const CharactersFragment = gql`
  ${LocationFragment}
  fragment CharactersFragment on Characters {
    results {
      id
      name
      status
      species
      type
      gender
      image
      created
      location {
        ...LocationFragment
      }
    }
  }
`;
export const GET_CHARACTERS = gql`
  ${CharactersFragment}
  ${InfoFragment}
  query GetCharacters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      ...CharactersFragment
      info {
        ...InfoFragment
      }
    }
  }
`;
