import { useContext, useEffect, useState } from 'react';
import context from '../context';
import { requestDrinks } from '../services/apiDrink';
import { getParameterSearchDrink } from '../helpers/requestsHelper';

function useRequestDrinks() {
  const { search, searchType, searchCategoryDrink } = useContext(context);
  // DATA, ESTADO PARA GUARDAR OS DADOS DA API DE BEBIDAS
  const [data, setData] = useState([]);

  const route = searchCategoryDrink !== 'All' ? 'category' : searchType;
  const type = searchCategoryDrink !== 'All' ? searchCategoryDrink : search;

  useEffect(() => {
    const request = async () => {
      if (searchType === 'letter' && search.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      const parameter = getParameterSearchDrink(route);
      const { drinks } = await requestDrinks(parameter, type);
      setData(drinks);
    };
    request();
  }, [search, searchType, route, type]);

  return [data];
}

export default useRequestDrinks;
