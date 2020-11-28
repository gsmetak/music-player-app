import * as React from 'react';
import styled from 'styled-components';

import H2 from 'components/styled';

const SHeader = styled.header`
  align-items: center;
  background-color: #8888d0;
  display: flex;
  position: fixed;
  width: 100%;
`;

export const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-style: inherit;
  font-family: 'Montserrat';
  letter-spacing: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
`;

const Header = () => (
  <SHeader>
    <H2>Music Player App</H2>
  </SHeader>
);

export default Header;
