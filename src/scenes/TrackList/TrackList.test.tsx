import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import TrackList from '.';

const renderTrackList = () =>
  render(
    <BrowserRouter>
      <TrackList />
    </BrowserRouter>,
  );

describe('<TrackList />', () => {
  it('will render the component', () => {
    renderTrackList();

    expect(screen.getByTestId('track-list')).toBeTruthy();
  });
});
