import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import SContainer from 'scenes/styled';
import ListItem from '../../components/ListItem/ListItem';
import { H2, SButton } from '../../components/styled';

import data from '../../resources/albums.json';

interface ParamTypes {
  id: string;
}

const SList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const SInfoContainer = styled.div`
  align-items: center;
  display: flex;
  margin: auto;
  text-align: center;
  width: 100%;

  & > * {
    color: #666;
  }
`;

const STransparentButton = styled(SButton)`
  background-color: transparent;
  font-size: 18px;
  position: absolute;
`;

const SH2 = styled(H2)`
  margin: auto;
`;

const { albums } = data;

const TrackList = () => {
  const history = useHistory();
  const { id } = useParams<ParamTypes>();
  const selectedAlbum = albums.find((album) => album.id === id);

  return (
    <SContainer data-test="track-list">
      <SInfoContainer>
        <STransparentButton onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} />
          &nbsp;Back
        </STransparentButton>

        <SH2>{selectedAlbum?.title}</SH2>
      </SInfoContainer>

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
