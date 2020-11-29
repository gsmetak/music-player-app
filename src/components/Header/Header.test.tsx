import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './Header';

const renderHeader = () => render(<Header />);

describe('<Header />', () => {
  it('will render the component', () => {
    renderHeader();

    expect(screen.getByText('Music Player App')).toBeTruthy();
  });
});
