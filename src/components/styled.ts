import styled from 'styled-components';

export const H2 = styled.h2`
  color: white;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
  padding: 0;
`;

export const H3 = styled.h3`
  color: white;
  font-weight: 400;
  line-height: 32px;
  margin: 0;
  padding: 0;
`;

export const SButton = styled.button`
  align-items: center;
  background-color: #8888d0;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0;
  outline: none;
  position: relative;

  font-size: 1rem;
  line-height: 1.14;
  padding: 10px;
  height: 40px;

  &:focus {
    box-shadow: 0 0 0 3px #dcdcff;
  }
`;

export const SErrorInfoContainer = styled.div`
  margin-bottom: 40px;
`;
