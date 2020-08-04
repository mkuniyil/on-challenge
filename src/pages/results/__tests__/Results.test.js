import { render, waitForElement } from '@testing-library/react';
import React from 'react';
import Results from '../Results';
import { fetchData } from '../../../utils/utils';
import { AppProvider } from '../../../AppProvider';

jest.mock('../../../utils/utils');

const mockList = {
  shoes: [
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
  ],
  questions: [],
};

const getComponent = () =>
  render(
    <AppProvider>
      <Results />
    </AppProvider>,
  );

test('when result page is loaded, it should render page component ', () => {
  fetchData.mockReturnValue(mockList);
  const { queryByTestId } = getComponent();

  expect(queryByTestId('resultsPage')).not.toBeNull();
});

test('when result page is loaded, it should render same number of image tiles as list ', async () => {
  fetchData.mockReturnValue(mockList);
  const { queryByTestId, queryAllByTestId } = getComponent();

  await waitForElement(() => queryByTestId('tiles_listing'));

  expect(queryAllByTestId('imageTiles').length).toEqual(mockList.shoes.length);
});

test('when result page is loaded, it should list shoes in sorted way ', async () => {
  fetchData.mockReturnValue(mockList);
  const { queryByTestId, queryAllByTestId } = getComponent();

  await waitForElement(() => queryByTestId('tiles_listing'));
  expect(queryAllByTestId('imageTileTitle')[1]).toHaveTextContent(
    mockList.shoes[1].name,
  );
});
