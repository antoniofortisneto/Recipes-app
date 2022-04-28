import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useRequestFoods from '../hooks/useRequestFoods';

function Foods() {
  const history = useHistory();
  const [data] = useRequestFoods();
  const twelve = 12;

  useEffect(() => {
    if (!data) global.alert('Sorry, we haven\'t found any recipes for these filters.');
    if (Array.isArray(data) && data.length === 1) {
      const { idMeal } = data[0];
      history.push(`/foods/${idMeal}`);
    }
  }, [data, history]);

  console.log(data);
  return (
    <>
      <h1>iFoods</h1>
      { !data ? <h2>Não foi encontrado nada na busca</h2> : (
        <section>
          {data.map(({ strMeal, strMealThumb }, index) => index < twelve && (
            <section key={ index } data-testid={ `${index}-recipe-card` }>
              <img
                src={ strMealThumb }
                alt={ `${strMeal} - ${index}` }
                data-testid={ `${index}-card-img` }
                style={ { width: '100px' } }
              />
              <h3 data-testid={ `${index}-card-name` }>{strMeal}</h3>
            </section>
          ))}
        </section>
      ) }
    </>
  );
}

export default Foods;
