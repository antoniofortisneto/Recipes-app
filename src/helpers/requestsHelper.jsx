import { SEARCH_NAME, SEARCH_LETTER, FILTER_INGREDIENT } from '../services/apiFood';

export const getParameterSearch = (type) => {
  console.log(`type ${type}`);
  switch (type) {
  case 'letter':
    return SEARCH_LETTER;
  case 'ingredient':
    return FILTER_INGREDIENT;
  default:
    return SEARCH_NAME;
  }
};

export const test = 'test';
