import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import userRequestDrinks from '../hooks/useRequestDrinks';
import context from '../context';

function Drinks() {
  const { searchCategoryDrink } = useContext(context);
  const history = useHistory();
  const [data] = userRequestDrinks();
  const twelve = 12;

  const filterData = data && data.filter((e) => {
    if (searchCategoryDrink === '') return true;
    return e;
  });

  useEffect(() => {
    if (!data) global.alert('Sorry, we haven\'t found any recipes for these filters.');
    if (Array.isArray(filterData)
      && filterData.length === 1
      && searchCategoryDrink === 'All'
    ) {
      const { idDrink } = data[0];
      history.push(`/drinks/${idDrink}`);
    }
  }, [data, history, filterData, searchCategoryDrink]);

  const goDetailsDrink = (idDrink) => {
    history.push(`/drinks/${idDrink}`);
  };

  return (
    <>
      <h1>Drinks</h1>
      { !filterData ? <h2>Não foi encontrado nada na busca</h2> : (
        <section>
          { filterData.map(({ strDrink, strDrinkThumb, idDrink }, index) => index < twelve
            && (
              <section key={ idDrink }>
                <button
                  type="button"
                  onClick={ () => goDetailsDrink(idDrink) }
                  data-testid={ `${index}-recipe-card` }
                >
                  <img
                    src={ strDrinkThumb }
                    alt={ `${strDrink} - ${index}` }
                    data-testid={ `${index}-card-img` }
                    style={ { width: '100px' } }
                  />
                </button>
                <h3 data-testid={ `${index}-card-name` }>{strDrink}</h3>
              </section>
            ))}
        </section>
      ) }
    </>
  );
}

export default Drinks;
