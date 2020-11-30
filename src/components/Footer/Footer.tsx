import * as React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const SFooter = styled.footer`
  align-items: center;
  background-color: #8888d0;
  box-sizing: border-box;
  display: flex;
  height: 110px;
  justify-content: space-between;
  padding: 0 16px;
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 1;
`;

const Footer = ({ children }: Props) => (
  <SFooter data-test="app-footer">{children}</SFooter>
);

export default Footer;
