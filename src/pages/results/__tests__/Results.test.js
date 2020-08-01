import { render, waitForElement } from '@testing-library/react';
import React from 'react';
import Results from '../Results';
import { getShoesList } from '../../../utils/dataUtils';

jest.mock('../../../utils/dataUtils');

const mockList = [
  {
    name: 'cloud',
    rating: 10,
    imgPath: 'Cloud.png',
  },
  {
    name: 'cloudx',
    rating: 15,
    imgPath: 'CloudX.png',
  },
];

test('when result page is loaded, it should render page component ', () => {
  getShoesList.mockReturnValue(mockList);
  const { queryByTestId } = render(<Results />);

  expect(queryByTestId('resultsPage')).not.toBeNull();
});

test('when result page is loaded, it should render same number of image tiles as list ', async () => {
  getShoesList.mockReturnValue(mockList);
  const { queryByTestId, queryAllByTestId } = render(<Results />);

  await waitForElement(() => queryByTestId('tiles_listing'));

  expect(queryAllByTestId('imageTiles').length).toEqual(mockList.length);
});

test('when result page is loaded, it should list shoes in sorted way ', async () => {
  getShoesList.mockReturnValue(mockList);
  const { queryByTestId, queryAllByTestId } = render(<Results />);

  await waitForElement(() => queryByTestId('tiles_listing'));
  expect(queryAllByTestId('imageTileTitle')[1]).toHaveTextContent(
    mockList[1].name,
  );
});
