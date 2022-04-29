import { useContext, useEffect, useState } from 'react';
import context from '../context';
import { requestFoods } from '../services/apiFood';
import { getParameterSearchMeal } from '../helpers/requestsHelper';

// https://www.themealdb.com/api/json/v1/1/search.php?s

function useRequestFoods() {
  const { search,
    searchType,
    setDataFood, searchCategoryFood /* setCategoriesFoods */ } = useContext(context);
  const [data, setData] = useState([]);

  const rota = searchCategoryFood !== 'All' ? 'category' : searchType;
  const type = searchCategoryFood !== 'All' ? searchCategoryFood : search;

  useEffect(() => {
    const request = async () => {
      if (searchType === 'letter' && search.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      try {
        const parameter = getParameterSearchMeal(rota);
        const { meals } = await requestFoods(parameter, type);
        setData(meals);
        setDataFood(meals);
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [search, searchType, setDataFood, searchCategoryFood, rota, type]);

  return [data];
}

export default useRequestFoods;
