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

const MusicPlayer = () => {
  const player = useRef() as React.MutableRefObject<ReactPlayer>;

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // @ts-ignore
  const { selectedTrack, selectNext, selectPrevious } = useContext(SongContext);

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
      <H3>{selectedTrack && selectedTrack.title}</H3>
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        seekTo={seekTo}
      />

      <Controls
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
          onProgress={(e: any) => {
            setCurrentTime(Math.round(e.playedSeconds * 100) / 100);
          }}
        />
      )}
    </SContainer>
  );
};

export default MusicPlayer;
