import React, { useState } from 'react';

import SongContext from '../SongContext';

import data from '../../../resources/albums.json';
import { Song } from '../types';

interface Props {
  children: React.ReactNode;
}

const SongsProvider = ({ children }: Props) => {
  const [selectedTrack, setSelectedTrack] = useState<Song | undefined>();

  const selectTrack = (albumId: string, trackId: number) => {
    setSelectedTrack(
      () =>
        data.albums.find((album) => album.id === albumId)?.tracks[trackId - 1],
    );
  };

  const selectPrevious = () => {
    if (!selectedTrack) {
      return;
    }

    const { tracks } = data.albums.find(
      (album) => album.id === selectedTrack.album_id,
    )!;

    if (selectedTrack.id === 1) {
      setSelectedTrack(tracks[tracks.length - 1]);
    } else {
      setSelectedTrack((prevState) => prevState && tracks[prevState.id - 2]);
    }
  };

  const selectNext = () => {
    if (!selectedTrack) {
      return;
    }

    const { tracks } = data.albums.find(
      (album) => album.id === selectedTrack.album_id,
    )!;

    if (selectedTrack.id === tracks.length) {
      setSelectedTrack(tracks[0]);
    } else {
      setSelectedTrack((prevState) => prevState && tracks[prevState.id]);
    }
  };

  return (
    <SongContext.Provider
      value={{
        selectedTrack,
        selectTrack,
        selectPrevious,
        selectNext,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongsProvider;
