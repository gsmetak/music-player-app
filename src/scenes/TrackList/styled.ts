import styled from 'styled-components';

import { H2 } from '../../components/styled';

export const SList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

export const SInfoContainer = styled.div`
  align-items: center;
  display: flex;
  margin: auto;
  text-align: center;
  width: 100%;

  & > * {
    color: #666;
  }
`;

export const SH2 = styled(H2)`
  margin: auto;
`;
