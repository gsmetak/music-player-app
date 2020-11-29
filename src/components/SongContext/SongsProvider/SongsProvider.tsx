import React, { useState } from 'react';

import SongContext from '../SongContext';

interface Props {
  children: React.ReactNode;
}

const SongsProvider = ({ children }: Props) => {
  const [selectedTrack, setSelectedTrack] = useState();

  const selectTrack = (albumId: string, trackId: number) => {
    setSelectedTrack(undefined);
    console.log('select track', albumId, trackId);
  };

  const getPrevious = () => {
    console.log('get previous');
  };

  const getNext = () => {
    console.log('get next');
  };

  return (
    <SongContext.Provider
      value={{
        selectedTrack,
        selectTrack,
        getPrevious,
        getNext,
      }}
    >
      {children}
    </SongContext.Provider>
  );
};

export default SongsProvider;
