import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { STransparentButton } from '../../../../scenes/styled';

interface Props {
  togglePlay: () => void;
  isPlaying: boolean;
}

const SControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.4em auto;
  width: 25%;

  & > * {
    font-size: 2.5rem;
  }
`;

const Controls = ({ togglePlay, isPlaying }: Props) => (
  <SControls data-test="controls">
    <STransparentButton onClick={() => {}}>
      <FontAwesomeIcon icon={faStepBackward} />
    </STransparentButton>

    <STransparentButton onClick={() => togglePlay()}>
      <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
    </STransparentButton>

    <STransparentButton onClick={() => {}}>
      <FontAwesomeIcon icon={faStepForward} />
    </STransparentButton>
  </SControls>
);

export default Controls;
