import React, { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useRequestDetails from '../hooks/useRequestDetails';
import useRequestRecipeDetails from '../hooks/useRequestRecipeDetails';
import styles from '../styles/details.module.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import context from '../context/index';

// comentei

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
import createItemRecipeInProgress from '../helpers/createItemRecipeInProgress';

const copy = require('clipboard-copy');

function DetailsFoods() {
  const [favor, setFavor] = useState(false);
  const [src, setSrc] = useState();
  const [label, setLabel] = useState('');
  const { id } = useParams();
  const { setIngredientsInProgress } = useContext(context);

  useEffect(() => {
    const setFavorImg = () => {
      const isFavorite = getFavorite(id);
      return (
        isFavorite
          ? setSrc(blackHeartIcon)
          : setSrc(whiteHeartIcon)
      );
    };
    setFavorImg();
  }, [favor, src, id]);

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
      setIngredientsInProgress(item);
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

  const goDetailsDrink = (idDrink) => {
    history.push(`/drinks/${idDrink}`);
  };

  return (

    <section className={ styles.container_main }>
      { data && (
        <section>
          {/* IMAGEM-------------------- */ }
          <img
            src={ data[0].strMealThumb }
            alt="foto"
            className={ styles.main_image }
            data-testid="recipe-photo"
          />

          {/* TITLE-------------------- */ }
          <div className={ styles.header_details }>
            <div>
              <p data-testid="recipe-title">
                { data[0].strMeal }
              </p>
              {/* CATEGORY-------------------- */ }
              <p data-testid="recipe-category">
                { data[0].strCategory }
              </p>
            </div>

            {/* FAVORITE AND SHARE-------------------- */ }
            <section className={ styles.shareAndFavorite }>
              <button
                type="button"
                onClick={ () => shareLink() }
              >
                <img
                  src={ shareIcon }
                  data-testid="share-btn"
                  alt="share"
                />
              </button>
              <button
                type="button"
                onClick={ () => saveFavorite() }
                src={ src }
                data-testid="favorite-btn"
              >
                <img
                  src={ src }
                  alt="favorite"
                />
              </button>
              <p>{ label }</p>
            </section>
          </div>

          {/* INGREDIENTES-------------------- */ }
          <section>
            <div className={ styles.ingredients }>
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
            </div>
            {/* INSTRUCTIONS */ }
            <div className={ styles.instructions }>
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

            {/* Only Foods */ }

            <iframe
              title="recipe-video"
              data-testid="video"
              src={ data[0].strYoutube.replace('watch?v=', 'embed/') }
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
            />

          </section>

          {/* Recomendações */ }
          <h3 className={ styles.recommended }>Recommended</h3>
          <div className={ styles.container_recommended }>
            { recipes && (
              recipes.map(({
                idDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic,
              }, index) => (
                <section
                  key={ index }
                  className={ styles.cards }
                  data-testid={ `${index}-recomendation-card` }
                >
                  <button
                    type="button"
                    onClick={ () => goDetailsDrink(idDrink) }
                  >
                    <img
                      src={ strDrinkThumb }
                      alt={ `${strDrink} - ${index}` }
                      data-testid={ `${index}-recomendation-photo` }
                    />
                  </button>
                  <h3
                    data-testid={ `${index}-recomendation-category` }
                  >
                    { strAlcoholic }
                  </h3>
                  <h4
                    data-testid={ `${index}-recomendation-title` }
                  >
                    { strDrink }
                  </h4>
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

export default DetailsFoods;
