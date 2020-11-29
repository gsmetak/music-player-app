import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SContainer from 'scenes/styled';
import ListItem from '../../components/ListItem/ListItem';
import { SH2, SInfoContainer, SList, STransparentButton } from './styled';

import data from '../../resources/albums.json';

interface ParamTypes {
  id: string;
}

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
