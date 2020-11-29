import * as React from 'react';

import { render, screen } from '@testing-library/react';

import Footer from './Footer';

const renderFooter = () => render(<Footer />);

describe('<Footer />', () => {
  it('will render the component', () => {
    renderFooter();

    expect(screen.getByTestId('app-footer')).toBeTruthy();
  });
});
