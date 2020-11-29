import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

const renderHeader = () =>
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );

describe('<Header />', () => {
  it('will render the component', () => {
    renderHeader();

    expect(screen.getByText('Music Player App')).toBeTruthy();
  });
});
