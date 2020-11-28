import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NotFound from './NotFound';

const renderNotFound = () =>
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>,
  );

describe('<NotFound />', () => {
  afterEach(cleanup);

  it('will render the component', () => {
    const { getByText } = renderNotFound();

    expect(
      getByText('Sorry, the page you are looking for does not exist.'),
    ).toBeInTheDocument();
  });

  it('will go home when back button is clicked', () => {
    const { getByText } = renderNotFound();

    fireEvent.click(getByText('Return back'));

    expect(window.location.pathname).toEqual('/');
  });
});
