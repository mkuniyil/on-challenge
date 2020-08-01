import { render } from '@testing-library/react';
import React from 'react';
import Home from '../Home';

test('when home page is loaded, it should render page component ', () => {
  const { queryByTestId } = render(<Home />);

  expect(queryByTestId('homePage')).not.toBeNull();
});

test(`when 'Try on trial' is clicked, it should navigate to quiz page`, () => {
  const { queryByTestId } = render(<Home />);

  expect(queryByTestId('btnTryTrial').href).toContain('/quiz');
});
