import * as React from 'react';
import { render, screen } from '@testing-library/react';

import EmptyList from './EmptyList';

const renderEmptyList = () => render(<EmptyList />);

describe('<EmptyList />', () => {
  it('will render the component', () => {
    renderEmptyList();

    expect(screen.getByTestId('empty-list')).toBeTruthy();
  });
});
