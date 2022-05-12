const URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
export const DRINK_SEARCH_NAME = 'search.php?s=';
export const DRINK_SEARCH_LETTER = 'search.php?f=';
export const DRINK_SEARCH_INGREDIENT = 'filter.php?i=';
export const DRINK_FILTER_CATEGORY = 'filter.php?c=';
export const DRINK_LOOKUP = 'lookup.php?i=';
export const DRINK_RANDOM = 'random.php';
export const DRINK_LIST_INGREDIENT = 'list.php?i=';

export const requestDrinks = async (parameter, search = '') => {
  const response = await fetch(`${URL}${parameter}${search}`);
  // console.log(`${URL}${parameter}${search}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};
