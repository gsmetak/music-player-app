import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPause,
  faPlay,
  faStepBackward,
  faStepForward,
} from '@fortawesome/free-solid-svg-icons';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

import { STransparentButton } from '../../../../scenes/styled';

interface Props {
  togglePlay: () => void;
  isPlaying: boolean;
  isLoading: boolean;
  isDisabled: boolean;
  selectPrevious: () => void;
  selectNext: () => void;
}

const SControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.4em auto;
  width: 25%;

  & > * {
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    width: 35%;
  }

  @media (max-width: 767px) {
    width: 80%;
  }
`;

const Controls = ({
  togglePlay,
  isDisabled,
  isLoading,
  isPlaying,
  selectNext,
  selectPrevious,
}: Props) => (
  <SControls data-test="controls">
    <STransparentButton disabled={isDisabled} onClick={() => selectPrevious()}>
      <FontAwesomeIcon icon={faStepBackward} />
    </STransparentButton>

    {isLoading ? (
      <ClipLoader color="#ffffff" loading={isLoading} />
    ) : (
      <STransparentButton disabled={isDisabled} onClick={() => togglePlay()}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </STransparentButton>
    )}

    <STransparentButton disabled={isDisabled} onClick={() => selectNext()}>
      <FontAwesomeIcon icon={faStepForward} />
    </STransparentButton>
  </SControls>
);

export default Controls;
