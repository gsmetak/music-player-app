import * as React from 'react';
import styled from 'styled-components';

import { H3, H2 } from 'components/styled';

interface Props {
  artist: string;
  imageUrl: string;
  title: string;
}

const SListItem = styled.li`
  display: flex;
  background: #fff;
  border-radius: 0.6em;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  cursor: pointer;
  margin: 1em auto;
  padding: 5px;
  overflow: hidden;
  transition: all ease 200ms;
  width: 50vw;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12),
      0 8px 32px -8px hsla(0, 0%, 0%, 0.14),
      0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }

  @media (max-width: 768px) {
    width: 85vw;
    padding: 10px 5px;
  }
`;

const SImage = styled.img`
  border-radius: 0.6em;
  width: 4vw;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 15vw;
  }
`;

const SH3 = styled(H3)`
  color: black;
  margin: auto 20px;
`;

const SH2 = styled(H2)`
  color: black;
  margin: auto 10px;
`;

const ListItem = ({ artist, imageUrl, title }: Props) => {
  return (
    <SListItem>
      <SImage data-test="item-image" src={imageUrl} />
      <SH2>{title}</SH2>
      <SH3>by {artist}</SH3>
    </SListItem>
  );
};

export default ListItem;
