import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { H3 } from 'components/styled';

interface Props {
  id: string;
  imageUrl: string;
  title: string;
}

const SCard = styled.div`
  background: #fff;
  border-radius: 0.6em;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  cursor: pointer;
  margin: 2em auto;
  overflow: hidden;
  transition: all ease 200ms;
  width: 14vw;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  @media (max-width: 1024px) {
    width: 18vw;
  }

  @media (max-width: 768px) {
    width: 60vw;
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

const SLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Card = ({ id, imageUrl, title }: Props) => {
  return (
    <SCard>
      <SLink to={`albums/${id}`}>
        <SImage data-test="card-image" src={imageUrl} />
        <SH3>{title}</SH3>
      </SLink>
    </SCard>
  );
};

export default Card;
