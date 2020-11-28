import styled from 'styled-components';

const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 60vw;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export default SContainer;
