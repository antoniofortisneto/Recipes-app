import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useRequestDetails from '../hooks/useRequestDetails';
import styles from '../styles/details.module.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import {
  saveFavoriteRecipe,
  getFavorite,
  // getRecipeInProgress,
} from '../services/localStorage';
import createItemFavorite from '../helpers/createItemFavorite';
import createArrayIngredients from '../helpers/createArrayIngredients';

const copy = require('clipboard-copy');

function RecipeFoodInProgress() {
  const [favor, setFavor] = useState(false);
  const [src, setSrc] = useState();
  const [label, setLabel] = useState('');
  // const [ingredients, setIngredients] = useState('');
  const { id } = useParams();

  const history = useHistory();
  // foods or drinks
  const type = history.location.pathname.split('/')[1];

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
    // setIngredients(getRecipeInProgress(id, type));
  }, [favor, src, id, type]);

  // const [recipes] = useRequestRecipeDetails(type);
  // one recipe by id
  const [data] = useRequestDetails(type, id);

  let ingredients = [];
  if (data) {
    ingredients = createArrayIngredients(data);
  }

  const saveFavorite = () => {
    setFavor((prev) => !prev);
    const items = createItemFavorite(type, data);
    saveFavoriteRecipe(items);
  };

  const shareLink = () => {
    copy(`http://localhost:3000/${type}/${id}`);
    setLabel('Link copied!"');
  };

  return (

    <section>
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
            <p data-testid="recipe-title">
              { data[0].strMeal }
            </p>

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

          {/* CATEGORY-------------------- */ }
          <p data-testid="recipe-category">
            { data[0].strCategory }
          </p>

          {/* INGREDIENTES-------------------- */ }
          <section>
            <h3>Ingredientes</h3>
            {
              ingredients
              && ingredients.map((ingrAndMeasure, index) => (
                <label
                  htmlFor={ index }
                  key={ index }
                  style={ { display: 'inline-block' } }
                  data-testid={ `${index}-ingredient-step` }
                >
                  <input
                    id={ index }
                    type="checkbox"
                  />
                  { ingrAndMeasure }
                </label>
              ))
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
        </section>

      ) }

      { data && (
        <button
          type="button"
          data-testid="finish-recipe-btn"
          className={ styles.btn_start_recipe }
          onClick={ () => startRecipe() }
        >
          Finish Recipe
        </button>
      ) }
    </section>
  );
}

export default RecipeFoodInProgress;
