import { useEffect, useState } from 'react';
import { DRINK_LIST_INGREDIENT, requestDrinks } from '../services/apiDrink';
import { MEAL_INGREDIENTES, requestFoods } from '../services/apiFood';

function useRequestExploreIngredients(apiType) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const request = async () => {
      try {
        const twelve = 12;
        let array;
        if (apiType === 'foods') {
          const { meals } = await requestFoods(MEAL_INGREDIENTES, 'list');
          array = meals.filter((_current, index) => index < twelve);
        } else {
          const { drinks } = await requestDrinks(DRINK_LIST_INGREDIENT, 'list');
          array = drinks.filter((_current, index) => index < twelve);
        }
        setData(array);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [apiType]);
  return [data];
}

export default useRequestExploreIngredients;
