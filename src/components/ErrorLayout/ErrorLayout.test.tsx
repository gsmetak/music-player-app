import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ErrorLayout from '.';

type Props = React.ComponentProps<typeof ErrorLayout>;

const renderErrorLayout = ({ children }: Partial<Props> = {}) =>
  render(
    <BrowserRouter>
      <ErrorLayout>{children}</ErrorLayout>
    </BrowserRouter>,
  );

describe('<ErrorLayout />', () => {
  it('will render the component', () => {
    const props = { children: <div>Some error</div> };
    const { getByText } = renderErrorLayout({ ...props });

    expect(getByText('Some error')).toBeInTheDocument();
  });
});
