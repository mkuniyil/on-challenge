import { render, waitForElement, fireEvent } from '@testing-library/react';
import React from 'react';
import Quiz from '../Quiz';
import { getQuestionList } from '../../../utils/dataUtils';
import { questions } from '../../../__fixtures__/testData';

jest.mock('../../../utils/dataUtils');

test('when quiz page is loaded, it should render page component ', async () => {
  getQuestionList.mockReturnValue(questions);
  const { queryByTestId } = render(<Quiz />);
  const quizPage = await waitForElement(() => queryByTestId('quizPage'));

  expect(quizPage).not.toBeNull();
});

test('Given in quiz page & there is no current question, then it should show loading screen ', async () => {
  getQuestionList.mockReturnValue([]);
  const { queryByTestId } = render(<Quiz />);
  const loadingScreen = await waitForElement(() =>
    queryByTestId('loadingScreen'),
  );

  expect(loadingScreen).not.toBeNull();
});

test('Given in quiz page & select option-0 for 1st question, then 2nd question should appear', async () => {
  getQuestionList.mockReturnValue(questions);
  const { queryByTestId } = render(<Quiz />);

  await waitForElement(() => queryByTestId('quizPage'));
  fireEvent.click(queryByTestId('option-0'));

  const nextQuestion = questions[1];
  const questionElement = await waitForElement(() =>
    queryByTestId(`question-${nextQuestion.id}`),
  );
  expect(questionElement).toHaveTextContent(nextQuestion.copy);
});
