import {
  MEAL_SEARCH_NAME,
  MEAL_SEARCH_LETTER,
  MEAL_FILTER_INGREDIENT,
} from '../services/apiFood';

import {
  DRINK_SEARCH_NAME,
  DRINK_SEARCH_LETTER,
  DRINK_SEARCH_INGREDIENT,
} from '../services/apiDrink';

export const getParameterSearchMeal = (type) => {
  console.log(`type ${type}`);
  switch (type) {
  case 'letter':
    return MEAL_SEARCH_LETTER;
  case 'ingredient':
    return MEAL_FILTER_INGREDIENT;
  default:
    return MEAL_SEARCH_NAME;
  }
};

export const getParameterSearchDrink = (type) => {
  console.log(`type ${type}`);
  switch (type) {
  case 'letter':
    return DRINK_SEARCH_LETTER;
  case 'ingredient':
    return DRINK_SEARCH_INGREDIENT;
  default:
    return DRINK_SEARCH_NAME;
  }
};
