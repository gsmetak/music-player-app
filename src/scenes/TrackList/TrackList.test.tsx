import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import TrackList from '.';
import SongsProvider from '../../components/SongContext/SongsProvider';

const renderTrackList = () =>
  render(
    <BrowserRouter>
      <SongsProvider>
        <TrackList />
      </SongsProvider>
    </BrowserRouter>,
  );

describe('<TrackList />', () => {
  it('will render the component', () => {
    renderTrackList();

    expect(screen.getByTestId('track-list')).toBeTruthy();
  });
});
