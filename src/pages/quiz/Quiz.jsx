import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Quiz.scss';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import { AppContext } from '../../AppProvider';

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
  const { questionsList, updateShoesList } = useContext(AppContext);
  const [currentQuestion, setCurrentQuestion] = useState();
  const [questions, setQuestions] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  useEffect(() => {
    // setTimeout is used only to reflect the loading screen
    const delayTimer = setTimeout(() => setQuestions(questionsList), 1000);

    return () => clearTimeout(delayTimer);
  }, [questionsList]);

  useEffect(() => setCurrentQuestion(questions[0]), [questions]);

  const onClickHandler = ({ nextQuestion, ratingIncrease }) => {
    updateShoesList(ratingIncrease);

    if (!nextQuestion) {
      setIsQuizCompleted(true);
      return;
    }

    setCurrentQuestion(questions[nextQuestion]);
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
