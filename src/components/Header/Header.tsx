import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const SLink = styled(Link)`
  text-decoration: none;
`;

const Header = () => (
  <SHeader>
    <SLink to="/">
      <H2>Music Player App</H2>
    </SLink>
  </SHeader>
);

export default Header;
