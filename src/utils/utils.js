import data from '../__fixtures__/data';

export const fetchData = () => ({ ...data });

export const updateShoeRating = (list, ratingIncrease) => {
  return list.map((item) => {
    item.rating += ratingIncrease[item.name];

    return item;
  });
};

export const getSortedList = (list, key) =>
  list.sort((a, b) => b[key] - a[key]);
