import * as React from 'react';

import styled from 'styled-components';

import Header from '../Header';

const SLayout = styled.div`
  & > * {
    font-family: 'Montserrat', sans-serif;
  }
`;

const Layout = () => (
  <SLayout>
    <Header />
  </SLayout>
);

export default Layout;
