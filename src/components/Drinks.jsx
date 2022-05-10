import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import userRequestDrinks from '../hooks/useRequestDrinks';
import context from '../context';
import styles from '../styles/meals.module.css';

function Drinks() {
  const { searchCategoryDrink } = useContext(context);
  const history = useHistory();
  const [data] = userRequestDrinks();
  const twelve = 12;

  useEffect(() => {
    if (!data) global.alert('Sorry, we haven\'t found any recipes for these filters.');
    if (Array.isArray(data)
      && data.length === 1
      && searchCategoryDrink === 'All'
    ) {
      const { idDrink } = data[0];
      history.push(`/drinks/${idDrink}`);
    }
  }, [data, history, searchCategoryDrink]);

  const goDetailsDrink = (idDrink) => {
    history.push(`/drinks/${idDrink}`);
  };

  return (
    <>
      <h1 className={ styles.title_recipe_drink }>Drink Recipes</h1>
      { !data
        ? <h2 className={ styles.notfound }>Não foi encontrado nada na busca</h2>
        : (
          <section className={ styles.recipes_container }>
            { data.map(({ strDrink, strDrinkThumb, idDrink }, index) => index < twelve
            && (
              <section
                key={ idDrink }
                className={ styles.card_recipes }
              >
                <button
                  type="button"
                  onClick={ () => goDetailsDrink(idDrink) }
                  data-testid={ `${index}-recipe-card` }
                >
                  <img
                    src={ strDrinkThumb }
                    alt={ `${strDrink} - ${index}` }
                    data-testid={ `${index}-card-img` }
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
