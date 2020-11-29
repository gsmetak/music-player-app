import * as React from 'react';
import { render, screen } from '@testing-library/react';

import ProgressBar from './ProgressBar';

const renderProgressBar = () => render(<ProgressBar />);

describe('<Footer />', () => {
  it('will render the component', () => {
    renderProgressBar();

    expect(screen.getByTestId('progress-bar')).toBeTruthy();
  });
});
