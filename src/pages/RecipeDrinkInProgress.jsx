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
  getItemsChecked,
  saveItemsChecked,
  // getRecipeInProgress,
} from '../services/localStorage';
import createItemFavorite from '../helpers/createItemFavorite';
import createArrayIngredients from '../helpers/createArrayIngredients';

const copy = require('clipboard-copy');

function RecipeDrinkInProgress() {
  const [favor, setFavor] = useState(false);
  const [src, setSrc] = useState();
  const [label, setLabel] = useState('');
  const [checkedState, setCheckedState] = useState(false);
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
  }, [favor, src, id, type, checkedState]);

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

  const handleChange = ({ target: { className, value } }) => {
    const element = document.getElementById(className);
    // const sectionIngredients = document.getElementById(id);
    // console.log(sectionIngredients);
    if (element.style.textDecoration !== '') {
      element.style.textDecoration = null;
    } else {
      element.style.textDecoration = 'line-through';
    }
    saveItemsChecked({ id: `${id}-${value}` });
    setCheckedState((prev) => !prev);
  };

  const checkQuantity = () => {
    const quantity = getItemsChecked().filter((e) => e.id.includes(id));
    return quantity;
  };

  const doneRecipe = () => {
    history.push('/done-recipes');
  };

  return (

    <section className={ styles.container_main_inprogress }>
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
            <div>
              <p data-testid="recipe-title">
                { data[0].strDrink }
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
            <fieldset>
              <legend>Ingredientes</legend>
              <div>
                <section id={ id } className={ styles.ingredients }>
                  {
                    ingredients
                && ingredients.map((ingrAndMeasure, index) => (
                  <label
                    htmlFor={ index }
                    id={ `${index}-ingredient-step` }
                    key={ index }
                    style={ getItemsChecked !== null
                      && getItemsChecked().some((e) => e.id === `${id}-${index}`) ? (
                        { textDecoration: 'line-through' }
                      ) : ({ display: 'inline-block' }) }
                    data-testid={ `${index}-ingredient-step` }
                  >
                    <input
                      checked={ getItemsChecked !== null
                        && getItemsChecked().some((e) => e.id === `${id}-${index}`) }
                      id={ index }
                      type="checkbox"
                      value={ index }
                      className={ `${index}-ingredient-step` }
                      onChange={ (e) => handleChange(e) }
                    />
                    { ingrAndMeasure }
                  </label>
                ))
                  }
                </section>
              </div>
            </fieldset>
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
          </section>
        </section>

      ) }

      { data && (
        <button
          disabled={ checkQuantity().length !== ingredients.length }
          type="button"
          data-testid="finish-recipe-btn"
          className={ checkQuantity().length === ingredients.length
            ? styles.btn_start_recipe
            : styles.btn_disabled }
          onClick={ () => doneRecipe() }
        >
          Finish Recipe
        </button>
      ) }
    </section>
  );
}

export default RecipeDrinkInProgress;
