import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import GenericError from '.';

const renderGenericError = ({ resetErrorBoundary = () => {} } = {}) =>
  render(
    <BrowserRouter>
      <GenericError resetErrorBoundary={resetErrorBoundary} />
    </BrowserRouter>,
  );

describe('<GenericError />', () => {
  afterEach(cleanup);

  it('will render the component', () => {
    const { getByText } = renderGenericError();

    expect(
      getByText('Sorry but it looks like something went wrong.'),
    ).toBeInTheDocument();
  });

  it('will reload page when click on button', () => {
    const resetErrorBoundary = jest.fn();
    const { getByText } = renderGenericError({ resetErrorBoundary });

    fireEvent.click(getByText('Reload Page'));

    expect(resetErrorBoundary).toHaveBeenCalledTimes(1);
  });
});
