import * as React from 'react';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepBackward,
  faPlay,
  faPause,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';
import ReactPlayer from 'react-player';

import { STransparentButton } from '../../scenes/styled';
import ProgressBar from './components/ProgressBar';

const SContainer = styled.div`
  display: block;
  margin: auto;
  text-align: center;
  width: 40vw;

  & > * {
    color: white;
  }
`;

const SControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.4em auto;
  width: 25%;

  & > * {
    font-size: 2.5rem;
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

  return (
    <SContainer data-test="music-player">
      <span>Song Title!</span>
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        seekTo={seekTo}
      />

      <SControls>
        <STransparentButton onClick={() => {}}>
          <FontAwesomeIcon icon={faStepBackward} />
        </STransparentButton>

        <STransparentButton
          onClick={() => {
            setIsPlaying((prevState) => !prevState);
          }}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </STransparentButton>

        <STransparentButton onClick={() => {}}>
          <FontAwesomeIcon icon={faStepForward} />
        </STransparentButton>
      </SControls>

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
