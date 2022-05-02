import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useRequestFoods from '../hooks/useRequestFoods';
import context from '../context';
import styles from '../styles/meals.module.css';

function Foods() {
  const { searchCategoryFood } = useContext(context);
  const history = useHistory();
  // Requisição à Api via Hook Customizado
  const [data] = useRequestFoods();
  const twelve = 12;

  useEffect(() => {
    if (!data) global.alert('Sorry, we haven\'t found any recipes for these filters.');
    if (Array.isArray(data)
     && data.length === 1
     && searchCategoryFood === 'All') {
      const { idMeal } = data[0];
      history.push(`/foods/${idMeal}`);
    }
  }, [data, history, searchCategoryFood]);

  const goDetailsMeal = (idMeal) => {
    history.push(`/foods/${idMeal}`);
  };

  return (
    <>
      <h1 className={ styles.title_recipe_food }>Foods Recipes</h1>
      { !data ? <h2>Não foi encontrado nada na busca</h2> : (
        <section className={ styles.recipes_container }>
          {
            data.map(({ strMeal, strMealThumb, idMeal }, index) => index < twelve
            && (
              <section
                key={ idMeal }
                className={ styles.card_recipes }
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
