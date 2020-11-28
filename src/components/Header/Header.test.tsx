import * as React from 'react';
import * as rtl from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  afterEach(rtl.cleanup);

  it('will render the component', () => {
    const { getByText } = rtl.render(<Header />);

    expect(getByText('Music Player App')).toBeTruthy();
  });
});
