import styled from 'styled-components';

export const SBar = styled.div`
  background-color: white;
  border-radius: 5px;
  height: 10px;
  margin: auto 1em;
  width: 75%;
`;

export const SBarElapsed = styled.div.attrs((props: { width: string }) => ({
  style: {
    width: `${props.width}px`,
  },
}))<{ width: string }>`
  background-color: #ffcc80;
  border-radius: 50px;
  height: 100%;
`;

export const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const STime = styled.span`
  width: 12.5%;
`;
