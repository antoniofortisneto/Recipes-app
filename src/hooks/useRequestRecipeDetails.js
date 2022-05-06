import { useEffect, useState } from 'react';
import { DRINK_SEARCH_NAME, requestDrinks } from '../services/apiDrink';
import { MEAL_SEARCH_NAME, requestFoods } from '../services/apiFood';

function useRequestRecipeDetails(apiType) {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const request = async () => {
      try {
        const SIX = 6;
        let array;
        if (apiType === 'foods') {
          const { drinks } = await requestDrinks(DRINK_SEARCH_NAME);
          array = drinks.slice(0, SIX);
        } else {
          const { meals } = await requestFoods(MEAL_SEARCH_NAME);
          array = meals.slice(0, SIX);
        }
        setRecipes(array);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [apiType]);
  return [recipes];
}

export default useRequestRecipeDetails;
