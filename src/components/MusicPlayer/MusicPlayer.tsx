import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepBackward,
  faPlay,
  faPause,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';

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
  margin: auto;
  width: 25%;

  & > * {
    font-size: 2.5rem;
  }
`;

const MusicPlayer = () => (
  <SContainer data-test="music-player">
    <span>Song Title!</span>
    <div>Progress Bar!</div>
    <SControls>
      <STransparentButton onClick={() => {}}>
        <FontAwesomeIcon icon={faStepBackward} />
      </STransparentButton>

      <STransparentButton onClick={() => {}}>
        <FontAwesomeIcon icon={faPlay} />
      </STransparentButton>

      <STransparentButton onClick={() => {}}>
        <FontAwesomeIcon icon={faPause} />
      </STransparentButton>

      <STransparentButton onClick={() => {}}>
        <FontAwesomeIcon icon={faStepForward} />
      </STransparentButton>
    </SControls>
  </SContainer>
);

export default MusicPlayer;
