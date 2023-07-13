import React, { memo, useEffect, useState } from 'react';
import { Typography, useScrollTrigger } from '@mui/material';

import rickAndMortyImage from '../../../assets/rick-and-morty.png';

import { StyledPromoBox } from '@/modules/Promo/components/styles';

export type TPromoProps = {};

const _Promo = (props: TPromoProps) => {
  const [scroll, setScroll] = useState<undefined | boolean>();
  const triggerScroll = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  useEffect(() => {
    if (triggerScroll) {
      setScroll(true);
    }
  }, [triggerScroll]);
  return (
    <StyledPromoBox scroll={scroll}>
      <div className={'promo-image'}>
        <img
          alt={'rick-and-morty'}
          src={rickAndMortyImage}
          style={{ backgroundColor: 'transparent' }}
        />
        <Typography component={'div'} color={'white'}>
          Добро пожаловать в вселенную Rick and Morty
        </Typography>
      </div>
    </StyledPromoBox>
  );
};

export const Promo = memo(_Promo);
