import { useContext, useEffect, useState } from 'react';
import context from '../context';
import { requestDrinks } from '../services/apiDrink';
import { getParameterSearchDrink } from '../helpers/requestsHelper';

function useRequestDrinks() {
  const { search, searchType } = useContext(context);
  const [data, setData] = useState([]);

  useEffect(() => {
    const request = async () => {
      if (searchType === 'letter' && search.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      const parameter = getParameterSearchDrink(searchType);
      try {
        const { drinks } = await requestDrinks(`${parameter}${search}`);
        setData(drinks);
      } catch (error) {
        setData('Não foi encontrado nada na busca');
      }
    };
    request();
  }, [search, searchType]);

  return [data];
}

export default useRequestDrinks;
