import React from 'react';

import ErrorLayout from 'components/ErrorLayout';

import styled from 'styled-components';
import { H2, SButton } from '../styled';

const SH2 = styled(H2)`
  color: black;
  margin-bottom: 8px;
`;

const SErrorInfoContainer = styled.div`
  margin-bottom: 40px;
`;

const GenericError = ({ resetErrorBoundary }: any) => (
  <ErrorLayout>
    <title>Error</title>

    <SErrorInfoContainer>
      <SH2>Oops, error!</SH2>
      <span>Sorry but it looks like something went wrong.</span>
    </SErrorInfoContainer>

    <SButton onClick={resetErrorBoundary}>Reload Page</SButton>
  </ErrorLayout>
);

export default GenericError;
