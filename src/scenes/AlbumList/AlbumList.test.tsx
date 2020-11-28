import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import AlbumList from '.';

const renderAlbumList = () =>
  render(
    <BrowserRouter>
      <AlbumList />
    </BrowserRouter>,
  );

describe('<AlbumList />', () => {
  it('will render the component', () => {
    renderAlbumList();

    expect(screen.getByTestId('album-list')).toBeTruthy();
  });
});
