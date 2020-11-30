import * as React from 'react';
import { useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

import ProgressBar from './components/ProgressBar';
import Controls from './components/Controls';
import SongContext from '../SongContext';
import { H3 } from '../styled';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
  text-align: center;
  width: 40vw;

  & > * {
    color: white;
  }

  @media (max-width: 1024px) {
    width: 60vw;
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

const SReactPlayer = styled(ReactPlayer)`
  display: none;
`;

const STitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  height: 15%;

  & > * {
    margin: auto 0.5em;
  }
`;

const MusicPlayer = () => {
  const player = useRef() as React.MutableRefObject<ReactPlayer>;

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const {
    selectedTrack,
    selectNext,
    selectPrevious,
    isSongLoading,
    setIsSongLoading,
  } = useContext(SongContext)!;

  const url = {
    src: selectedTrack?.url,
    type: 'audio/mp3',
  };

  const seekTo = (time: number) => {
    if (player?.current) {
      player.current.seekTo(time, 'fraction');

      setCurrentTime(player.current!.getCurrentTime());
    }
  };

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <SContainer data-test="music-player">
      <STitleContainer>
        {selectedTrack && <H3>{selectedTrack.title}</H3>}
      </STitleContainer>
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        seekTo={seekTo}
      />

      <Controls
        isDisabled={!selectedTrack}
        isLoading={isSongLoading}
        isPlaying={isPlaying}
        selectNext={selectNext}
        selectPrevious={selectPrevious}
        togglePlay={handlePlayPause}
      />

      {selectedTrack && (
        <SReactPlayer
          ref={player}
          playing={isPlaying}
          progressInterval={100}
          url={[url]}
          onDuration={(e: any) => {
            setDuration(Math.round(e));
          }}
          onEnded={() => selectNext()}
          onProgress={(e: any) => {
            setCurrentTime(Math.round(e.playedSeconds * 100) / 100);
          }}
          onReady={() => setIsSongLoading(false)}
        />
      )}
    </SContainer>
  );
};

export default MusicPlayer;
