import createItemFavorite from '../helpers/createItemFavorite';

const RECIPE_PROGRESS = 'inProgressRecipes';
export const getRecipeProgress = () => (JSON.parse(localStorage.getItem(RECIPE_PROGRESS)))
|| { cocktails: {}, meals: {} };
const RECIPE_DONE = 'doneRecipes';
export const getRecipesDone = () => (JSON.parse(localStorage.getItem(RECIPE_DONE)))
|| { doneRecipes: [] };
const FAVORITE_RECIPE = 'favoriteRecipes';
export const getFavorRecipes = () => (JSON.parse(localStorage.getItem(FAVORITE_RECIPE)))
|| { favoriteRecipes: [] };

export const getOneRecipeInProgress = (id, type) => {
  const recipes = getRecipeProgress();
  if (type === 'foods') {
    if (recipes.meals[id] === undefined) return true;
    return false;
  }
  if (recipes.cocktails[id] === undefined) return true;
  return false;
};

export const getOneRecipeDone = (id) => {
  const recipes = getRecipesDone();
  if (recipes.doneRecipes) {
    return recipes.doneRecipes
      .some((e) => e.id === Number(id) && e.doneDate !== '');
  }
  return false;
};

export const saveRecipeProgress = (id, ingredients, type) => {
  const inProgress = getRecipeProgress();
  if (type === 'foods') {
    inProgress.meals[id] = ingredients;
  } else {
    inProgress.cocktails[id] = ingredients;
  }
  localStorage.setItem(RECIPE_PROGRESS, JSON.stringify(inProgress));
};

export const saveRecipeDone = (items) => {
  const recipe = getRecipesDone();
  recipe.doneRecipes = [...recipe.doneRecipes, items];
  localStorage.setItem(RECIPE_DONE, JSON.stringify(recipe));
};

/* FAVORITE RECIPE */
export const getFavorite = (id) => {
  const recipes = getFavorRecipes();
  let result = false;

  if (recipes.favoriteRecipes !== undefined) {
    result = recipes.favoriteRecipes
      .some((e) => e.id === (id));
  }

  return result;
};

export const deleteFavoriteRecipe = (id) => {
  const recipe = getFavorRecipes();
  const results = recipe.favoriteRecipes.filter((e) => e.id !== id);
  recipe.favoriteRecipes = results;
  localStorage.setItem(FAVORITE_RECIPE, JSON.stringify(recipe));
};

export const saveFavoriteRecipe = (id, type, data) => {
  const recipe = getFavorRecipes();
  const favorite = getFavorite(id);

  if (favorite) {
    deleteFavoriteRecipe(id);
  } else {
    recipe.favoriteRecipes = [...recipe.favoriteRecipes, createItemFavorite(type, data)];
    localStorage.setItem(FAVORITE_RECIPE, JSON.stringify(recipe));
  }
};
