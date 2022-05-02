import {
  MEAL_SEARCH_NAME,
  MEAL_SEARCH_LETTER,
  MEAL_FILTER_INGREDIENT,
  MEAL_FILTER_CATEGORY,
  MEAL_RANDOM,
} from '../services/apiFood';

import {
  DRINK_SEARCH_NAME,
  DRINK_SEARCH_LETTER,
  DRINK_SEARCH_INGREDIENT,
  DRINK_FILTER_CATEGORY,
  DRINK_RANDOM,
} from '../services/apiDrink';

export const getParameterSearchMeal = (type) => {
  // console.log(`type ${type}`);
  switch (type) {
  case 'letter':
    return MEAL_SEARCH_LETTER;
  case 'ingredient':
    return MEAL_FILTER_INGREDIENT;
  case 'category':
    return MEAL_FILTER_CATEGORY;
  case 'random':
    return MEAL_RANDOM;
  default:
    return MEAL_SEARCH_NAME;
  }
};

export const getParameterSearchDrink = (type) => {
  // console.log(`type ${type}`);
  switch (type) {
  case 'letter':
    return DRINK_SEARCH_LETTER;
  case 'ingredient':
    return DRINK_SEARCH_INGREDIENT;
  case 'category':
    return DRINK_FILTER_CATEGORY;
  case 'random':
    return DRINK_RANDOM;
  default:
    return DRINK_SEARCH_NAME;
  }
};
