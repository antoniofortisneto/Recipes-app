import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import context from '../context';
import useRequestExploreIngredients from '../hooks/useRequestExploreIngredients';
import styles from '../styles/ingredients.module.css';

function ExploreDrinksIngredients() {
  const [data] = useRequestExploreIngredients('drinks');
  const { saveSearch } = useContext(context);
  const history = useHistory();
  return (
    <section className={ styles.ingredients_container }>
      <Header title="Explore Ingredients" />
      <section className={ styles.card_container }>
        {
          data && data.map(({ strIngredient1 }, index) => (
            <div
              key={ index }
              className={ styles.card }
              data-testid={ `${index}-ingredient-card` }
              role="presentation"
              onClick={ () => {
                saveSearch(strIngredient1, 'ingredient'); history.push('/drinks');
              } }
            >
              <img
                src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
                alt={ `${strIngredient1}` }
                data-testid={ `${index}-card-img` }
              />
              <h3
                data-testid={ `${index}-card-name` }
              >
                {strIngredient1}
              </h3>
            </div>
          ))
        }
      </section>
      <Footer />
    </section>
  );
}

export default ExploreDrinksIngredients;
