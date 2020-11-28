import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

interface Props {
  children: React.ReactNode | React.ReactElement;
  hasHeader?: boolean;
}

const SContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  justify-content: center;
  text-align: center;
`;

const ErrorLayout = ({ hasHeader = true, children }: Props) => (
  <>
    {hasHeader && <Header />}
    <SContainer>{children}</SContainer>
  </>
);

export default ErrorLayout;
