import { useContext, useEffect, useState } from 'react';
import context from '../context';
import { requestFoods } from '../services/apiFood';
import { getParameterSearchMeal } from '../helpers/requestsHelper';

// https://www.themealdb.com/api/json/v1/1/search.php?s

function useRequestFoods() {
  const { search, searchType } = useContext(context);
  const [data, setData] = useState([]);

  useEffect(() => {
    const request = async () => {
      if (searchType === 'letter' && search.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      const parameter = getParameterSearchMeal(searchType);
      const { meals } = await requestFoods(`${parameter}${search}`);
      setData(meals);
    };
    request();
  }, [search, searchType]);

  return [data];
}

export default useRequestFoods;
