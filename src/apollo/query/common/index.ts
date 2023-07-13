import { gql } from '@apollo/client';

export type Info = {
  count: number;
  pages: number;
  next: number;
  prev: number;
};
export const InfoFragment = gql`
  fragment InfoFragment on Info {
    count
    pages
    next
    prev
  }
`;

export type Variables<T extends { name: string }> = {
  page: number;
  filter?: Partial<T>;
};
