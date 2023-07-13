import React from 'react';

import { Layout, Promo } from '@/modules';
import { useGetCharacters } from '@/apollo/hook/characters';

export type TMainProps = {};

const _Main = () => {
  const { data } = useGetCharacters({ page: 1 });

  console.log('element', data);
  return (
    <Layout>
      <Promo />
    </Layout>
  );
};

export const Main = React.memo(_Main);
