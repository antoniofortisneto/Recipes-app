const URL = 'https://www.themealdb.com/api/json/v1/1/';
export const MEAL_SEARCH_NAME = 'search.php?s=';
export const MEAL_SEARCH_LETTER = 'search.php?f=';
export const MEAL_FILTER_INGREDIENT = 'filter.php?i=';
export const MEAL_FILTER_CATEGORY = 'filter.php?c=';
export const MEAL_FILTER_AREA = 'filter.php?a=';
export const MEAL_LOOKUP = 'lookup.php?i=';
export const MEAL_AREA = 'list.php?a=';
export const MEAL_CATEGORIES = 'list.php?c=';
export const MEAL_INGREDIENTES = 'list.php?i=';
export const MEAL_ALL_CATEGORIES = 'categories.php';
export const MEAL_RANDOM = 'random.php';

export const requestFoods = async (parameter, search = '') => {
  const response = await fetch(`${URL}${parameter}${search}`);
  console.log(`${URL}${parameter}${search}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};
