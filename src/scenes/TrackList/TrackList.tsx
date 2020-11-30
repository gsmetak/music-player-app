import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { SContainer, STransparentButton } from 'scenes/styled';
import { useContext } from 'react';
import ListItem from '../../components/ListItem/ListItem';
import { SH2, SInfoContainer, SList } from './styled';

import data from '../../resources/albums.json';
import SongContext from '../../components/SongContext';
import EmptyList from '../../components/EmptyList';

interface ParamTypes {
  id: string;
}

const SBackButton = styled(STransparentButton)`
  font-family: 'Montserrat';
  font-size: 18px;
  position: absolute;
`;

const { albums } = data;

const TrackList = () => {
  const history = useHistory();

  // @ts-ignore
  const { selectTrack } = useContext(SongContext);

  const { id } = useParams<ParamTypes>();
  const selectedAlbum = albums.find((album) => album.id === id);

  const handleSelectTrack = (trackId: number) => {
    if (selectedAlbum) {
      selectTrack(selectedAlbum.id, trackId);
    }
  };

  return (
    <SContainer data-test="track-list">
      <SInfoContainer>
        <SBackButton onClick={() => history.push('/')}>
          <FontAwesomeIcon icon={faChevronLeft} />
          &nbsp;Back
        </SBackButton>

        <SH2>{selectedAlbum?.title}</SH2>
      </SInfoContainer>
      {!selectedAlbum?.tracks.length ? (
        <EmptyList type="tracks" />
      ) : (
        <SList>
          {selectedAlbum?.tracks.map((track) => (
            <ListItem
              key={uuidv4()}
              artist={track.artist}
              id={track.id}
              imageUrl={track.cover}
              selectTrack={handleSelectTrack}
              title={track.title}
            />
          ))}
        </SList>
      )}
    </SContainer>
  );
};

export default TrackList;
