import * as React from 'react';
import styled from 'styled-components';

const SFooter = styled.footer`
  align-items: center;
  background-color: #8888d0;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 16px;
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

const Footer = () => <SFooter data-test="app-footer" />;

export default Footer;
