const URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
export const SEARCH = 'search.php?';
export const LOOKUP = 'lookup.php?';
export const RANDOM = 'random.php';
export const SELECTION = 'randomselection.php';
// export const AREA = 'list.php?a=';
// export const CATEGORIES = 'list.php?c=';
// export const INGREDIENTES = 'list.php?i=';

export const getAllDrinks = async (parameter, type) => {
  const response = await fetch(`${URL}${parameter}${type}`);
  // console.log(`${URL}${parameter}${type}`);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};
