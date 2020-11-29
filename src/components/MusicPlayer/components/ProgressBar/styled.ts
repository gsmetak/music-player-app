import styled from 'styled-components';

export const SBar = styled.div`
  background-color: white;
  border-radius: 5px;
  height: 10px;
  margin: auto 1em;
  width: 90%;
`;

export const SBarElapsed = styled.div<{ width: string }>`
  background-color: #ffcc80;
  border-radius: 50px;
  height: 100%;
  width: ${(props) => props.width}px;
`;

export const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const STime = styled.span`
  width: 5%;
`;
