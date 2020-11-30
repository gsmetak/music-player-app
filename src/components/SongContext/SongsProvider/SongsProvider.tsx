import React, { useState } from 'react';

import SongContext from '../SongContext';
import { Song } from '../types';

import data from '../../../resources/albums.json';

interface Props {
  children: React.ReactNode;
}

const SongsProvider = ({ children }: Props) => {
  const [selectedTrack, setSelectedTrack] = useState<Song | undefined>();
  const [isSongLoading, setIsSongLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const selectTrack = (albumId: string, trackId: number) => {
    setIsSongLoading(true);
    setHasError(false);

    setSelectedTrack(
      () =>
        data.albums.find((album) => album.id === albumId)?.tracks[trackId - 1],
    );
  };

  const selectPrevious = () => {
    if (!selectedTrack) {
      return;
    }

    setIsSongLoading(true);

    const { tracks } = data.albums.find(
      (album) => album.id === selectedTrack.album_id,
    )!;

    // If the current track is the first one of the album, select the last one.
    if (selectedTrack.id === 1) {
      selectTrack(selectedTrack.album_id, tracks.length);
    } else {
      selectTrack(selectedTrack.album_id, selectedTrack.id - 1);
    }
  };

  const selectNext = () => {
    if (!selectedTrack) {
      return;
    }

    setIsSongLoading(true);

    const { tracks } = data.albums.find(
      (album) => album.id === selectedTrack.album_id,
    )!;

    // If the current track is the last one of the album, select the first one.
    if (selectedTrack.id === tracks.length) {
      selectTrack(selectedTrack.album_id, 1);
    } else {
      selectTrack(selectedTrack.album_id, selectedTrack.id + 1);
    }
  };

  return (
    <SongContext.Provider
      value={{
        selectedTrack,
        selectTrack,
        selectPrevious,
        selectNext,
        isSongLoading,
        setIsSongLoading,
        hasError,
        setHasError,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongsProvider;
