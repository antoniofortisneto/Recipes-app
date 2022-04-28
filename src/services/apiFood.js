const URL = 'https://www.themealdb.com/api/json/v1/1/';
export const SEARCH_NAME = 'search.php?s=';
export const SEARCH_LETTER = 'search.php?f=';
export const FILTER_INGREDIENT = 'filter.php?i=';
export const LOOKUP = 'lookup.php?i=';
export const AREA = 'list.php?a=';
export const CATEGORIES = 'list.php?c=';
export const INGREDIENTES = 'list.php?i=';

export const requestFoods = async (parameter, search = '') => {
  const response = await fetch(`${URL}${parameter}${search}`);
  console.log(`${URL}${parameter}${search}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};
