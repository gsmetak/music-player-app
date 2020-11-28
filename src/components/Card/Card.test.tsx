import React from 'react';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Card from '.';

const renderCard = () =>
  render(
    <BrowserRouter>
      <Card
        id="test-id"
        imageUrl="https://picsum.photos/400/300"
        title="Card Title"
      />
    </BrowserRouter>,
  );

describe('<Card />', () => {
  it('will render the component', () => {
    renderCard();

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByTestId('card-image')).toBeTruthy();
  });
});
