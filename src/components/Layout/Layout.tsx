import * as React from 'react';

import styled from 'styled-components';

import Header from '../Header';

const SLayout = styled.div`
  display: flex;
  height: 100%;
`;

const SMain = styled.main`
  align-items: flex-start;
  flex: 1;
  height: calc(100vh - 60px);
  min-height: 200px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  width: 100%;
`;

const Layout = () => (
  <>
    <Header />
    <SLayout>
      <SMain />
    </SLayout>
  </>
);

export default Layout;
