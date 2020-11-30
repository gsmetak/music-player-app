import React from 'react';
import styled from 'styled-components';

import { H2 } from '../styled';

interface Props {
  type?: 'albums' | 'tracks';
}

const SType = styled(H2)`
  color: black;
  margin: 5em auto;
`;

const EmptyList = ({ type }: Props) => (
  <SType data-test="empty-list">No {type || 'data'} available!</SType>
);

export default EmptyList;
