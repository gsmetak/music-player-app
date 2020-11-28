import * as React from 'react';

import SContainer from 'scenes/styled';
import Card from '../../components/Card';

import data from '../../resources/albums.json';

const { albums } = data;

const AlbumList = () => (
  <SContainer data-test="album-list">
    {albums.map((album) => (
      <Card
        key={album.id}
        id={album.id}
        imageUrl={album.cover}
        title={album.title}
      />
    ))}
  </SContainer>
);

export default AlbumList;
