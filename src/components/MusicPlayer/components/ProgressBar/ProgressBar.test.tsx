import * as React from 'react';
import { render, screen } from '@testing-library/react';

import ProgressBar from './ProgressBar';
import secondsToMinutesAndSeconds from './utils';

const renderProgressBar = () =>
  render(<ProgressBar currentTime={0} duration={1} seekTo={() => {}} />);

describe('<ProgressBar />', () => {
  it('will render the component', () => {
    renderProgressBar();

    expect(screen.getByTestId('progress-bar')).toBeTruthy();
  });

  it('will return a correctly formatted time', () => {
    expect(secondsToMinutesAndSeconds(60)).toEqual('1:00');
  });
});
