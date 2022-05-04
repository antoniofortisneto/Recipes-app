import { useContext, useEffect, useState } from 'react';
import context from '../context';
import { requestFoods } from '../services/apiFood';
import { getParameterSearchMeal } from '../helpers/requestsHelper';

function useRequestFoodByNationality() {
  const { area } = useContext(context);
  const [data, setData] = useState([]);

  const route = area !== 'All' ? 'filter-nationality' : 'name';
  const type = area !== 'All' ? area : '';

  useEffect(() => {
    const request = async () => {
      try {
        const parameter = getParameterSearchMeal(route);
        const { meals } = await requestFoods(parameter, type);
        setData(meals);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [area, route, type]);

  return [data];
}

export default useRequestFoodByNationality;
