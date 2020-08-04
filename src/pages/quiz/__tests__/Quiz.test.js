import { render, waitForElement, fireEvent } from '@testing-library/react';
import React from 'react';
import Quiz from '../Quiz';
import { fetchData } from '../../../utils/utils';
import testData from '../../../__fixtures__/testData';
import { AppProvider } from '../../../AppProvider';

jest.mock('../../../utils/utils');

const getComponent = () =>
  render(
    <AppProvider>
      <Quiz />
    </AppProvider>,
  );

test('when quiz page is loaded, it should render page component ', async () => {
  fetchData.mockReturnValue(testData);
  const { queryByTestId } = getComponent();
  const quizPage = await waitForElement(() => queryByTestId('quizPage'));

  expect(quizPage).not.toBeNull();
});

test('Given in quiz page & there is no current question, then it should show loading screen ', async () => {
  fetchData.mockReturnValue({ shoes: [], questions: [] });
  const { queryByTestId } = getComponent();
  const loadingScreen = await waitForElement(() =>
    queryByTestId('loadingScreen'),
  );

  expect(loadingScreen).not.toBeNull();
});

test('Given in quiz page & select option-0 for 1st question, then 2nd question should appear', async () => {
  fetchData.mockReturnValue(testData);
  const { queryByTestId } = getComponent();

  await waitForElement(() => queryByTestId('quizPage'));
  fireEvent.click(queryByTestId('option-0'));

  const nextQuestion = testData.questions[1];
  const questionElement = await waitForElement(() =>
    queryByTestId(`question-${nextQuestion.id}`),
  );

  expect(questionElement).toHaveTextContent(nextQuestion.copy);
});
