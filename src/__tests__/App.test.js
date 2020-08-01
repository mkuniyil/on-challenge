import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('when app is loaded, it should render the header ', () => {
  const { queryByTestId } = render(<App />);

  expect(queryByTestId('appHeader')).not.toBeNull();
});
