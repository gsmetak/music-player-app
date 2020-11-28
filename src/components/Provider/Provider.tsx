import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ErrorBoundary } from 'react-error-boundary';

import GenericError from 'components/GenericError';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }

  body {
    font-family: Montserrat, sans-serif;
    height: 100%;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }
`;

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={GenericError}>{children}</ErrorBoundary>
    </BrowserRouter>
  </>
);

export default Provider;
