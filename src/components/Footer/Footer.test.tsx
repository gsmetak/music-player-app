import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

const renderFooter = (children: React.ReactNode) =>
  render(<Footer>{children}</Footer>);

describe('<Footer />', () => {
  it('will render the component', () => {
    renderFooter(<span>Test</span>);

    expect(screen.getByTestId('app-footer')).toBeTruthy();
  });

  it('will render the children', () => {
    renderFooter(<span data-test="test-child">Test</span>);

    expect(screen.getByTestId('test-child')).toBeTruthy();
  });
});
