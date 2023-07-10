import React from 'react';

import { Layout } from '@/modules';

export type TMainProps = {};

const _Main = () => {
  return <Layout>main</Layout>;
};

export const Main = React.memo(_Main);
