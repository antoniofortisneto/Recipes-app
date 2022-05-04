import { useEffect, useState } from 'react';
// import { requestFoods } from '../services/apiFood';
// import { getParameterSearchMeal } from '../helpers/requestsHelper';

function useRequestArea() {
  const [area, setArea] = useState([]);

  useEffect(() => {
    const request = async () => {
      try {
        const END_POINT = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
        const response = await fetch(END_POINT);
        const { meals } = await response.json();
        meals.unshift({ strArea: 'All' });

        const data = [...new Set(meals
          .reduce((acc, { strArea }) => [...acc, strArea], []))];
        setArea(data);
      } catch (error) {
        // console.log(error);
      }
    };
    request();
  }, []);

  return [area];
}

export default useRequestArea;
