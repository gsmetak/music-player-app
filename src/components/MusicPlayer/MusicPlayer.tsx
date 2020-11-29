import * as React from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

import ProgressBar from './components/ProgressBar';
import Controls from './components/Controls';

const SContainer = styled.div`
  display: block;
  margin: auto;
  text-align: center;
  width: 40vw;

  & > * {
    color: white;
  }
`;

const SReactPlayer = styled(ReactPlayer)`
  position: absolute;
`;

const MusicPlayer = () => {
  const player = useRef() as React.MutableRefObject<ReactPlayer>;

  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(1);

  const url = {
    src:
      'https://docs.google.com/uc?export=download&id=1O5t235kcv5MoJYCNcx8osWRBS45CNnNB',
    type: 'audio/mp3',
  };

  const seekTo = (time: number) => {
    if (player?.current) {
      player.current!.seekTo(time, 'fraction');

      setCurrentTime(player.current!.getCurrentTime());
    }
  };

  const handlePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  return (
    <SContainer data-test="music-player">
      <span>Song Title!</span>
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        seekTo={seekTo}
      />

      <Controls isPlaying={isPlaying} togglePlay={handlePlayPause} />

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
    </SContainer>
  );
};

export default MusicPlayer;
