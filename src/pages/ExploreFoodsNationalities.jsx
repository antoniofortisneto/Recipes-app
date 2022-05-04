import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useRequestArea from '../hooks/useRequestArea';
import useRequestFoodByNationality from '../hooks/useRequestFoodByNationality';
import context from '../context';
import styles from '../styles/meals.module.css';
import explore from '../styles/explore.module.css';

function ExploreFoodsNationalities() {
  const [nationality, setNationality] = useState('');
  const { saveArea } = useContext(context);

  // foods locales
  const [area] = useRequestArea();

  // foods
  const [data] = useRequestFoodByNationality();

  // save locale state locally and globally
  function saveChoiceNationality(e) {
    setNationality(e);
    saveArea(e);
  }

  const twelve = 12;

  const history = useHistory();
  const goDetailsMeal = (idMeal) => {
    history.push(`/foods/${idMeal}`);
  };

  return (
    <section>
      <Header title="Explore Nationalities" showSearch />
      <div className={ explore.div_select_nationality }>

        <select
          name="nationatility_select"
          data-testid="explore-by-nationality-dropdown"
          onChange={ (e) => saveChoiceNationality(e.target.value) }
          value={ nationality }
        >
          {
            area.map((strArea, index) => (
              <option
                key={ index }
                data-testid={ `${strArea}-option` }
              >
                { strArea }
              </option>
            ))
          }
        </select>
      </div>

      <h1 className={ styles.title_recipe_food }>Foods By Nationality</h1>
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

      <Footer />
    </section>
  );
}

export default ExploreFoodsNationalities;
