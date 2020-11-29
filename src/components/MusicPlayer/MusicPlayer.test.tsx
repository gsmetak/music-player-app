import * as React from 'react';
import { render, screen } from '@testing-library/react';

import MusicPlayer from './MusicPlayer';

const renderMusicPlayer = () => render(<MusicPlayer />);

describe('<MusicPlayer />', () => {
  it('will render the component', () => {
    renderMusicPlayer();

    expect(screen.getByTestId('music-player')).toBeTruthy();
  });
});
