import data from '../__fixtures__/data';

const { shoes, questions } = data;

export const getQuestionList = () => questions;

export const getShoesList = () => shoes;

export const updateShoeRating = (ratingIncrease) =>
  shoes.forEach((item) => {
    item.rating += ratingIncrease[item.name];
  });
