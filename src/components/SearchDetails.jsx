import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useRequestDetails from '../hooks/useRequestDetails';
import styles from '../styles/details.module.css';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import useRequestRecipeDetails from '../hooks/useRequestRecipeDetails';
import { getOneRecipeDone,
  saveRecipeProgress,
  saveRecipeDone,
  getOneRecipeInProgress,
  saveFavoriteRecipe,
  getFavorite } from '../services/localStorage';
import createArrayIngredients from '../helpers/createArrayIngredients';
import createItemFavorite from '../helpers/createItemFavorite';

/* NÃO ESTÁ SENDO UTILIZADO, MAS DEIXEI PARA ESTUDOS */

const copy = require('clipboard-copy');

function SearchDetails() {
  const [favor, setFavor] = useState(false);
  const [label, setLabel] = useState('');
  const { id } = useParams();

  useEffect(() => {
    // é favorito
    const isFavorite = getFavorite(id);
    console.log(isFavorite);
    setFavor(isFavorite);

    return () => {

    };
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

  const properties = type === 'drinks'
    ? ['idMeal', 'strMeal', 'strMealThumb', 'strCategory', 'strArea']
    : ['idDrink', 'strDrink', 'strDrinkThumb', 'strAlcoholic', 'strArea'];

  // Receita feita ?
  const recipeDone = getOneRecipeDone(id);
  // Receita em Progresso ?
  const recipeInProgress = getOneRecipeInProgress(id, type);
  // const isFavorite = getFavorite(id);

  const startRecipe = () => {
    // se não tem chave criada
    if (recipeInProgress) {
      saveRecipeProgress(id, ingredients, type);
      const item = createItemFavorite(type, data);
      saveRecipeDone(item);
      history.push(`/${type}/${id}/in-progress`);
    } else {
      history.push(`/${type}/${id}/in-progress`);
    }
  };

  const saveFavorite = () => {
    saveFavoriteRecipe(id, type, data);
    setFavor((prev) => !prev);
  };

  const shareLink = () => {
    copy(`http://localhost:3000/${type}/${id}`);
    setLabel('Link copied!"');
  };

  return (
    <section>
      {data && (
        <section>
          {/* IMAGEM-------------------- */}
          <img
            src={ type === 'foods'
              ? data[0].strMealThumb
              : data[0].strDrinkThumb }
            alt="foto"
            className={ styles.main_image }
            data-testid="recipe-photo"
          />

          {/* TITLE-------------------- */}
          <div className={ styles.header_details }>
            <p data-testid="recipe-title">
              {' '}
              { type === 'foods'
                ? data[0].strMeal
                : data[0].strDrink }
            </p>

            {/* FAVORITE AND SHARE-------------------- */}
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
                data-testid="favorite-btn"
                src={ favor
                  ? blackHeartIcon
                  : whiteHeartIcon }
              >
                <img
                  src={ favor
                    ? blackHeartIcon
                    : whiteHeartIcon }
                  alt="favorite"
                />
              </button>
              <p>{label}</p>
            </section>
          </div>

          {/* CATEGORY-------------------- */}
          <p data-testid="recipe-category">
            {' '}
            { type === 'foods'
              ? data[0].strCategory
              : data[0].strAlcoholic }
          </p>

          {/* INGREDIENTES-------------------- */}
          <section>
            <h3>Ingredientes</h3>
            {
              ingredients.map((ingrAndMeasure, index) => (
                <p
                  data-testid={ `${index}-ingredient-name-and-measure` }
                  key={ index }
                >
                  {ingrAndMeasure}
                </p>))
            }
            {/* INSTRUCTIONS */}
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

            {/* Only Foods */}
            {type === 'foods' && (
              <iframe
                title="recipe-video"
                data-testid="video"
                width="340"
                height="315"
                src={ data[0].strYoutube.replace('watch?v=', 'embed/') }
                frameBorder="0"
                allow="autoplay"
                allowFullScreen
              />
            )}
          </section>

          {/* Recomendações */}
          <h3>Recommended</h3>
          <div className={ styles.container_recommended }>
            {recipes && (
              recipes.map((e, index) => (
                <section
                  key={ e[properties[0]] }
                  className={ styles.cards }
                  data-testid={ `${index}-recomendation-card` }
                >
                  <button
                    type="button"
                    onClick={ () => goDetailsMeal(e[properties[0]]) }
                  >
                    <img
                      src={ e[properties[2]] }
                      alt={ `${e[properties[1]]} - ${index}` }
                      data-testid={ `${index}-recomendation-photo` }
                    />
                  </button>
                  <h4
                    data-testid={ `${index}-recomendation-category` }
                  >
                    { e[properties[3]]}
                  </h4>
                  <h3
                    data-testid={ `${index}-recomendation-title` }
                  >
                    { e[properties[1]]}
                  </h3>
                </section>
              )))}
          </div>
        </section>

      )}

      {data && !recipeDone && (
        <button
          type="button"
          data-testid="start-recipe-btn"
          className={ styles.btn_start_recipe }
          onClick={ () => startRecipe() }
        >
          {recipeInProgress ? 'Start Recipe' : 'Continue Recipe'}
        </button>
      )}
    </section>
  );
}
export default SearchDetails;
