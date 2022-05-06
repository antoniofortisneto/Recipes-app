import { useEffect, useState } from 'react';
import { DRINK_LOOKUP, requestDrinks } from '../services/apiDrink';
import { MEAL_LOOKUP, requestFoods } from '../services/apiFood';

function useRequestDetails(apiType, id) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const request = async () => {
      let array = '';
      try {
        if (apiType === 'foods') {
          const { meals } = await requestFoods(MEAL_LOOKUP, id);
          array = meals;
        } else {
          const { drinks } = await requestDrinks(DRINK_LOOKUP, id);
          array = drinks;
        }

        Object.keys(array[0]).forEach((key) => {
          if ((array[0][key]) === null || array[0][key] === ' ' || array[0][key] === '') {
            delete array[0][key];
          }
        });

        setData(array);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [apiType, id]);
  return [data];
}

export default useRequestDetails;
