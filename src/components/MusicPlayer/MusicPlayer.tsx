import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepBackward,
  faPlay,
  faPause,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import ReactPlayer from 'react-player';
import { STransparentButton } from '../../scenes/styled';

const SContainer = styled.div`
  display: block;
  margin: auto;
  text-align: center;
  width: 40vw;
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
  const [isPlaying, setIsPlaying] = useState(false);

  const url = {
    src:
      'https://docs.google.com/uc?export=download&id=1O5t235kcv5MoJYCNcx8osWRBS45CNnNB',
    type: 'audio/mp3',
  };

  return (
    <SContainer data-test="music-player">
      <span>Song Title!</span>
      <div>Progress Bar!</div>

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

      <SReactPlayer playing={isPlaying} url={[url]} />
    </SContainer>
  );
};

export default MusicPlayer;
