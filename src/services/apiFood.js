const URL = 'https://www.themealdb.com/api/json/v1/1/';
export const SEARCH = 'search.php?s=';
export const LOOKUP = 'lookup.php?i=';
export const AREA = 'list.php?a=';
export const CATEGORIES = 'list.php?c=';
export const INGREDIENTES = 'list.php?i=';

export const getAllFood = async (parameter, type) => {
  const response = await fetch(`${URL}${parameter}${type}`);
  // console.log(`${URL}${parameter}${type}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};
