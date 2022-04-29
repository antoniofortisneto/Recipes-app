import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useRequestFoods from '../hooks/useRequestFoods';
import context from '../context';

function Foods() {
  const { searchCategoryFood } = useContext(context);
  const history = useHistory();
  const [data] = useRequestFoods();
  const twelve = 12;

  const filterData = data && data.filter((e) => {
    if (searchCategoryFood === 'All') return true;
    return e;
  });

  useEffect(() => {
    if (!data) global.alert('Sorry, we haven\'t found any recipes for these filters.');
    if (Array.isArray(filterData)
     && filterData.length === 1
     && searchCategoryFood === 'All') {
      const { idMeal } = data[0];
      history.push(`/foods/${idMeal}`);
    }
  }, [data, history, filterData, searchCategoryFood]);

  const goDetailsMeal = (idMeal) => {
    history.push(`/foods/${idMeal}`);
  };

  return (
    <>
      <h1>iFoods</h1>
      { !filterData ? <h2>Não foi encontrado nada na busca</h2> : (
        <section>
          {
            filterData.map(({ strMeal, strMealThumb, idMeal }, index) => index < twelve
            && (
              <section
                key={ idMeal }
              >
                <button
                  type="button"
                  onClick={ () => goDetailsMeal(idMeal) }
                  data-testid={ `${index}-recipe-card` }
                >
                  <img
                    src={ strMealThumb }
                    alt={ `${strMeal} - ${index}` }
                    data-testid={ `${index}-card-img` }
                    style={ { width: '100px' } }
                  />
                </button>
                <h3 data-testid={ `${index}-card-name` }>{strMeal}</h3>
              </section>
            ))
          }
        </section>
      ) }
    </>
  );
}

export default Foods;
