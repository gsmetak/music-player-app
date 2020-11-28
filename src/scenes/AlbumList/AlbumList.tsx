import * as React from 'react';
import styled from 'styled-components';

import Card from '../../components/Card';

import data from '../../resources/albums.json';

const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;

  @media (min-width: 768px) {
    width: 60em;
  }
`;

const { albums } = data;

const AlbumList = () => (
  <SContainer>
    {albums.map((album) => (
      <Card key={album.id} imageUrl={album.cover} title={album.title} />
    ))}
  </SContainer>
);

export default AlbumList;
