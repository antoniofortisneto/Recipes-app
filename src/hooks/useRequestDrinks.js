import { useContext, useEffect, useState } from 'react';
import context from '../context';
import { requestDrinks } from '../services/apiDrink';
import { getParameterSearchDrink } from '../helpers/requestsHelper';

function useRequestDrinks() {
  const { search, searchType, searchCategoryDrink } = useContext(context);
  const [data, setData] = useState([]);

  const rota = searchCategoryDrink !== 'All' ? 'category' : searchType;
  const type = searchCategoryDrink !== 'All' ? searchCategoryDrink : search;

  useEffect(() => {
    const request = async () => {
      if (searchType === 'letter' && search.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      const parameter = getParameterSearchDrink(rota);
      const { drinks } = await requestDrinks(parameter, type);
      setData(drinks);
    };
    request();
  }, [search, searchType, rota, type]);

  return [data];
}

export default useRequestDrinks;
