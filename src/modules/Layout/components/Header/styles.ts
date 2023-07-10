import styled from 'styled-components';
import { AppBar, css } from '@mui/material';

export const StyledAppBar = styled(AppBar)<{ scroll?: boolean }>`
  ${({ scroll }) => {
    if (scroll) {
      return css`
        background-color: #457d8c;
        box-shadow: 0px 2px 4px -1px rgba(69, 125, 140, 1), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12); ;
      `;
    } else {
      return css`
        background: none;
        box-shadow: none;
      `;
    }
  }}
  & .header-logo {
    display: flex;
    font-family: monospace;
    font-weight: 700;
    letter-spacing: 0.3rem;
    color: inherit;
    text-decoration: none;
  }

  & .header-signup {
    color: white;
    border: 1px solid #aed5c5;

    &:hover {
      background: ${({ scroll }) => (!scroll ? '#66c192' : '#aed5c5')};
      color: black;
    }
  }
`;
