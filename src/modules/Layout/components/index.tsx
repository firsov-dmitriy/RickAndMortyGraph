import React, { memo, ReactNode } from 'react';
import { Box, Container } from '@mui/material';

import { Header } from '@/modules/Layout/components/Header';
import { Footer } from '@/modules/Layout/components/Footer';

export type TLayoutProps = {
  children?: ReactNode;
};

const _Layout = (props: TLayoutProps) => {
  const { children } = props;
  return (
    <Box
      sx={{
        background: 'linear-gradient(65deg, rgba(69,125,140,1) 62%, rgba(102,193,146,1) 100%);',
      }}
    >
      <Header />
      <Container
        sx={{
          height: '2000px',
          pt: '64px',
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export const Layout = memo(_Layout);
