import React, { createContext, useEffect, useState } from 'react';
import { fetchData, updateShoeRating } from './utils/utils';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [shoesList, SetShoeList] = useState([]);
  const [questionsList, SetQuestionsList] = useState([]);

  useEffect(() => {
    const { shoes, questions } = fetchData();
    SetShoeList(shoes);
    SetQuestionsList(questions);
  }, []);

  const updateShoesList = (ratingObj) => {
    const newList = updateShoeRating(shoesList, ratingObj);

    SetShoeList(newList);
  };

  const value = { shoesList, questionsList, updateShoesList };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
