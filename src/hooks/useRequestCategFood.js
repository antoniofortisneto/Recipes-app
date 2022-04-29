import { useEffect, useState, useContext } from 'react';
import context from '../context';
import { requestFoods, MEAL_ALL_CATEGORIES } from '../services/apiFood';

function useRequestCategFood() {
  const { dataFood } = useContext(context);
  const [data, setData] = useState([]);

  useEffect(() => {
    const request = async () => {
      try {
        const { categories } = await requestFoods(MEAL_ALL_CATEGORIES);
        setData(categories);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [dataFood.lenght]);

  return [data];
}

export default useRequestCategFood;
