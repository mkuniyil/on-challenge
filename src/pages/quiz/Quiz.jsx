import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Quiz.scss';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { getQuestionList, updateShoeRating } from '../../utils/dataUtils';

const QuizContainer = ({ questionId, question, options, onClickHandler }) => (
  <div className="box_quizPage box_appBody" data-testid="quizPage">
    <div className="body_content">
      <div className="title">
        TRY ON QUIZ<span>30 DAYS RISK FREE</span>
      </div>
      <div className="question" data-testid={`question-${questionId}`}>
        {question}
      </div>
      <div className="options">
        {options.map((answer, index) => (
          <Button
            key={answer.copy}
            text={answer.copy}
            onClick={() => onClickHandler(answer)}
            testId={`option-${index}`}
          />
        ))}
      </div>
    </div>
  </div>
);

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState();
  const [questionsList, setQuestionsList] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  useEffect(() => {
    // setTimeout is used only to reflect the loading screen
    setTimeout(() => setQuestionsList(getQuestionList), 1000);
  });

  useEffect(() => {
    const initialId = 0;
    const initialQuestion = getQuestion(initialId);

    setCurrentQuestion(initialQuestion);
  }, [questionsList]);

  const getQuestion = (questionId) => questionsList[questionId];

  const onClickHandler = ({ nextQuestion, ratingIncrease }) => {
    updateShoeRating(ratingIncrease);

    if (!nextQuestion) {
      setIsQuizCompleted(true);
      return;
    }

    setCurrentQuestion(getQuestion(nextQuestion));
  };

  if (!currentQuestion) {
    return <LoadingScreen />;
  }

  if (isQuizCompleted) {
    return <Redirect to="/results" />;
  }

  const { id, copy, answers } = currentQuestion;

  return (
    <QuizContainer
      questionId={id}
      question={copy}
      options={answers}
      onClickHandler={onClickHandler}
    />
  );
};

export default Quiz;
