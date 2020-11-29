import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ListItem from '.';

const renderListItem = () =>
  render(
    <BrowserRouter>
      <ListItem
        artist="Track Artist"
        imageUrl="https://picsum.photos/400/300"
        title="Track Title"
      />
    </BrowserRouter>,
  );

describe('<ListItem />', () => {
  it('will render the component', () => {
    renderListItem();

    expect(screen.getByText('by Track Artist')).toBeInTheDocument();
    expect(screen.getByText('Track Title')).toBeTruthy();
    expect(screen.getByTestId('item-image')).toBeTruthy();
  });
});
