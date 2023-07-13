import { useQuery } from '@apollo/client';

import { GET_CHARACTERS } from '@/apollo/query/characters';

export type GetCharactersVariables = {
  page: number;
  filter?: Partial<{
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
  }>;
};

export type Characters = {
  info: {
    count: number;
    pages: number;
    next: number;
    prev: number;
  };
  results: {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    created: string;
  };
};
export const useGetCharacters = (variables: GetCharactersVariables) => {
  return useQuery<Characters, GetCharactersVariables>(GET_CHARACTERS, {
    variables,
  });
};
