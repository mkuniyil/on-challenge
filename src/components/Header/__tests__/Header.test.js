import { render } from '@testing-library/react';
import React from 'react';
import Header from '../Header';

test(`when 'Try on trial' is clicked, it should navigate to quiz page`, () => {
  const { queryByTestId } = render(<Header />);

  expect(queryByTestId('logoIcon').href).toContain('/home');
});
