import * as React from 'react';
import styled from 'styled-components';

import { H2 } from 'components/styled';

const SHeader = styled.header`
  align-items: center;
  background-color: #8888d0;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 16px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Header = () => (
  <SHeader>
    <H2>Music Player App</H2>
  </SHeader>
);

export default Header;
