import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Controls from './Controls';

const renderControls = () =>
  render(<Controls isPlaying togglePlay={() => {}} />);

describe('<Controls />', () => {
  it('will render the component', () => {
    renderControls();

    expect(screen.getByTestId('controls')).toBeTruthy();
  });
});
