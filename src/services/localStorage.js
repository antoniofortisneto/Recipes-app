const RECIPE_PROGRESS = 'inProgressRecipes';
export const getRecipeProgress = () => (JSON.parse(localStorage.getItem(RECIPE_PROGRESS)))
|| { cocktails: {}, meals: {} };
const RECIPE_DONE = 'doneRecipes';
export const getRecipesDone = () => (JSON.parse(localStorage.getItem(RECIPE_DONE)))
|| [];
const FAVORITE_RECIPE = 'favoriteRecipes';
export const getFavorRecipes = () => (JSON.parse(localStorage.getItem(FAVORITE_RECIPE)))
|| [];
const ITEMS_CHECKED = 'itemsChecked';
export const getItemsChecked = () => (JSON.parse(localStorage.getItem(ITEMS_CHECKED)))
|| [];

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
  if (recipes) {
    return recipes
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
  let recipe = getRecipesDone();
  recipe = [...recipe, items];
  localStorage.setItem(RECIPE_DONE, JSON.stringify(recipe));
};

/* FAVORITE RECIPE */
export const getFavorite = (id) => {
  const recipes = getFavorRecipes();
  let result = false;

  if (recipes !== undefined) {
    result = recipes
      .some((e) => e.id === (id));
  }

  return result;
};

export const deleteFavoriteRecipe = (id) => {
  let recipe = getFavorRecipes();
  const results = recipe.filter((e) => e.id !== id);
  recipe = results;
  localStorage.setItem(FAVORITE_RECIPE, JSON.stringify(recipe));
};

export const saveFavoriteRecipe = (items) => {
  let recipe = getFavorRecipes();
  const favorite = getFavorite(items.id);

  if (favorite) {
    deleteFavoriteRecipe(items.id);
  } else {
    recipe = [...recipe, items];
    localStorage.setItem(FAVORITE_RECIPE, JSON.stringify(recipe));
  }
};

export const getRecipeInProgress = (id, type) => {
  const recipes = getRecipeProgress();
  const filter = {
    foods: recipes.meals[id],
    drinks: recipes.cocktails[id],
    default: false,
  };

  return filter[type];
};

export const saveItemsChecked = (obj) => {
  let itemsChecked = getItemsChecked();
  const checked = itemsChecked.some((e) => e.id === obj.id);

  if (checked) {
    itemsChecked = itemsChecked.filter((e) => e.id !== obj.id);
  } else {
    itemsChecked = [...itemsChecked, obj];
  }
  localStorage.setItem(ITEMS_CHECKED, JSON.stringify(itemsChecked));
};
