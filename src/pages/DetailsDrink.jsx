import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useRequestDetails from '../hooks/useRequestDetails';
import useRequestRecipeDetails from '../hooks/useRequestRecipeDetails';
import styles from '../styles/details.module.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import createItemRecipeInProgress from '../helpers/createItemRecipeInProgress';

import {
  getOneRecipeDone,
  saveRecipeProgress,
  saveRecipeDone,
  getOneRecipeInProgress,
  saveFavoriteRecipe,
  getFavorite,
} from '../services/localStorage';
import createArrayIngredients from '../helpers/createArrayIngredients';
import createItemFavorite from '../helpers/createItemFavorite';

const copy = require('clipboard-copy');

function DetailsDrink() {
  const [favor, setFavor] = useState(false);
  const [label, setLabel] = useState('');
  const { id } = useParams();

  useEffect(() => {

  }, [favor, id]);

  const history = useHistory();
  // foods or drinks
  const type = history.location.pathname.split('/')[1];
  // 6 recipes
  const [recipes] = useRequestRecipeDetails(type);
  // one recipe by id
  const [data] = useRequestDetails(type, id);

  let ingredients = [];
  if (data) {
    ingredients = createArrayIngredients(data);
  }

  // Receita feita ?
  const recipeDone = getOneRecipeDone(id);
  // Receita em Progresso ?
  const recipeInProgress = getOneRecipeInProgress(id, type);
  // const isFavorite = getFavorite(id);

  const startRecipe = () => {
    // se não tem chave criada
    if (recipeInProgress) {
      saveRecipeProgress(id, ingredients, type);
      const item = createItemRecipeInProgress(type, data);
      saveRecipeDone(item);
      history.push(`/${type}/${id}/in-progress`);
    } else {
      history.push(`/${type}/${id}/in-progress`);
    }
  };

  const saveFavorite = () => {
    setFavor((prev) => !prev);
    const items = createItemFavorite(type, data);
    saveFavoriteRecipe(items);
  };

  const shareLink = () => {
    copy(`http://localhost:3000/${type}/${id}`);
    setLabel('Link copied!"');
  };

  const setFavorImg = () => {
    const isFavorite = getFavorite(id);
    return (
      isFavorite
        ? (blackHeartIcon)
        : (whiteHeartIcon)
    );
  };

  return (
    <section>
      { data && (
        <section>
          {/* IMAGEM-------------------- */ }
          <img
            src={ data[0].strDrinkThumb }
            alt="foto"
            className={ styles.main_image }
            data-testid="recipe-photo"
          />

          {/* TITLE-------------------- */ }
          <div className={ styles.header_details }>
            <p data-testid="recipe-title">
              { data[0].strDrink }
            </p>

            {/* FAVORITE AND SHARE-------------------- */ }
            <section className={ styles.shareAndFavorite }>
              <button
                type="button"
                onClick={ () => shareLink() }
                data-testid="share-btn"
              >
                <img src={ shareIcon } alt="share" />
              </button>
              <button
                type="button"
                onClick={ () => saveFavorite() }
              >
                <img
                  data-testid="favorite-btn"
                  src={ setFavorImg() }
                  alt="favorite"
                />
              </button>
              <p>{ label }</p>
            </section>
          </div>

          {/* CATEGORY-------------------- */ }
          <p data-testid="recipe-category">
            { data[0].strAlcoholic }
          </p>

          {/* INGREDIENTES-------------------- */ }
          <section>
            <h3>Ingredientes</h3>
            {
              ingredients.map((ingrAndMeasure, index) => (
                <p
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  key={ index }
                >
                  { ingrAndMeasure }
                </p>))
            }
            {/* INSTRUCTIONS */ }
            <div>
              <h3>Instructions</h3>
              <textarea
                name="textarea_instructions"
                data-testid="instructions"
                cols="40"
                rows="7"
                readOnly
                value={ data[0].strInstructions }
              />
            </div>

          </section>

          {/* Recomendações */ }
          <h3>Recommended</h3>
          <div className={ styles.container_recommended }>
            { recipes && (
              recipes.map(({ idMeal,
                strMeal,
                strMealThumb,
                strCategory,
              }, index) => (
                <section
                  key={ index }
                  className={ styles.cards }
                  data-testid={ `${index}-recomendation-card` }
                >
                  <button
                    type="button"
                    onClick={ () => goDetailsMeal(idMeal) }
                  >
                    <img
                      src={ strMealThumb }
                      alt={ `${strMeal} - ${index}` }
                      data-testid={ `${index}-recomendation-photo` }
                    />
                  </button>
                  <h4
                    data-testid={ `${index}-recomendation-category` }
                  >
                    { strCategory }
                  </h4>
                  <h3
                    data-testid={ `${index}-recomendation-title` }
                  >
                    { strMeal }
                  </h3>
                </section>
              ))) }
          </div>
        </section>

      ) }

      { data && !recipeDone && (
        <button
          type="button"
          data-testid="start-recipe-btn"
          className={ styles.btn_start_recipe }
          onClick={ () => startRecipe() }
        >
          { recipeInProgress ? 'Start Recipe' : 'Continue Recipe' }
        </button>
      ) }
    </section>
  );
}

export default DetailsDrink;
