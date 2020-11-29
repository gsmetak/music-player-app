import styled from 'styled-components';
import { SButton } from '../components/styled';

export const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2em auto;
  width: 60vw;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const STransparentButton = styled(SButton)`
  background-color: transparent;
`;
