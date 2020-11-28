import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { SButton, SErrorInfoContainer, H2 } from 'components/styled';
import ErrorLayout from 'components/ErrorLayout';

const SLink = styled(Link)`
  text-decoration: none;
`;

const NotFound = () => (
  <ErrorLayout hasHeader={false}>
    <title>Not found</title>

    <SErrorInfoContainer>
      <H2>Oops, error!</H2>
      <span>Sorry, the page you are looking for does not exist.</span>
    </SErrorInfoContainer>

    <SLink to="/">
      <SButton>Return back</SButton>
    </SLink>
  </ErrorLayout>
);

export default NotFound;
