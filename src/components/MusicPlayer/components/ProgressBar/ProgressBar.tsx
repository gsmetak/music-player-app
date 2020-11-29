import * as React from 'react';
import { useRef } from 'react';

import secondsToMinutesAndSeconds from './utils';
import { SBarElapsed, SContainer, STime, SBar } from './styled';

interface Props {
  currentTime: number;
  duration: number;
  seekTo: (time: number) => void;
}

const ProgressBar = ({ currentTime, duration, seekTo }: Props) => {
  const bar = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (bar?.current) {
      seekTo(e.nativeEvent.offsetX / bar.current.clientWidth);
    }
  };

  const getWidth = () => {
    if (bar?.current) {
      return ((currentTime / duration) * bar.current.clientWidth).toFixed(2);
    }
    return '0';
  };

  return (
    <SContainer>
      <STime>{secondsToMinutesAndSeconds(currentTime)}</STime>
      <SBar ref={bar} data-test="progress-bar" onClick={handleSeek}>
        <SBarElapsed width={getWidth()} />
      </SBar>
      <STime>{secondsToMinutesAndSeconds(duration)}</STime>
    </SContainer>
  );
};

export default ProgressBar;
