import * as React from 'react';
import styled from 'styled-components';
import { H3 } from 'components/styled';

interface Props {
  imageUrl: string;
  title: string;
}

const SCard = styled.div`
  background: #fff;
  width: 43vh;
  border-radius: 0.6em;
  margin: 1em;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }
`;

const SImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const SH3 = styled(H3)`
  color: black;
  padding: 1.2em;
  text-align: center;
`;

const Card = ({ imageUrl, title }: Props) => {
  return (
    <SCard>
      <SImage data-test="card-image" src={imageUrl} />
      <SH3>{title}</SH3>
    </SCard>
  );
};

export default Card;
