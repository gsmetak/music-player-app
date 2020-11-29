import * as React from 'react';
import { render, screen } from '@testing-library/react';

import MusicPlayer from './MusicPlayer';
import SongsProvider from '../SongContext/SongsProvider';

const renderMusicPlayer = () =>
  render(
    <SongsProvider>
      <MusicPlayer />
    </SongsProvider>,
  );

describe('<MusicPlayer />', () => {
  it('will render the component', () => {
    renderMusicPlayer();

    expect(screen.getByTestId('music-player')).toBeTruthy();
  });
});
