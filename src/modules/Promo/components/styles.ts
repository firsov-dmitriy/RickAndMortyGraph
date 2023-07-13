import styled from 'styled-components';
import { Box, css } from '@mui/material';

export const StyledPromoBox = styled(Box)<{ scroll?: boolean }>`
  margin-top: 20px;
  width: 100%;
  transition: ease 0.3s;
  position: relative;

  & .promo-image {
    position: absolute;
    width: 100%;

    & img {
      width: 65%;
    }

    & div {
      position: absolute;
      left: 20px;
    }

    ${({ scroll }) => {
      if (scroll) {
        return css`
          animation-name: rotate-rick;
          animation-duration: 2s;
          @keyframes rotate-rick {
            0% {
              top: -800px;
            }
            100% {
              top: 100px;
            }
          }
          top: 100px;

          & div {
            position: absolute;
            left: 750px;
            top: 50%;
          }
        `;
      } else {
        return css`
          top: -1000px;
        `;
      }
    }}
  }
`;
