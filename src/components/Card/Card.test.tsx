import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '.';

const renderCard = () =>
  render(<Card imageUrl="https://picsum.photos/400/300" title="Card Title" />);

describe('<Card />', () => {
  it('will render the component', () => {
    renderCard();

    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByTestId('card-image')).toBeTruthy();
  });
});
