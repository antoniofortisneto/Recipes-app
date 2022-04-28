import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import userRequestDrinks from '../hooks/useRequestDrinks';

function Drinks() {
  const history = useHistory();
  const [data] = userRequestDrinks();
  const twelve = 12;

  useEffect(() => {
    if (!data) global.alert('Sorry, we haven\'t found any recipes for these filters.');
    if (Array.isArray(data) && data.length === 1) {
      const { idDrink } = data[0];
      history.push(`/drinks/${idDrink}`);
    }
  }, [data, history]);

  return (
    <>
      <h1>Drinks</h1>
      { !data ? <h2>Não foi encontrado nada na busca</h2> : (
        <section>
          {data.map(({ strDrink, strDrinkThumb }, index) => index < twelve && (
            <section key={ index } data-testid={ `${index}-recipe-card` }>
              <img
                src={ strDrinkThumb }
                alt={ `${strDrink} - ${index}` }
                data-testid={ `${index}-card-img` }
              />
              <h3 data-testid={ `${index}-card-name` }>{strDrink}</h3>
            </section>
          ))}
        </section>
      ) }
    </>
  );
}

export default Drinks;
