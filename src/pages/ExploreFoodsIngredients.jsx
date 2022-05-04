import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import context from '../context';
import useRequestExploreIngredients from '../hooks/useRequestExploreIngredients';

function ExploreFoodsIngredients() {
  const [data] = useRequestExploreIngredients('foods');
  const { saveSearch } = useContext(context);
  const history = useHistory();
  return (
    <section>
      <Header title="Explore Ingredients" />
      <section>
        {
          data && data.map(({ strIngredient }, index) => (
            <div
              key={ index }
              data-testid={ `${index}-ingredient-card` }
              style={ { marginTop: '100px' } }
              role="presentation"
              onClick={ () => {
                saveSearch(strIngredient, 'ingredient'); history.push('/foods');
              } }
            >
              <img
                src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
                alt={ `${strIngredient}` }
                data-testid={ `${index}-card-img` }
              />
              <h3
                data-testid={ `${index}-card-name` }
              >
                {strIngredient}
              </h3>
            </div>
          ))
        }
      </section>
      <Footer />
    </section>
  );
}

export default ExploreFoodsIngredients;
