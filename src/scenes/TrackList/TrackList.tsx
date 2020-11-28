import * as React from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import SContainer from 'scenes/styled';

import styled from 'styled-components';
import data from '../../resources/albums.json';
import ListItem from '../../components/ListItem/ListItem';

interface ParamTypes {
  id: string;
}

const SList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const { albums } = data;

const TrackList = () => {
  const { id } = useParams<ParamTypes>();
  const selectedAlbum = albums.find((album) => album.id === id);

  return (
    <SContainer data-test="track-list">
      <SList>
        {selectedAlbum?.tracks.map((track) => (
          <ListItem
            key={uuidv4()}
            artist={track.artist}
            imageUrl={track.cover}
            title={track.title}
          />
        ))}
      </SList>
    </SContainer>
  );
};

export default TrackList;
